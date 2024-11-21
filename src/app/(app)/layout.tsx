import { fetchSiteSettings } from "@/data/site-settings"
import "@/styles/globals.css"
import { GeistSans } from "geist/font/sans"

import Header from "./_components/header"

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSettings = await fetchSiteSettings()

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col gap-24">
        <Header title={siteSettings.title} />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
