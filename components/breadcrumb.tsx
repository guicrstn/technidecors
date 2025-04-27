"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = {
  "/": "ACCUEIL",
  "/realisations": "RÉALISATIONS",
  "/presentation": "PRÉSENTATION",
  "/savoir-faire": "SAVOIR-FAIRE",
  "/contact": "CONTACT",
  "/environnement": "ENVIRONNEMENT",
}

type Routes = typeof routes

export function Breadcrumb() {
  const pathname = usePathname()

  // If we're on the homepage, don't show the breadcrumb
  if (pathname === "/") return null

  const currentPage = routes[pathname as keyof Routes]

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center text-sm text-gray-500 py-4">
        <Link href="/" className="hover:text-amber-500 transition-colors">
          ACCUEIL
        </Link>
        <span className="mx-2">/</span>
        <span>{currentPage}</span>
      </div>
    </div>
  )
}
