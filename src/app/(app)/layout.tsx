import { fetchNavigationSettings } from "@/data/navigation"
import { fetchSiteSettings } from "@/data/site-settings"
import "@/styles/globals.css"
import { GeistSans } from "geist/font/sans"

import Header from "./_components/header"

export const dynamic = "force-dynamic"

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [siteSettings, navigation] = await Promise.all([
    fetchSiteSettings(),
    fetchNavigationSettings(),
  ])

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col gap-24 ">
        <Header siteSettings={siteSettings} navigation={navigation} />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
