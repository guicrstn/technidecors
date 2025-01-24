"use client"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

// Types for our portfolio items
type PortfolioItem = {
  id: string
  title: string
  subtitle: string
  image: string
  categories: string[]
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "SERIGRAPHIE",
    subtitle: "PIÈCES COSMÉTIQUE",
    image: "/images/clarins.jpg",
    categories: ["cosmetique"],
  },
  {
    id: "2",
    title: "TAMPOGRAPHIE",
    subtitle: "PIÈCES COSMETIQUE",
    image: "/images/clarinsprecious.png",
    categories: ["cosmetique"],
  },
  {
    id: "3",
    title: "MARQUAGE A CHAUD & ASSEMBLAGE DU BOUCHON",
    subtitle: "PIECE COSMÉTIQUE",
    image: "/images/Montblanc.jpg",
    categories: ["cosmetique", "bouchon"],
  },
  {
    id: "4",
    title: "TAMPOGRAPHIE",
    subtitle: "PIECE COSMÉTIQUE",
    image: "/images/Panorama.jpg",
    categories: ["cosmetique"],
  },
  {
    id: "5",
    title: "MARQUAGE A CHAUD, TAMPOGRAPHIE & ASSEMBLAGE",
    subtitle: "CAPOT PRADA",
    image: "/images/candy-eau-de-parfum.jpg",
    categories: ["cosmetique"],
  },
  {
    id: "6",
    title: "SERIGRAPHIE",
    subtitle: "PIÈCES PHARMACEUTIQUE",
    image: "/images/stickalevre.png",
    categories: ["cosmetique"],
  },
  {
    id: "7",
    title: "MARQUAGE A CHAUD",
    subtitle: "BOUCHON",
    image: "/images/bouchonalcool.jpg",
    categories: ["bouchon"],
  },
  {
    id: "8",
    title: "TAMPOGRAPHIE & ASSEMBLAGE",
    subtitle: "PIECE COSMÉTIQUE",
    image: "/images/cremeclarin.png",
    categories: ["cosmetique"],
  },
  {
    id: "9",
    title: "MARQUAGE A CHAUD",
    subtitle: "PIECE COSMÉTIQUE",
    image: "/images/diorsnow.jpg",
    categories: ["cosmetique"],
  },
  {
    id: "10",
    title: "MARQUAGE A CHAUD",
    subtitle: "PIECE COSMÉTIQUE",
    image: "/images/ysl.png",
    categories: ["cosmetique"],
  },
  {
    id: "11",
    title: "TAMPOGRAPHIE",
    subtitle: "PIECE AUTOMOBILE",
    image: "/images/bouchonmoteur.jpeg",
    categories: ["automobile"],
  },
  {
    id: "12",
    title: "TAMPOGRAPHIE",
    subtitle: "PIECE AUTOMOBILE",
    image: "/images/motorcraft.jpeg",
    categories: ["automobile"],
  },
  {
    id: "13",
    title: "MARQUAGE A CHAUD",
    subtitle: "ORNEMENTS DE COIFFURE",
    image: "/images/peignenuxe.jpeg",
    categories: ["cosmetique"],
  },
  {
    id: "14",
    title: "MARQUAGE A CHAUD",
    subtitle: "SENSORIEL",
    image: "/images/sensoritel.jpeg",
    categories: ["cosmetique"],
  },
  {
    id: "15",
    title: "MARQUAGE A CHAUD",
    subtitle: "DOMOTIQUE",
    image: "/images/domotique.jpeg",
    categories: ["domotique"],
  },
  {
    id: "16",
    title: "TAMPOGRAPHIE",
    subtitle: "SPORT",
    image: "/images/petzl.jpeg",
    categories: ["sport"],
  },
  {
    id: "17",
    title: "MARQUAGE A CHAUD",
    subtitle: "BOUCHON",
    image: "/images/bouchon.jpeg",
    categories: ["bouchon"],
  },
  {
    id: "18",
    title: "TAMPOGRAPHIE",
    subtitle: "JOUET",
    image: "/images/girafe.jpeg",
    categories: ["jouet"],
  },
  {
    id: "19",
    title: "TAMPOGRAPHIE",
    subtitle: "COSMETIQUE",
    image: "/images/chanel.jpeg",
    categories: ["cosmetique", "bouchon"],
  },
  {
    id: "20",
    title: "TAMPOGRAPHIE",
    subtitle: "MEDICALE",
    image: "/images/masque1.jpeg",
    categories: ["médicale"],
  },
  {
    id: "21",
    title: "TAMPOGRAPHIE",
    subtitle: "MEDICALE",
    image: "/images/masque2.jpeg",
    categories: ["médicale"],
  },
  {
    id: "22",
    title: "MARQUAGE A CHAUD",
    subtitle: "DOMOTIQUE",
    image: "/images/domotique2.jpeg",
    categories: ["domotique"],
  },
  {
    id: "23",
    title: "TAMPOGRAPHIE",
    subtitle: "SINGLE ESTATE",
    image: "/images/single.jpg",
    categories: ["bouchon"],
  },
  {
    id: "24",
    title: "TAMPOGRAPHIE",
    subtitle: "PEUGEOT",
    image: "/images/peugeot.jpg",
    categories: ["ustensiles"],
  },
]

// ImageOverlay component
const ImageOverlay = ({
  item,
  isOpen,
  onClose,
}: { item: PortfolioItem | null; isOpen: boolean; onClose: () => void }) => {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] h-auto p-0">
        <DialogTitle className="sr-only">Image détaillée: {item.title}</DialogTitle>
        <div className="relative w-full max-w-2xl mx-auto max-h-[80vh] overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={1200}
            height={800}
            className="w-full h-auto object-contain max-h-[60vh]"
            priority
          />
        </div>
        <div className="p-4 bg-white">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{item.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {item.categories.map((category) => (
              <span key={category} className="text-xs bg-gray-200 px-2 py-1 rounded-full capitalize">
                {category}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function Realisations() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    selectedCategories.length > 0
      ? portfolioItems.filter((item) => item.categories.some((category) => selectedCategories.includes(category)))
      : portfolioItems

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const categories = ["cosmetique", "bouchon", "automobile", "domotique", "sport", "jouet", "médicale", "ustensiles"]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section with Title */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm mb-4 text-gray-500">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              ACCUEIL
            </Link>
            <span className="mx-2">/</span>
            <span>RÉALISATIONS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 relative inline-block">
            Réalisations
            <motion.div
              className="absolute -bottom-4 left-0 w-24 h-1 bg-amber-500"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h1>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setSelectedCategories([])}
              variant={selectedCategories.length === 0 ? "default" : "outline"}
            >
              Tous
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => toggleCategory(category)}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{item.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.categories.map((category) => (
                      <span key={category} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full capitalize">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImageOverlay item={selectedItem} isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  )
}

