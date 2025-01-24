'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { ContactForm } from '@/components/contact-form'
import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/breadcrumb'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)

  const handleClose = () => {
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez-nous
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous sommes là pour répondre à toutes vos questions et vous aider dans vos projets.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              <ContactForm onClose={handleClose} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre localisation</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col space-y-4 mb-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-amber-500 mr-2 mt-1" />
                    <p>
                      <strong>Techni Décors</strong><br />
                      ZI Le Musinet, 20 Plastic Avenue<br />
                      01460 Montréal la Cluse<br />
                      France
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-amber-500 mr-2" />
                    <p><a href="tel:+33474764332" className="hover:text-amber-500 transition-colors">04 74 76 43 32</a></p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-amber-500 mr-2" />
                    <p><a href="mailto:contact@technidecors.com" className="hover:text-amber-500 transition-colors">contact@techni-decors.com</a></p>
                  </div>
                </div>
                <div className="relative w-full h-[400px] mt-6 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.6644353831866!2d5.562066376637164!3d46.177335185575146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ca38e5bda17e5%3A0x31fc560e5d249915!2sTechni%20D%C3%A9cors!5e0!3m2!1sfr!2sbg!4v1737019849923!5m2!1sfr!2sbg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

