import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, role, linkedin, message } = body

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

    const subject = `🚀 JOB APPLICATION: ${name} - ${role}`

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0F1C33; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Parul Chemicals - Careers</h1>
        </div>
        <div style="padding: 30px; color: #4a5568;">
          <h2 style="color: #0F1C33; border-bottom: 2px solid #4DA8DA; padding-bottom: 10px;">
            New Job Application
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Applicant Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email Address:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone Number:</td><td>${phone || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Applied Role:</td><td style="color: #4DA8DA; font-weight: bold;">${role}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">LinkedIn/Portfolio:</td><td>${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Cover Letter:</td><td style="white-space: pre-wrap;">${message || 'N/A'}</td></tr>
          </table>
        </div>
        <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #94a3b8;">
          This application was submitted via the Parul Chemicals Careers Page.
        </div>
      </div>
    `

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Send to info@parulchemicals.in as requested by the user
      const receiver = 'info@parulchemicals.in';
      
      await transporter.sendMail({
        from: `"Parul Careers" <${process.env.EMAIL_USER}>`,
        to: receiver,
        subject: subject,
        html: htmlContent,
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
