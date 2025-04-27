"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  onClose: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    // TODO: Implement form submission logic here (e.g., send data to an API)
    console.log("Form submitted", { name, email, message })
    onClose() // Close the dialog after submission
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Votre message"
          rows={4}
          required
        />
      </div>
      <Button type="submit">Envoyer</Button>
    </form>
  )
}
