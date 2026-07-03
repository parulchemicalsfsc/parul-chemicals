import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    
    // Extract base fields safely
    const name = (formData.get('name') || formData.get('fullName') || '').toString()
    const email = (formData.get('email') || '').toString()
    const role = (formData.get('role') || formData.get('position') || '').toString()
    const source = (formData.get('source') || 'Careers Page').toString()

    if (!name || !email || !role) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const subject = `🚀 JOB APPLICATION (${source}): ${name} - ${role}`

    const attachments = []
    const textFields: Record<string, string> = {}

    for (const [key, value] of Array.from(formData.entries())) {
      if (value instanceof File) {
        if (value.size > 0) {
          const buffer = Buffer.from(await value.arrayBuffer())
          attachments.push({
            filename: value.name,
            content: buffer
          })
        }
      } else {
        textFields[key] = value.toString()
      }
    }

    let fieldsHtml = ''
    for (const [key, val] of Object.entries(textFields)) {
      if (key === 'source' || !val) continue
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      fieldsHtml += `
        <tr>
          <td style="padding: 10px; font-weight: bold; width: 35%; border-bottom: 1px solid #e2e8f0; color: #4DA8DA;">${formattedKey}:</td>
          <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; white-space: pre-wrap;">${val}</td>
        </tr>
      `
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 700px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0F1C33; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">${source} - Job Application</h1>
        </div>
        <div style="padding: 30px; color: #4a5568;">
          <h2 style="color: #0F1C33; border-bottom: 2px solid #4DA8DA; padding-bottom: 10px;">
            Application Details
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            ${fieldsHtml}
          </table>
        </div>
        <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #94a3b8;">
          This application was submitted via the Parul Chemicals Careers Page.
        </div>
      </div>
    `

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Send applications to the official careers email defined in .env.local
      const receiver = process.env.CAREERS_RECEIVER_EMAIL || 'career.parulchemicals@gmail.com';
      
      await transporter.sendMail({
        from: `"Parul Careers" <${process.env.EMAIL_USER}>`,
        to: receiver,
        subject: subject,
        html: htmlContent,
        attachments
      })
      return NextResponse.json({ success: true, message: 'Application submitted successfully' })
    } else {
      console.warn("Mailing keys missing for careers form.")
      return NextResponse.json({ 
        success: true, 
        message: 'Application recorded (Mailing credentials missing in .env.local)' 
      })
    }

  } catch (error) {
    console.error('Career Form Error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
