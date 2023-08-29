import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="h-screen flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-500">admin</h1>
      
    </div>
  )
}
