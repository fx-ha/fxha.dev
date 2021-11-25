import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
  port: 465,
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).send({ error: 'Requires POST request' })
  }

  res.setHeader('Content-Type', 'application/json')

  try {
    const { name, email, message } = req.body

    if (!name || !name.trim()) {
      throw new Error('Please provide a valid name.')
    }

    if (!email || !email.trim()) {
      throw new Error('Please provide a valid email address.')
    }

    if (!message || !message.trim()) {
      throw new Error('Please provide a valid message.')
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `Contact request from ${name} (${email})`,
      text: message,
    })

    res.status(200).json({})
  } catch (error) {
    console.error(error)

    res.status(500).json({ error })
  }
}

export default handler
