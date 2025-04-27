"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"

interface NotificationBadgeProps {
  message: string
  targetId: string
}

export function NotificationBadge({ message, targetId }: NotificationBadgeProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [hasBeenClicked, setHasBeenClicked] = useState(false)

  // Vérifier si l'utilisateur a déjà cliqué sur la notification
  useEffect(() => {
    const hasClicked = localStorage.getItem(`notification-${targetId}`)
    if (hasClicked) {
      setHasBeenClicked(true)
      setIsVisible(false)
    }
  }, [targetId])

  const handleClick = () => {
    // Enregistrer que l'utilisateur a cliqué
    localStorage.setItem(`notification-${targetId}`, "true")
    setHasBeenClicked(true)
    setIsVisible(false)

    // Faire défiler jusqu'à la section cible
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (hasBeenClicked) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.div
            className="bg-amber-400 text-white px-4 py-3 rounded-lg shadow-lg cursor-pointer flex items-center gap-2 max-w-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            <Bell className="h-5 w-5" />
            <span>{message}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
