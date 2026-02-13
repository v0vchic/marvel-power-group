import Image from 'next/image'
import { Wrapper } from '@/components/layout/Wrapper'

const AboutUs = () => {
  return (
    <section id="about" className="relative desktop:min-h-190 anchor-offset">
      <Wrapper className="flex flex-col py-13.5 tablet:py-19 desktop:pt-24 desktop:pb-35">
        <h3>About Us</h3>

        <div className="w-16.5 h-1 mobile:w-25 mobile:h-1.5 bg-accent my-8.5 mobile:mt-12.5 mobile:mb-14" />

        <div className="flex flex-col lg:flex-row lg:items-center gap-7 tablet:gap-14 desktop:gap-27.5">

          <div className="relative w-full tablet:w-[486px] aspect-[486/315] shrink-0">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 486px"
            />
          </div>

          <div className="flex flex-col gap-7 xl:gap-13.75 w-full desktop:max-w-122.5">
            <p>
              Our dynamic, solutions-oriented team brings decades
              <br className="hidden xl:inline" />
              of relevant transactional, analytical and regulatory
              experience to supporting our clients' unique agendas.
            </p>

            <p>
              We are experienced practitioners who have run companies,
              successfully originated and closed complex deals,
              advocated and negotiated favorable policy and advanced
              technological innovation and climate leadership.
            </p>

            <p>
              We specialize in structuring balanced solutions for all
              affected stakeholders and uncovering economic
              opportunities in otherwise opaque environments.
            </p>
          </div>

        </div>

      </Wrapper>

      <div className="absolute bottom-0 left-0 right-0 hidden desktop:block translate-y-1/2 z-10">
        <div className="w-full grid grid-cols-6 items-end">
          {[0, 1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="w-px h-4 bg-dark justify-self-end"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
