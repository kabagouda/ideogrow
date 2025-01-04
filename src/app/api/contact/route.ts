import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, project } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["audreytimbani@gmail.com"],

      subject: "Nouvelle Demande de Projet - Ideogrow Agency",
      html: `
        <h2>Nouvelle Demande de Projet</h2>
        
        <h3>Informations du Contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>

        <h3>Description du Projet</h3>
        <p>${project}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Votre demande a été envoyée avec succès",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi de votre demande",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
