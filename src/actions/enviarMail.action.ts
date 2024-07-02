"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

import { sendMessage } from "@/helpers";
import { IFormState } from "@/interface/Mail";

const EMAIL = process.env.EMAIL || "";
const EMAIL_PASS = process.env.EMAIL_PASS || "";

// const transporter = nodemailer.createTransport({
//   host: "mail.privateemail.com",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true, // gmail
  auth: {
    user: EMAIL,
    pass: EMAIL_PASS,
  },
});

export const enviarMail = async ({
  name,
  email,
  subject,
  phone,
  message,
  termsConfirmed,
}: IFormState) => {
  try {
    sendMessage.parse({ name, email, subject, phone, message, termsConfirmed });
    const mailOptions = {
      from: EMAIL,
      to: EMAIL, // Asumiendo que quieres enviar el correo al email proporcionado en el formulario
      subject: `Nuevo mensaje de: ${name} email: ${email}`,
      text: `${
        phone && `telefono:${phone},`
      } asunto: ${subject}, mensaje: ${message}`,
    };
    console.log(EMAIL, EMAIL_PASS);
    await transporter.sendMail(mailOptions);

    return { sended: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Convertir errores de Zod a un formato de mensaje útil
      throw new Error(
        `Validation error: ${error.errors.map((e) => e.message).join(", ")}`
      );
    } else {
      console.log(error);
      throw new Error("Failed to send email due to an unexpected error.");
    }
  }
};
