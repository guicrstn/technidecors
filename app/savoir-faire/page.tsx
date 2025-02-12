"use client"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Cog, Lightbulb, Palette, Printer, Stamp, Target, Tag } from "lucide-react"
import { FormOverlay } from "@/components/FormOverlay"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

type ExpertiseItem = {
  title: string
  icon: React.ElementType
  description: string
}

const ExpertiseCard = ({ item, index }: { item: ExpertiseItem; index: number }) => (
  <Card className="h-full flex flex-col">
    <CardHeader className="flex-grow-0">
      {item.icon && <item.icon className="h-10 w-10 text-amber-500 mb-2" />}
      <CardTitle>{item.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow flex items-center">
      <p>{item.description}</p>
    </CardContent>
  </Card>
)

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Tampographie",
    icon: Palette,
    description: "Impression précise sur des objets en 3D et surfaces irrégulières.",
  },
  { title: "Marquage à chaud", icon: Stamp, description: "Technique de marquage durable pour une finition premium." },
  { title: "Sérigraphie", icon: Printer, description: "Impression de haute qualité pour une variété de supports." },
  {
    title: "Assemblage",
    icon: Target,
    description: "Service d'assemblage précis pour divers produits, notamment dans le domaine cosmétique.",
  },
  { title: "Etiquetage", icon: Tag, description: "Solutions d'étiquetage innovantes et durables." },
  {
    title: "Gravure Laser",
    icon: Stamp,
    description: "Bientôt disponible au sein de l'entreprise pour repondre à vos demandes.",
  },
]

export default function SavoirFaire() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formTitle, setFormTitle] = useState("")

  const openContactForm = (title: string) => {
    setFormTitle(title)
    setShowContactForm(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-900 sm:text-5xl md:text-6xl">
              Notre Savoir-Faire, Votre Avantage Concurrentiel
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Découvrez comment notre expertise en marquage industriel, sérigraphie et tampographie peut transformer vos
              produits et booster votre marque.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-600"
              onClick={() => openContactForm("Discuter de votre projet")}
            >
              Discuter de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
      </section>

      {/* Expertise Overview - Modified Layout with Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Notre Expertise</h2>
            <p className="text-xl text-gray-600">
              Chez Techni Décors, nous combinons technologie de pointe et savoir-faire artisanal pour offrir des
              solutions de marquage et d&apos;impression exceptionnelles sur tous types de support (Bois, Verre,
              Aluminium, Plastique).
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ExpertiseCard item={item} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Expertise Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {[
            {
              title: "Marquage à Chaud",
              description:
                "Notre expertise en marquage à chaud vous garantit des résultats durables et de haute qualité, quel que soit le support.",
              features: [
                "Marquage à chaud",
                "Transfert de film",
                "Marquage par transfert",
                "Dorure",
                "Solutions personnalisées",
              ],
              image: "/images/machine/Marquage-a-chaudnb.jpg",
            },
            {
              title: "Sérigraphie",
              description:
                "Nous utilisons des techniques de sérigraphie pour produire des impressions fines et précises sur une variété de matériaux.",
              features: ["Design unique", "Petit/Grands formats", "Supports variés", "Résistant", "Couleurs intenses"],
              image: "/images/machine/Serigraphienb.jpg",
            },
            {
              title: "Tampographie",
              description:
                "Notre maîtrise de la tampographie nous permet d'imprimer avec précision sur des surfaces complexes et des objets en 3D.",
              features: [
                "Impression sur forme complexe",
                "Petites séries",
                "Résistance à l'usure",
                "Multi-couleurs",
                "Haute qualité",
              ],
              image: "/images/machine/Tampographienb.jpg",
            },
            {
              title: "Assemblage",
              description: "Service d'assemblage précis pour divers produits, notamment dans le domaine cosmétique.",
              features: [
                "Assemblage de produits cosmétiques",
                "Précision et qualité",
                "Adaptabilité à différents types de produits",
                "Processus optimisé",
              ],
              image: "/images/machine/Assemblagenb.jpg",
            },
            {
              title: "Etiquetage",
              description: "Service d'étiquetage précis pour divers produits, notamment dans le domaine cosmétique.",
              features: [
                "Etiquetage de produits cosmétiques",
                "Précision et qualité",
                "Adaptabilité à différents types de produits",
                "Processus optimisé",
              ],
              image: "/images/machine/Etiquetagenb.jpg",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              className="mb-20 last:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{section.title}</h3>
                  <p className="text-xl mb-6 text-gray-600">{section.description}</p>
                  <ul className="space-y-2">
                    {section.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Techni Décors ?</h2>
            <p className="text-xl">
              Notre engagement envers l&apos;excellence et l&apos;innovation fait de nous le partenaire idéal pour tous
              vos besoins en marquage et impression.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expertise", icon: Cog, description: "Plus de 30 ans d&apos;expérience dans l&apos;industrie" },
              {
                title: "Innovation",
                icon: Lightbulb,
                description: "Utilisation des dernières technologies et techniques",
              },
              {
                title: "Sur-mesure",
                icon: Target,
                description: "Solutions personnalisées pour répondre à vos besoins spécifiques",
              },
            ].map((item, index) => (
              <motion.div key={index} className="text-center" {...fadeInUp} transition={{ delay: index * 0.2 }}>
                <div className="bg-white text-amber-500 rounded-full p-4 inline-block mb-4">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Prêt à Transformer Vos Produits ?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et découvrir comment notre savoir-faire
              peut vous donner un avantage concurrentiel.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-600"
              onClick={() => openContactForm("Demander un devis")}
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <FormOverlay isOpen={showContactForm} onClose={() => setShowContactForm(false)} title={formTitle} />
    </div>
  )
}

