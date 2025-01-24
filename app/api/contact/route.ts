import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, type } = body

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Tous les champs sont requis.",
        },
        { status: 400 },
      )
    }

    // Customize email subject based on the type of request
    const emailSubject =
      type === "quote" ? `Nouvelle demande de devis: ${subject}` : `Nouveau message de contact: ${subject}`

    // Prepare email content
    const emailContent = `
      <h1>${type === "quote" ? "Nouvelle demande de devis" : "Nouveau message de contact"}</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      <p><strong>Sujet:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `

    // Send email
    await sendEmail("louis@techni-decors.com", emailSubject, emailContent)

    return NextResponse.json({
      success: true,
      message: type === "quote" ? "Demande de devis envoyée avec succès" : "Message envoyé avec succès",
    })
  } catch (error) {
    console.error("Error in contact submission:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la soumission. Veuillez réessayer.",
      },
      { status: 500 },
    )
  }
}

