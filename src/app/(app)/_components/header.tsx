import Link from "next/link"

export default function Header() {
  return (
    <div className="w-full border-b border-border">
      <header className="flex justify-between container items-center h-16">
        <Link href="/" className="text-lg font-bold">
          Website
        </Link>
      </header>
    </div>
  )
}
