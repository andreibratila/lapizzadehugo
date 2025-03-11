import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, 'Name es obligatorio')
    .max(50, 'El nombre no puede tener más de 50 caracteres'),
  subject: z
    .string()
    .min(1, 'Subject es obligatorio')
    .max(50, 'El asunto no puede tener más de 50 caracteres'),
  email: z
    .string()
    .email('Email incorrecto')
    .max(55, 'El email no puede tener más de 55 caracteres'),
  phone: z
    .string()
    .max(15, 'El número de teléfono debe tener max 15 dígitos')
    .nullable(),

  message: z
    .string()
    .min(1, 'Message es obligatorio')
    .max(1000, 'Message max 1000 characters'),
});

export type ContactShemaI = z.infer<typeof ContactSchema>;
