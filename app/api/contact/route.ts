import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'diniluqaili@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 2rem; background: #08080E; color: #DEDEE8;">
          <h2 style="color: #C8FF00; margin-bottom: 1.5rem; font-size: 1.2rem; letter-spacing: 0.1em;">
            NEW PORTFOLIO MESSAGE
          </h2>

          <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid #1C1C2E; background: #0F0F1A;">
            <p style="color: #55556E; font-size: 0.75rem; letter-spacing: 0.2em; margin-bottom: 0.4rem;">FROM</p>
            <p style="color: #DEDEE8; font-size: 1rem;">${name}</p>
          </div>

          <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid #1C1C2E; background: #0F0F1A;">
            <p style="color: #55556E; font-size: 0.75rem; letter-spacing: 0.2em; margin-bottom: 0.4rem;">EMAIL</p>
            <p style="color: #C8FF00; font-size: 1rem;">${email}</p>
          </div>

          <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid #1C1C2E; background: #0F0F1A;">
            <p style="color: #55556E; font-size: 0.75rem; letter-spacing: 0.2em; margin-bottom: 0.4rem;">MESSAGE</p>
            <p style="color: #DEDEE8; font-size: 1rem; line-height: 1.8;">${message}</p>
          </div>

          <p style="color: #55556E; font-size: 0.7rem; margin-top: 2rem; letter-spacing: 0.1em;">
            Sent from aetozed-portfolio · ${new Date().toISOString()}
          </p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })

  } catch (err) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}