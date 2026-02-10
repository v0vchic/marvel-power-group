import AboutUs from '@/components/pages/about-us'
import Hero from '@/components/pages/hero'
import Services from '@/components/pages/services'
import Contact from '@/components/pages/сontact'

export default function Page() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
