import { Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-gray-600">Suivez-nous sur</span>
            <Link
              href="https://www.linkedin.com/company/techni-decors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright and Legal */}
          <div className="text-gray-600 text-sm text-center md:text-right">
            <p className="inline-block mr-2">© {new Date().getFullYear()} Techni Décors - Tous droits réservés</p>
            <Link href="/mentions-legales" className="text-amber-500">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

