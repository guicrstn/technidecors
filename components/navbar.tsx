"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  if (!isClient) {
    return null // ou un placeholder
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center h-24">
          <Link href="/" className="flex items-center px-8">
            <Image src="/images/logo.png" alt="Technidecors Logo" width={200} height={50} className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex flex-1">
            <NavLinks />
          </div>

          <div className="md:hidden px-8">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname()
  const linkClass = mobile
    ? "block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-400 transition-colors uppercase"
    : "flex-1 text-center py-8 text-gray-700 hover:text-white hover:bg-amber-400 transition-all uppercase text-lg tracking-wider"

  const contactClass = mobile ? linkClass : `${linkClass} bg-amber-400 text-white hover:bg-amber-500 hover:text-white`

  return (
    <div className={mobile ? "" : "flex w-full"}>
      <Link href="/presentation" className={linkClass}>
        Présentation
      </Link>
      <Link href="/savoir-faire" className={linkClass}>
        Savoir-Faire
      </Link>
      <Link href="/realisations" className={linkClass}>
        Réalisations
      </Link>
      <Link href="/environnement" className={linkClass}>
        Environnement
      </Link>
      <Link href="/contact" className={contactClass}>
        Contact
      </Link>
    </div>
  )
}
