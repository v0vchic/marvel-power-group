import Image from 'next/image'
import { Wrapper } from '@/components/layout/Wrapper'

const AboutUs = () => {
  return (
    <div className="relative min-h-190">
      <Wrapper className="flex flex-col pt-24 pb-32">
        <h3>About Us</h3>

        <div className="w-25 h-1.5 bg-accent mt-12.5 mb-14" />

        <div className="flex gap-17">
          <Image
            src="/images/about-us.jpg"
            alt="About Us"
            width={486}
            height={315}
          />
          <div className="flex flex-col justify-between h-[315px]">
            <p>
              Our dynamic, solutions-oriented team brings decades
              <br />
              of relevant transactional, analytical and regulatory
              <br />
              experience to supporting our clients' unique agendas.
            </p>
            <p>
              We are experienced practitioners who have run companies,
              <br />
              successfully originated and closed complex deals,
              <br />
              advocated and negotiated favorable policy and advanced
              <br />
              technological innovation and climate leadership.
            </p>
            <p>
              We specialize in structuring balanced solutions for all
              <br />
              affected stakeholders and uncovering economic
              <br />
              opportunities in otherwise opaque environments.
            </p>
          </div>
        </div>
      </Wrapper>

      <div className="absolute botom-0 left-0 right-0 -translate-y-1/2">
        <div className="w-full grid grid-cols-6 items-end">
          <div className="w-px h-4 bg-dark justify-self-end" />
          <div className="w-px h-4 bg-dark justify-self-end" />
          <div className="w-px h-4 bg-dark justify-self-end" />
          <div className="w-px h-4 bg-dark justify-self-end" />
          <div className="w-px h-4 bg-dark justify-self-end" />
          <div className="w-px h-4 bg-dark justify-self-end" />
        </div>
      </div>

    </div>
  )
}

export default AboutUs
