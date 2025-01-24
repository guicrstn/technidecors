"use client"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Presentation() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Breadcrumb />

      {/* Hero Title */}
      <section className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 relative inline-block">
            Présentation
            <motion.div
              className="absolute -bottom-4 left-0 w-24 h-1 bg-amber-400"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h1>
        </div>
      </section>

      {/* Section 1 - Text Left, Image Right */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>TECHNI DECORS</strong>, fondée en <strong>2001</strong>, est une entreprise spécialisée dans
                  le <strong>marquage industriel</strong>. Nous avons acquis une expertise solide dans des techniques
                  telles que la <strong>tampographie</strong>, la <strong>sérigraphie </strong>
                   et le <strong>marquage à chaud</strong>, et nous continuons à nous développer et à nous équiper pour
                  vous garantir des prestations de haute qualité. Que ce soit pour des petites, moyennes et grandes
                  séries, nous sommes en mesure de vous accompagner dans tous vos projets.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Avec nos <strong>24 ans d&apos;expérience</strong>, toute l&apos;équipe de Techni Décors est à votre
                  écoute et prête à apporter des solutions à vos projets de marquage.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/company-imagenb.png"
                alt="Techni Decors expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-amber-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nous connaissons vos impératifs, et nous mettons un point d&apos;honneur à
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">Respecter vos propres engagements qualité</h3>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  Assurer la continuité du cycle de production
                </h3>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">Tenir les délais les plus serrés</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left, Text Right */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/backgroundnb.png"
                alt="Techni Decors expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Techni Decors : La précision et l&apos;excellence au cœur de notre métier
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chez Techni Decors, nous avons fait de la <strong>qualité</strong> et de l&apos;
                  <strong>expertise</strong> les piliers de notre activité. Spécialisés en <strong>tampographie</strong>
                  , <strong>sérigraphie</strong>, <strong>marquage à chaud</strong>, <strong>étiquetage</strong> et{" "}
                  <strong>assemblage</strong>, nous mettons notre savoir-faire au service de vos projets pour des
                  réalisations qui allient esthétisme, durabilité et précision.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fort d&apos;une expérience solide et d&apos;un engagement constant envers l&apos;innovation, nous
                  maîtrisons chaque étape de nos procédés pour vous offrir des solutions adaptées, quel que soit votre
                  secteur d&apos;activité. Nos équipes, passionnées et rigoureuses, travaillent avec un seul objectif :
                  dépasser vos attentes en termes de qualité et de performance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Avec Techni Decors, choisissez l&apos;excellence d&apos;un partenaire qui transforme vos idées en
                  réalisations remarquables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

