'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { PlugIcon } from '@/components/ui/icons/PlugIcon'

interface BurgerMenuProps {
  onClose: () => void
}

export const BurgerMenu = ({ onClose }: BurgerMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container)
      return

    const focusable = container.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    )

    if (!focusable.length)
      return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab')
        return

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
      else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      ref={containerRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center pt-10.5 pb-17 tablet:hidden"
    >
      <nav className="flex flex-col items-center gap-21">
        <Link href="#about" onClick={onClose} className="burger-menu-link">
          About
        </Link>

        <Link href="#services" onClick={onClose} className="burger-menu-link">
          Services
        </Link>

        <Link href="#contact" onClick={onClose} className="burger-menu-link">
          Contact
        </Link>

        <Link href="#contact" onClick={onClose}>
          <Button className="px-10" icon={<PlugIcon />}>
            CONTACT US
          </Button>
        </Link>
      </nav>
    </div>
  )
}
