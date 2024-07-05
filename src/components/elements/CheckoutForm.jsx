import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { checkoutFormSchema, customerSigninSchema } from '@/lib/validation'
import { useSigninCustomerAccount } from '@/lib/react-query/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'
import { Title } from '.'
import { useToast } from '../ui/use-toast'
import { useSetRecoilState } from 'recoil'
import { buyNowAvailableAtom } from '@/store/atoms/atoms'

export default function CheckoutForm({ className }) {

  const { toast } = useToast();

  const { checkAuthUser, isPending: isCustomerLoading } = useUserContext();

  const setBuynowAvailable = useSetRecoilState(buyNowAvailableAtom);

  const { mutateAsync: signinSellerAccount, isPending: isSigningInCustomerAccount } = useSigninCustomerAccount();

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      name: "",
      country: "",
      address: "",
      town: "",
      state: "",
      postcode: ""
    },
  })

  async function onSubmit(values) {
    
    setBuynowAvailable(true);
    
    toast({
      title: `Details saved successfully! ✅`,
      description: `You can continue with Buy now option 👍`
    })

  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-[350px] flex flex-col gap-4">
          <div className='w-full flex flex-col gap-2'>
            <Title title={`Contact`} />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email address" type="email" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='w-full flex flex-col gap-2'>
            <Title title={`Delivery Address`} />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Your country" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Your address" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='w-full flex gap-4'>
              <FormField
                control={form.control}
                name="town"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Town</FormLabel>
                    <FormControl>
                      <Input placeholder="Town" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postcode</FormLabel>
                    <FormControl>
                      <Input placeholder="Postcode" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-primary flex justify-center items-center" >
            {
              isSigningInCustomerAccount || isCustomerLoading ? (
                <div className=' flex gap-2 justify-center items-center'>
                  <Loader className={` fill-secondary`} />
                  Loading
                </div>
              ) : (
                <div>
                  Submit
                </div>
              )
            }
          </Button>
        </form>
      </Form>

    </div>
  )
}
