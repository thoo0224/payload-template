import Link from "next/link"

export default function Header() {
  return (
    <div className="w-full border-b border-border">
      <header className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          Website
        </Link>
      </header>
    </div>
  )
}
