import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ContactForm } from '@/components/contact-form'

interface FormOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function FormOverlay({ isOpen, onClose, title }: FormOverlayProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ContactForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  )
}

