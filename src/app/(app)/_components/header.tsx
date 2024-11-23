import { Navigation, SiteSetting } from "@/payload-types"

import Link from "next/link"

import HeaderNavigation from "./header-navigation"

export default function Header(props: { siteSettings: SiteSetting; navigation: Navigation }) {
  return (
    <header className="container flex h-20 items-center justify-between">
      <Link href="/" className="text-2xl font-extrabold montserrat-alternates-extrabold">
        {props.siteSettings.title}
      </Link>

      <HeaderNavigation navigation={props.navigation} />
    </header>
  )
}
