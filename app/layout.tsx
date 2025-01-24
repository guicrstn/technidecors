import "./globals.css"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Techni Décors - Spécialiste du marquage Industriel",
  description: "Votre partenaire industriel pour le marquage et l'assemblage",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}

