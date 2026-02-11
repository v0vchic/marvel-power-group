'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-7 transition-colors duration-300 ${
        isScrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="w-full grid grid-cols-6">
        <div className="col-span-4 col-start-2 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Marvel Power Group"
              width={146}
              height={55}
            />
          </Link>

          <nav className="flex gap-16 font-normal">
            <Link href="#about">About</Link>
            <Link
              href="#services"
              className="border-accent border-b"
            >
              Services
            </Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
