import "@/styles/globals.css"

import { GeistSans } from "geist/font/sans"
import Header from "./_components/header"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col min-h-screen gap-24">
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
