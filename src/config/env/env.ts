import zod from 'zod';

const envSchema = zod.object({
  NEXT_PUBLIC_EMAIL: zod.string().email(),
  NEXT_PUBLIC_URL_WEB: zod.string().url(),
  EMAIL_PASS: zod.string().min(1),
});
export const validateEnv = () => envSchema.safeParse(process.env);
