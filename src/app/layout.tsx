import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jallen.dev",
  description: "Justin Allen's blog and project portfolio",
  metadataBase: new URL("https://jallen.dev"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-slate-950">
          <div className="grow max-w-[60rem] w-full mx-auto p-2 pb-10">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
