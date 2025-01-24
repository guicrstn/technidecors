"use client"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { motion } from "framer-motion"
import { Package, Warehouse, Recycle, FlaskRoundIcon as Flask, Truck, Building } from "lucide-react"

export default function Environnement() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb />

      {/* Hero Section with Title */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 relative inline-block">
            Environnement
            <motion.div
              className="absolute -bottom-4 left-0 w-24 h-1 bg-amber-400"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/ecoresponsable.jpg"
                alt="Initiatives environnementales de Techni-Décors"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre Engagement Environnemental</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chez Techni-Décors, nous sommes profondément engagés dans une gestion responsable de notre impact
                  environnemental. Notre approche vise à réduire notre empreinte écologique à chaque étape de
                  nos opérations.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Nos initiatives clés :</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>
                    <strong>Gestion des déchets optimisée :</strong> Mise en place de points de collecte des déchets
                    recyclables dans notre établissement, assurant un tri efficace et une réduction significative de nos
                    déchets.
                  </li>
                  <li>
                    <strong>Éclairage 100% LED :</strong> Notre atelier est entièrement équipé d&apos;éclairages LED,
                    réduisant considérablement notre consommation d&apos;énergie.
                  </li>
                  <li>
                    <strong>Efficacité énergétique :</strong> Installation d&apos;un nouveau compresseur à vitesse
                    variable pour limiter la surproduction et optimiser notre consommation d&apos;énergie.
                  </li>
                  <li>
                    <strong>Gestion responsable des solvants :</strong> Mise en place d&apos;une cuve de récupération
                    des solvants, minimisant les rejets nocifs et favorisant le recyclage.
                  </li>
                  <li>
                    <strong>Encres écologiques :</strong> Transition vers des encres sans solvant pour nos processus de
                    sérigraphie, réduisant l&apos;impact environnemental de nos productions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-amber-500">Une logistique sur mesure</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Warehouse className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Capacité de stockage importante</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Truck className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Livraison optimisée</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Building className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Entrepôt adapté</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/stockage.png"
                alt="Entrepôt logistique Techni Décors"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waste Management Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-amber-500">
                Une gestion responsable de l&apos;impact environnemental
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Recycle className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tri sélectif rigoureux</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Flask className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestion des déchets chimiques</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Package className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Valorisation des déchets</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/benne.jpg"
                alt="Système de tri sélectif"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

