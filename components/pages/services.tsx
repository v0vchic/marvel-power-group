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
  <section id="services" className="relative bg-accent min-h-screen">
    <Wrapper className="flex flex-col pt-24 pb-23">
      <h3>Services</h3>

      <div className="w-25 h-1.5 bg-primary mt-15.5 mb-11.5" />

      <p className="max-w-210">
        Our clients are at the forefront of energy transition and innovation.
        Their task is complex: balance reliability and cost effectiveness with
        new customer demands, investment decisions, decarbonization goals and
        an evolving menu of new technologies. We understand the task and bring
        deep expertise to addressing these challenges.
      </p>

      <div className="grid grid-cols-3 gap-20 mt-12">
        {SERVICES.map((service, index) => (
          <div key={service.title} className="max-w-84">
            <h4 className={index < 2 ? 'max-w-71' : ''}>{service.title}</h4>
            <ul className="custom-list mt-8 space-y-3 leading-5">
              {service.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={service.link} className="inline-block mt-10 ml-5">
              <Arrow />
            </Link>
          </div>
        ))}
      </div>

      <p className="max-w-210 mt-17">
        Our clients are time constrained and under-resourced. Agendas shift, budgets move and priorities change. We understand. We are agile,
        creative and immediately responsive to your various working styles,
        governance requirements and evolving needs.
      </p>
    </Wrapper>

    <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10">
      <div className="w-full grid grid-cols-6 items-end">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-px h-4 bg-dark justify-self-end"
          />
        ))}
      </div>
    </div>
  </section>
)

export default Services
