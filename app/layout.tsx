import "./globals.css"
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import CookieConsent from "@/components/CookieConsent"
import type React from "react" // Import React

const fonts = [GeistSans]



export const metadata = {
  title: "DroneX - Next Generation Drone Technology",
  description: "Experience the future of aerial technology with DroneX",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fonts.map((font) => font.className).join(" ")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}

