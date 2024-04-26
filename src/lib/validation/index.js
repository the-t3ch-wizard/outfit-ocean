import { z } from 'zod';

export const customerSignupSchema = z.object({
  name: z.string().min(1, {
    message: "Name should be atleast 1 character"
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password should be atleast 8 character"
  })
})

export const customerSigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password should be atleast 8 character"
  })
})

