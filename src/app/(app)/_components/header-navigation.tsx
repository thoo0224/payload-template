"use client"

import { cn } from "@/lib/utils"
import { Navigation } from "@/payload-types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HeaderNavigation(props: { navigation: Navigation }) {
  const pathname = usePathname()

  return (
    <nav className="flex gap-10">
      {props.navigation.headerLinks?.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link key={link.href} href={link.href} className={cn(isActive && "font-medium")}>
            {link.text}
          </Link>
        )
      })}
    </nav>
  )
}
