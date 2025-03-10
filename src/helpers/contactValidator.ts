import { z } from 'zod';

export const sendMessage = z.object({
  name: z
    .string()
    .min(1, 'Este campo es obligatorio')
    .max(45, 'El nombre no puede tener más de 45 caracteres'),

  subject: z
    .string()
    .min(1, 'Este campo es obligatorio')
    .max(50, 'El asunto no puede tener más de 50 caracteres'),

  message: z
    .string()
    .min(1, 'Este campo es obligatorio')
    .max(500, 'El mensaje no puede tener más de 500 caracteres'),

  email: z
    .string()
    .email('Debe ser un correo electrónico válido')
    .min(1, 'Este campo es obligatorio')
    .max(55, 'El email no puede tener más de 55 caracteres'),

  phone: z
    .number()
    .nullable()
    .refine(
      (value) => {
        if (value === null) return true;
        return value >= 100000000 && value <= 999999999999999;
      },
      {
        message: 'El número de teléfono debe tener entre 9 y 15 dígitos',
      },
    ),

  termsConfirmed: z.boolean().refine((val) => val === true, {
    message: 'Tienes que aceptar los términos y condiciones',
  }),
});
