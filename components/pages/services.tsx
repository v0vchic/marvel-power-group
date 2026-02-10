import { Wrapper } from '@/components/layout/Wrapper'
import { Arrow } from '@/components/ui/icons/Arrow'

const Services = () => (
  <section className="relative bg-accent min-h-screen">
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
        <div className="max-w-84">
          <h4 className="max-w-71">Enterprise Strategy</h4>
          <ul className="custom-list mt-8 space-y-3 leading-5">
            <li>Procurement and investment diligence</li>
            <li>Customer engagement and retention</li>
            <li>Renewable, DER, and EV program structuring</li>
            <li>Reliability planning and reporting</li>
          </ul>
          <Arrow className="mt-10" />
        </div>

        <div className="max-w-84">
          <h4 className="max-w-71">Wholesale Power</h4>
          <ul className="custom-list mt-8 space-y-3 leading-5">
            <li>Commodity advisory and RFPs</li>
            <li>Energy, capacity, REC, RIN, and LCFS placement</li>
            <li>Enterprise PPA structuring</li>
            <li>Contract extensions and re-packaging</li>
          </ul>
          <Arrow className="mt-10" />
        </div>

        <div className="max-w-84">
          <h4>Market Development</h4>
          <ul className="custom-list mt-8 space-y-3 leading-5">
            <li>New venture setup</li>
            <li>Demand planning and acquisition</li>
            <li>Project development and regulatory support</li>
            <li>Partnership structuring</li>
          </ul>
          <Arrow className="mt-10" />
        </div>
      </div>

      <p className="max-w-210 mt-17">
        Our clients are time constrained and under-resourced. Agendas shift, budgets move and priorities change. We understand. We are agile,
        creative and immediately responsive to your various working styles,
        governance requirements and evolving needs.
      </p>
    </Wrapper>

    <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10">
      <div className="w-full grid grid-cols-6 items-end">
        {Array.from({ length: 6 }).map((_, index) => (
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
