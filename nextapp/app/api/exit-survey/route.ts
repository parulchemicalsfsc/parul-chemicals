import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

/**
 * API Route for handling Exit Intent Questionnaire
 */

const SURVEYS_FILE = path.join(process.cwd(), 'lib', 'surveys.json');

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, company, country, insightful, product, knowCompany, duration } = body

    // --- 1. STORE IN LOCAL JSON "DATABASE" ---
    try {
      let surveys = [];
      if (fs.existsSync(SURVEYS_FILE)) {
        const data = fs.readFileSync(SURVEYS_FILE, 'utf8');
        surveys = JSON.parse(data);
      }
      
      surveys.unshift({
        id: Date.now(),
        date: new Date().toISOString(),
        ...body
      });
      
      fs.writeFileSync(SURVEYS_FILE, JSON.stringify(surveys, null, 2));
      console.log("Survey saved to local file system.");
    } catch (fsError) {
      console.error("Failed to save survey to file:", fsError);
    }

    // --- 2. SETUP NODEMAILER TRANSPORTER ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const subject = `🚪 EXIT SURVEY: ${name} from ${company || country || 'Unknown'}`

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0F1C33; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Parul Chemicals - Exit Survey</h1>
        </div>
        <div style="padding: 30px; color: #4a5568;">
          <h2 style="color: #0F1C33; border-bottom: 2px solid #4DA8DA; padding-bottom: 10px;">
            Visitor Feedback
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 180px;">Name:</td><td>${name || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${company || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Country:</td><td>${country || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Found Insightful?</td><td>${insightful || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Product of Interest:</td><td>${product || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Known us before?</td><td>${knowCompany || 'N/A'}</td></tr>
            ${knowCompany === 'Yes' ? `<tr><td style="padding: 8px 0; font-weight: bold;">For how long?</td><td>${duration || 'N/A'}</td></tr>` : ''}
          </table>
        </div>
        <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #94a3b8;">
          This feedback was captured via the Exit Intent Popup.
        </div>
      </div>
    `

    // --- 3. SYNC TO LMS (EXTERNAL API) ---
    const leadPayload = {
      source_website: "parul_chemicals_exit_survey",
      full_name: name || "Anonymous Visitor",
      email: "exit-survey@visitor.com",
      company_name: company || country || "N/A",
      product_interest: product || "General Interest",
      message: `[EXIT SURVEY] 
        Country: ${country}
        Insightful: ${insightful}
        Known us before: ${knowCompany}
        Duration: ${duration || 'N/A'}`
    }

    try {
      const baseUrl = process.env.LEAD_API_URL || "https://pc-sales-8phu.onrender.com"
      await fetch(`${baseUrl}/api/leads/intake`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.LEAD_API_KEY || "test-lead-key-change-me"
        },
        body: JSON.stringify(leadPayload)
      });
    } catch (lmsError) {
      console.error("Failed to sync survey to LMS:", lmsError);
    }

    // --- 4. SEND THE EMAIL ---
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const receiver = process.env.RECEIVER_EMAIL || 'info@parulchemicals.in';
      await transporter.sendMail({
        from: `"Parul Chemicals Survey" <${process.env.EMAIL_USER}>`,
        to: receiver,
        subject: subject,
        html: htmlContent,
      })
      return NextResponse.json({ success: true, message: 'Survey stored in DB, synced and notification sent' })
    }

    return NextResponse.json({ success: true, message: 'Survey stored in DB and synced' })

  } catch (error) {
    console.error('Survey API Error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
