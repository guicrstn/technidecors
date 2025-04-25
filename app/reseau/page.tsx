"use client"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Reseau() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb />

      {/* Hero Title */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 relative inline-block">
            Notre Réseau
            <motion.div
              className="absolute -bottom-4 left-0 w-24 h-1 bg-amber-400"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 text-center">
              Techni Décors est fier de faire partie de réseaux professionnels qui favorisent l&apos;innovation, le
              partage d&apos;expertise et le développement économique local.
            </p>

            <div className="grid md:grid-cols-2 gap-16 mt-16">
              {/* AEPV */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                <div className="relative w-full h-48 mb-6">
                  <Image src="/images/aepv-logo.png" alt="Logo AEPV" fill className="object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AEPV</h2>
                <p className="text-gray-700 mb-6 text-center">
                  L&apos;Association des Entreprises de la Plastics Vallée (AEPV) regroupe les entreprises industrielles
                  et de services de la région d&apos;Oyonnax, connue comme la &quot;Plastics Vallée&quot;. Ce réseau
                  favorise les échanges, l&apos;innovation et le développement économique local.
                </p>
                <Link href="https://www.aepv.asso.fr/" target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <button className="bg-amber-400 text-white px-6 py-2 rounded-md hover:bg-amber-500 transition-colors">
                    Visiter le site
                  </button>
                </Link>
              </div>

              {/* ORIGIN'AIN */}
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                <div className="relative w-full h-48 mb-6">
                  <Image src="/images/originain-logo.png" alt="Logo ORIGIN'AIN" fill className="object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ORIGIN&apos;AIN</h2>
                <p className="text-gray-700 mb-6 text-center">
                  ORIGIN&apos;AIN est une marque collective qui valorise les savoir-faire et l&apos;excellence des
                  entreprises du département de l&apos;Ain. Ce réseau promeut les produits et services locaux, mettant
                  en avant la qualité et l&apos;innovation des entreprises du territoire.
                </p>
                <Link href="https://www.originain.fr/" target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <button className="bg-amber-400 text-white px-6 py-2 rounded-md hover:bg-amber-500 transition-colors">
                    Visiter le site
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Les avantages de notre réseau</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-amber-500">Expertise partagée</h3>
                <p className="text-gray-700">
                  L&apos;accès à un réseau d&apos;experts et de professionnels nous permet d&apos;enrichir constamment
                  notre savoir-faire et nos compétences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-amber-500">Innovation collective</h3>
                <p className="text-gray-700">
                  La collaboration avec d&apos;autres entreprises stimule l&apos;innovation et nous aide à développer
                  des solutions toujours plus performantes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-amber-500">Ancrage territorial</h3>
                <p className="text-gray-700">
                  Notre participation à ces réseaux renforce notre engagement envers le développement économique local
                  et la valorisation du territoire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
