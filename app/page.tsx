"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Users, Cog, Target, Award, Zap, Droplet, Layers, Printer, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Breadcrumb } from "@/components/breadcrumb"
import { useRouter } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { NotificationBadge } from "@/components/notification-badge"
import Link from "next/link"

interface ExpertiseCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-12 h-12 text-amber-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

function AnimatedNumber({ end, duration = 2000, label }: { end: number; duration?: number; label: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, isVisible])

  return (
    <div ref={countRef} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-2">{count}</div>
      <div className="text-sm md:text-base lg:text-lg text-gray-600">{label}</div>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const [showContactForm, setShowContactForm] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const historyRef = useRef<HTMLElement>(null)
  const expertiseRef = useRef<HTMLElement>(null)
  const reseauxRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = expertiseRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const scrollToHistory = () => {
    if (historyRef.current) {
      const yOffset = -100
      const element = historyRef.current
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      <NotificationBadge message="Découvrez nos réseaux professionnels !" targetId="nos-reseaux" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/company-imagenb.png"
          alt="Techni D&eacute;cors atelier"
          fill
          priority
          className="absolute z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 flex flex-col items-center mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
            &quot;Acteur industriel Fran&ccedil;ais du marquage et de l&apos;assemblage industriel&quot;
          </h1>
          <Button
            className="bg-amber-400 text-white hover:bg-amber-500 text-lg px-8 py-3 mb-12"
            onClick={() => router.push("/savoir-faire")}
          >
            D&eacute;couvrez Notre Expertise
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <motion.div
            className="cursor-pointer"
            onClick={scrollToHistory}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown className="h-12 w-12 text-white" />
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20 bg-white" ref={historyRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Notre Histoire</h2>
            <p className="text-xl text-gray-600 mb-8">
              Fond&eacute;e il y a plus de trois d&eacute;cennies, Techni D&eacute;cors s&apos;est impos&eacute;e comme
              un leader incontest&eacute; dans le domaine du marquage industriel et de l&apos;impression de haute
              qualit&eacute;. Notre parcours est marqu&eacute; par une constante &eacute;volution technologique et un
              engagement in&eacute;branlable envers l&apos;excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Equipe Passionn&eacute;e</h3>
                <p className="text-gray-600">
                  Des experts d&eacute;vou&eacute;s &agrave; l&apos;innovation et &agrave; la qualit&eacute;
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <Cog className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Technologie de Pointe</h3>
                <p className="text-gray-600">
                  &Eacute;quipements &agrave; la fine pointe pour des r&eacute;sultats exceptionnels
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <Target className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Approche Sur-mesure</h3>
                <p className="text-gray-600">Solutions personnalis&eacute;es pour chaque client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <AnimatedNumber end={15} label="Machines de tampographie" />
              <AnimatedNumber end={6} label="Machines de s&eacute;rigraphie" />
              <AnimatedNumber end={4} label="Machines d&apos;assemblage" />
              <AnimatedNumber end={14} label="Machines de marquage &agrave; chaud" />
              <AnimatedNumber end={20} label="Collaborateurs" />
              <AnimatedNumber end={1000000} label="Pi&egrave;ces&frasl;an" />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Signature Section */}
      <section className="py-20 bg-amber-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mb-16">
              <motion.div
                className="absolute left-0 right-0 -top-8"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="border-t-2 border-white w-full"></div>
              </motion.div>
            </div>
            <h2 className="text-3xl font-bold mb-8">Notre Signature</h2>
            <p className="text-xl leading-relaxed">
              Dans la complexit&eacute; des plus belles pi&egrave;ces, Techni Decors cherche, trouve et met en
              &oelig;uvre une solution pour valoriser les d&eacute;cors de vos produits &agrave; la hauteur des
              ambitions des secteurs de la beaut&eacute; et du luxe.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Expertise Section */}
      <section className="py-20 bg-white" ref={expertiseRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Notre Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ExpertiseCard
                icon={Zap}
                title="Marquage &agrave; chaud"
                description="Technique de marquage durable pour une finition premium sur divers mat&eacute;riaux."
              />
              <ExpertiseCard
                icon={Droplet}
                title="Tampographie"
                description="Impression pr&eacute;cise sur surfaces irr&eacute;guli&egrave;res et objets tridimensionnels."
              />
              <ExpertiseCard
                icon={Layers}
                title="S&eacute;rigraphie"
                description="M&eacute;thode polyvalente pour des impressions de haute qualit&eacute; sur diff&eacute;rents supports."
              />
              <ExpertiseCard
                icon={Cog}
                title="Assemblage"
                description="Solutions d&apos;assemblage sur mesure pour optimiser vos processus de production."
              />
              <ExpertiseCard
                icon={Printer}
                title="Etiquetage"
                description="Syst&egrave;mes d&apos;&eacute;tiquetage innovants pour une identification claire et durable."
              />
              <ExpertiseCard
                icon={Target}
                title="Innovation continue"
                description="Recherche et d&eacute;veloppement constants pour rester &agrave; la pointe de l&apos;industrie."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Réseaux Section - NOUVELLE SECTION */}
      <section id="nos-reseaux" className="py-20 bg-gray-50" ref={reseauxRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-12 text-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Nos Réseaux</h2>
              <div className="absolute -top-2 right-1/4 bg-amber-400 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                Nouveau
              </div>
              <p className="text-xl text-gray-600 mb-12">
                Techni Décors est fier de faire partie de réseaux professionnels qui favorisent l&apos;innovation, le
                partage d&apos;expertise et le développement économique local.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* AEPV */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-48 mb-6">
                  <Image src="/images/aepv-logo.png" alt="Logo AEPV" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AEPV</h3>
                <p className="text-gray-700 mb-6">
                  L&apos;Association des Entreprises de la Plastics Vallée (AEPV) regroupe les entreprises industrielles
                  et de services de la région d&apos;Oyonnax, connue comme la &quot;Plastics Vallée&quot;. Ce réseau
                  favorise les échanges, l&apos;innovation et le développement économique local.
                </p>
                <Link href="https://www.aepv.asso.fr/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-400 text-white hover:bg-amber-500">
                    Visiter le site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              {/* ORIGIN'AIN */}
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-48 mb-6">
                  <Image src="/images/originain-logo.png" alt="Logo ORIGIN'AIN" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ORIGIN&apos;AIN</h3>
                <p className="text-gray-700 mb-6">
                  ORIGIN&apos;AIN est une marque collective qui valorise les savoir-faire et l&apos;excellence des
                  entreprises du département de l&apos;Ain. Ce réseau promeut les produits et services locaux, mettant
                  en avant la qualité et l&apos;innovation des entreprises du territoire.
                </p>
                <Link href="https://www.originain.fr/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-400 text-white hover:bg-amber-500">
                    Visiter le site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Qualité Section */}
      <section className="py-20 bg-amber-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8">Notre Engagement Qualit&eacute;</h2>
            <p className="text-xl mb-12">
              Chez Techni D&eacute;cors, la qualit&eacute; n&apos;est pas seulement un objectif, c&apos;est notre
              signature. Chaque projet b&eacute;n&eacute;ficie de notre expertise technique, de notre passion pour
              l&apos;excellence et de notre engagement envers la satisfaction client.
            </p>
            <div>
              <Button
                className="bg-white text-amber-500 hover:bg-gray-100 text-lg px-8 py-3 text-sm md:text-base"
                onClick={() => router.push("/savoir-faire")}
              >
                Discutez de Votre Projet avec Nous
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Contactez-nous</DialogTitle>
          <ContactForm onClose={() => setShowContactForm(false)} />
        </DialogContent>
      </Dialog>
    </main>
  )
}
