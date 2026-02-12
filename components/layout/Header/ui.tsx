'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BurgerMenu } from '@/components/layout/BurgerMenu'
import { Button } from '@/components/ui/Button'
import { BurgerIcon } from '@/components/ui/icons/BurgerIcon'
import { CrossIcon } from '@/components/ui/icons/CrossIcon'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen && buttonRef.current) {
      buttonRef.current.focus()
    }
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 py-5 desktop:py-9 transition-colors duration-300 ${
          isMenuOpen
            ? 'bg-black'
            : isScrolled
              ? 'bg-primary'
              : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 mobile:px-8 tablet:px-12 2xl:px-64">
          <Link href="/">
            <Image
              src={isMenuOpen ? '/images/logo-primary.svg' : '/images/logo.svg'}
              alt="Marvel Power Group"
              width={100}
              height={38}
              className="tablet:w-[146px] tablet:h-[55px]"
            />
          </Link>

          <nav className="hidden tablet:flex gap-16.5 font-normal">
            <Link href="#about">About</Link>
            <Link href="#services" className="border-accent border-b">
              Services
            </Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Button
            ref={buttonRef}
            onClick={toggleMenu}
            className="tablet:hidden bg-transparent focus-visible:outline-2 focus-visible:outline-accent"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <CrossIcon /> : <BurgerIcon />}
          </Button>
        </div>
      </header>

      {isMenuOpen && <BurgerMenu onClose={closeMenu} />}
    </>
  )
}
