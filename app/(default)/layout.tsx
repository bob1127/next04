'use client'

import { useEffect } from 'react'
import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import  Navbar from '../../components/Navbar/Navbar'

import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>

      <main className="grow">
        <Navbar/>
        <NextUIProvider>
        {children}
        </NextUIProvider>
      </main>

      <Footer />
    </>
  )
}
