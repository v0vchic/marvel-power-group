import Link from 'next/link'
import { Wrapper } from '@/components/layout/Wrapper'
import { Arrow } from '@/components/ui/icons/Arrow'

const SERVICES = [
  {
    title: 'Enterprise Strategy',
    items: [
      'Procurement and investment diligence',
      'Customer engagement and retention',
      'Renewable, DER, and EV program structuring',
      'Reliability planning and reporting',
    ],
    link: '#',
  },
  {
    title: 'Wholesale Power',
    items: [
      'Commodity advisory and RFPs',
      'Energy, capacity, REC, RIN, and LCFS placement',
      'Enterprise PPA structuring',
      'Contract extensions and re-packaging',
    ],
    link: '#',
  },
  {
    title: 'Market Development',
    items: [
      'New venture setup',
      'Demand planning and acquisition',
      'Project development and regulatory support',
      'Partnership structuring',
    ],
    link: '#',
  },
]

const Services = () => (
  <section id="services" className="relative bg-accent desktop:min-h-screen anchor-offset">
    <Wrapper className="flex flex-col pt-13.5 pb-15.5 tablet:py-24">
      <h3 className="leading-[80px]">Services</h3>

      <div className="w-25 h-1.5 bg-primary mt-6 tablet:mt-15.5 mb-4.5 tablet:mb-11.5" />
      <p className="w-full desktop:max-w-210">
        Our clients are at the forefront of energy transition and innovation.
        Their task is complex: balance reliability and cost effectiveness with
        new customer demands, investment decisions, decarbonization goals and
        an evolving menu of new technologies. We understand the task and bring
        deep expertise to addressing these challenges.
      </p>

      <div className="grid grid-cols-1 tablet:grid-cols-2 xl:grid-cols-3 gap-13.5 tablet:gap-16 xl:gap-20 mt-14 tablet:mt-12">
        {SERVICES.map((service, index) => (
          <div key={service.title} className="w-full mobile:max-w-84">
            <h4 className={index < 2 ? 'w-full mobile:max-w-69' : ''}>{service.title}</h4>
            <ul className="custom-list mt-8 space-y-3 leading-5">
              {service.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={service.link} className="inline-block mt-7 mobile:mt-10 ml-5">
              <Arrow />
            </Link>
          </div>
        ))}
      </div>

      <p className="max-w-210 mt-10 tablet:mt-17">
        Our clients are time constrained and under-resourced. Agendas shift, budgets move and priorities change. We understand. We are agile,
        creative and immediately responsive to your various working styles,
        governance requirements and evolving needs.
      </p>
    </Wrapper>

    <div className="absolute bottom-0 left-0 right-0  hidden desktop:block translate-y-1/2 z-10">
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

export default Services
