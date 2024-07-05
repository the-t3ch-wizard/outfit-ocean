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

export const checkoutFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, {
    message: "Name should be atleast 1 character"
  }),
  country: z.string().min(1, {
    message: "Country should be atleast 1 character"
  }),
  address: z.string().min(1, {
    message: "Address should be atleast 1 character"
  }),
  town: z.string().min(1, {
    message: "Town should be atleast 1 character"
  }),
  state: z.string().min(1, {
    message: "State should be atleast 1 character"
  }),
  postcode: z.string()
})

