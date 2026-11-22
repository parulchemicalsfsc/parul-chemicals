import { NextResponse } from 'next/server'

/**
 * POST /api/sample-request
 * Handles Triethyl Citrate (TEC) evaluation sample requests from the dedicated landing page.
 * Dispatches directly to the company Lead Management System (LMS).
 */
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      name,
      jobTitle,
      company,
      email,
      phone,
      country,
      application,
      currentProduct,
      annualVolume,
      sampleSize,
      documentsNeeded,
      message,
      website_hp,
    } = body

    // 1. Zero-friction Honeypot Check (Bot mitigation)
    if (website_hp) {
      console.warn('Bot submission blocked via honeypot field.')
      return NextResponse.json({ success: true, message: 'Request processed' })
    }

    // 2. Server-side Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      )
    }

    if (!jobTitle || typeof jobTitle !== 'string' || !jobTitle.trim()) {
      return NextResponse.json(
        { success: false, error: 'Job title is required.' },
        { status: 400 }
      )
    }

    if (!company || typeof company !== 'string' || !company.trim()) {
      return NextResponse.json(
        { success: false, error: 'Company or fragrance house name is required.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Work email is required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid work email address.' },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Contact phone number is required.' },
        { status: 400 }
      )
    }

    if (!country || typeof country !== 'string' || !country.trim()) {
      return NextResponse.json(
        { success: false, error: 'Destination country is required.' },
        { status: 400 }
      )
    }

    if (!application || typeof application !== 'string' || !application.trim()) {
      return NextResponse.json(
        { success: false, error: 'Primary application sector is required.' },
        { status: 400 }
      )
    }

    // Length constraints to prevent DoS payloads
    if (name.length > 100 || jobTitle.length > 100 || company.length > 120 || email.length > 120) {
      return NextResponse.json(
        { success: false, error: 'Input length exceeds allowable limits.' },
        { status: 400 }
      )
    }

    if (message && typeof message === 'string' && message.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Message length exceeds 2000 characters limit.' },
        { status: 400 }
      )
    }

    // 3. Local-Only Mock Mode Check
    // Mock mode activates ONLY when running in development AND explicitly requested via environment variable.
    // In production environments (NODE_ENV === 'production'), this is strictly bypassed.
    const isMockMode =
      process.env.NODE_ENV === 'development' &&
      process.env.TEC_SAMPLE_MOCK_MODE === 'true'

    if (isMockMode) {
      return NextResponse.json({
        success: true,
        message: 'Sample request simulated successfully (Development Mock Mode).',
        mockMode: true,
        lmsRecorded: false,
      })
    }

    // 4. Format Documents & Structured Message (capturing all 11 evaluation fields)
    const docsFormatted =
      Array.isArray(documentsNeeded) && documentsNeeded.length > 0
        ? documentsNeeded.join(', ')
        : 'Standard pack only (COA, TDS, SDS automatically enclosed)'

    const structuredMessage = [
      '[TEC SAMPLE REQUEST - FRAGRANCE & FLAVOUR GRADE]',
      `Job Title: ${jobTitle.trim()}`,
      `Destination Country: ${country.trim()}`,
      `Primary Application: ${application.trim()}`,
      `Current Solvent Used: ${currentProduct?.trim() || 'Not specified'}`,
      `Estimated Annual Volume: ${annualVolume?.trim() || 'Not specified'}`,
      `Sample Size Requested: ${sampleSize?.trim() || '250 g'}`,
      `Regulatory Documents Needed: ${docsFormatted}`,
      message && typeof message === 'string' && message.trim()
        ? `Notes / Inquiries: ${message.trim()}`
        : null,
    ]
      .filter(Boolean)
      .join('\n')

    // 5. Build LMS Payload (Aligned with PC Sales registered intake schema)
    const leadPayload = {
      source_website: 'parul_chemicals',
      full_name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      country: country.trim(),
      company_name: company.trim(),
      product_interest: 'Triethyl Citrate (TEC) - Fragrance & Flavour Grade',
      message: structuredMessage,
    }

    // 6. Send to Lead Management System (LMS) with 60,000ms Timeout (accounting for Render cold-starts)
    const lmsUrl = process.env.LEAD_API_URL || 'https://sales-management-backend-4uuu.onrender.com'
    const lmsApiKey = process.env.LEAD_API_KEY || 'PCSALES'

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000)

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      }
      if (lmsApiKey) {
        headers['X-API-Key'] = lmsApiKey
      }

      const lmsResponse = await fetch(`${lmsUrl}/api/leads/intake`, {
        method: 'POST',
        headers,
        body: JSON.stringify(leadPayload),
        signal: controller.signal,
      })

      if (lmsResponse.ok) {
        const lmsData = await lmsResponse.json().catch(() => null)
        return NextResponse.json({
          success: true,
          message: 'Sample request successfully recorded.',
          leadId: lmsData?.lead_id || undefined,
          lmsRecorded: true,
        })
      } else {
        const errData = await lmsResponse.json().catch(() => null)
        console.error(`LMS API Error: Status ${lmsResponse.status}`, errData?.detail || '')
        return NextResponse.json(
          {
            success: false,
            error:
              'Unable to record sample request in our system at this time. Please contact info@parulchemicals.in directly.',
            lmsRecorded: false,
          },
          { status: 502 }
        )
      }
    } catch (lmsError: any) {
      if (lmsError.name === 'AbortError') {
        console.error('LMS request timed out after 25,000ms.')
        return NextResponse.json(
          {
            success: false,
            error: 'Request timed out while connecting to the Lead Management System. Please try again.',
            lmsRecorded: false,
          },
          { status: 504 }
        )
      } else {
        console.error('Failed to communicate with LMS:', lmsError.message || lmsError)
        return NextResponse.json(
          {
            success: false,
            error:
              'Network error while connecting to the Lead Management System. Please check your connection or contact info@parulchemicals.in.',
            lmsRecorded: false,
          },
          { status: 502 }
        )
      }
    } finally {
      clearTimeout(timeoutId)
    }
  } catch (error: any) {
    console.error('Sample Request API Handler Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
