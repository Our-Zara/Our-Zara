import Head from 'next/head'
import Image from 'next/image'
import HomeCarousel from "../pages/component/main"
import '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
    <title>ZARA</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <HomeCarousel />  
    </>
    
  )
}
