"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface ContactFormProps {
  onClose?: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    honeypot: "", // Champ honeypot
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Vérification du champ honeypot uniquement
    if (formData.honeypot) {
      console.log("Spam détecté")
      setIsSubmitting(false)
      return
    }

    try {
      const dataToSend = {
        ...formData,
        type: "contact",
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Message envoyé avec succès!")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", honeypot: "" })
        if (onClose) {
          onClose()
        }
      } else {
        toast.error(data.error || "Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      toast.error("Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
      />

      <Input
        name="email"
        type="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
      />

      <Input
        name="phone"
        type="tel"
        placeholder="Votre numéro de téléphone"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
      />

      <Input
        name="subject"
        placeholder="Sujet"
        value={formData.subject}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
      />

      <Textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500 min-h-[150px]"
      />

      {/* Champ honeypot caché */}
      <Input
        name="honeypot"
        type="text"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex justify-end space-x-4">
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
            Annuler
          </Button>
        )}
        <Button type="submit" className="bg-amber-400 text-white hover:bg-amber-500" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </Button>
      </div>
    </form>
  )
}

