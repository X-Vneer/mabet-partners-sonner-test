import "./preflight.css"
import "@mantine/core/styles.css"
import "./globals.css"

import type { Metadata } from "next"
import { Rubik } from "next/font/google"
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import { ColorSchemeScript, DirectionProvider } from "@mantine/core"

// import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Mabet partners",
  description: "Mabet partners",
}

// const rubik = Rubik({
//   weight: ["300", "400", "500", "700", "800"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="ar">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <DirectionProvider>{children}</DirectionProvider>
      </body>
    </html>
  )
}
