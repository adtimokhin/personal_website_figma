import localFont from 'next/font/local'

import './globals.css'
import NavBar from '@/components/main_page/NavBar'
import Footer from '@/components/Footer'
import Head from 'next/head'

// Declaring fonts
const montserrat = localFont({
  src: [
    {
      path: './fonts/Montserrat/Montserrat-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/Montserrat-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/Montserrat-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat/Montserrat-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable:"--montserrat",
})

const switzer = localFont({
  src: [
    {
      path: './fonts/Switzer/Switzer-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Switzer/Switzer-Light.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  variable:"--switzer",
})

export const metadata = {
  title: 'adtimokhin | Personal Website',
  description: 'CS student @ UChicago, a software developer bringing concepts to life.',
  keywords: 'software development, web development, CS student, UChicago',
  author: 'adtimokhin',
  viewport: 'width=device-width, initial-scale=1.0',
  // Add other important tags here
  openGraph: {
    title: 'adtimokhin | Personal Website',
    description: 'CS student @ UChicago, a software developer bringing concepts to life.',
    type: 'website',
    url: 'https://www.adtimokhin.com',
    image: 'https://www.adtimokhin.com/images/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adtimokhin',
    creator: '@adtimokhin',
  },
}
  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"w-screen"}> 
          <NavBar/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
