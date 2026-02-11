import Image from 'next/image'
import * as React from 'react'
import { Wrapper } from '@/components/layout/Wrapper'
import { Button } from '@/components/ui/Button'
import PlugIcon from '@/components/ui/icons/PlugIcon'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Power energy background"
        fill
        className="object-cover object-bottom"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <Wrapper className="absolute inset-0 flex flex-col gap-20 items-center justify-center pb-75">
        <div className="flex flex-col gap-10 text-center">
          <h1>Marvel Power Group</h1>
          <h2 className="text-primary text-2xl">
            Marvel Power Group is a boutique consulting firm with a fresh, markets-based approach to value creation. We offer services to clients in energy, water, manufacturing and transportation sectors.
          </h2>
        </div>
        <Button className="px-10" icon={<PlugIcon />}>CONTACT US</Button>
      </Wrapper>

      <div className="absolute bottom-14 left-0 right-0 flex flex-col items-center gap-12">
        <div className="w-full grid grid-cols-6 items-end">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`w-px justify-self-end ${index === 2 ? 'h-25 bg-accent' : 'h-4 bg-primary'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-primary">Scroll for more</p>
      </div>

    </section>
  )
}

export default Hero
