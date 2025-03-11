import nodemailer from 'nodemailer';

import { PRIVATE_EMAIL_PASS_ENV } from './env/private-env';
import { EMAIL_ENV } from './env/public-env';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: true, // gmail
  auth: {
    user: EMAIL_ENV,
    pass: PRIVATE_EMAIL_PASS_ENV,
  },
});

export const mailOptions = (
  nombre: string,
  email: string,
  asunto: string,
  mensaje: string,
  phone: string | null = '',
) => ({
  from: EMAIL_ENV,
  to: EMAIL_ENV,
  subject: '📩 Nuevo mensaje desde la web',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 2px solid #f0f0f0; border-radius: 10px; background-color: #ffffff;">
      <h2 style="color: #0073e6; text-align: center;">📩 Nuevo mensaje recibido</h2>
      <hr style="border: 1px solid #ddd;">
      
      <p><strong>👤 Nombre:</strong> ${nombre}</p>
      <p><strong>📧 Correo:</strong> <a href="mailto:${email}" style="color: #0073e6; text-decoration: none;">${email}</a></p>
      <p><strong>📝 Asunto:</strong> ${asunto}</p>
      <p><strong>📝 Telefono:</strong> ${phone}</p>
      
      <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0073e6; margin-top: 15px;">
        <p style="font-style: italic;">"${mensaje}"</p>
      </div>

      <hr style="border: 1px solid #ddd;">
      <p style="text-align: center; font-size: 12px; color: #777;">📬 Este mensaje fue enviado desde el formulario de contacto de tu web.</p>
    </div>
  `,
});
