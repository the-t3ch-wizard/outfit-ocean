import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthLayout, RootLayout } from './components/elements'
import { Toaster } from "@/components/ui/toaster"
import { BuyNow, Cart, Checkout, Explore, Home, NotFound, Orders, Product, Signin, Signup } from './pages'

export default function App() {
  return (
    <div className=' w-full font-geist'>

      <Routes>
        
        <Route element={<AuthLayout />} >
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Route>

        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/my-cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orders' element={<Orders />} />

          {/* <Route path='/buy-now' element={<BuyNow />} /> */}
          
          {/* <Route path='/saved' element={<Saved />} /> */}
          {/* <Route path='/people' element={<People />} /> */}
          {/* <Route path='/profile/:id' element={<Profile />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} /> */}
        </Route>

        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Toaster />
    </div>
  )
}
