import SectionHeading from '../components/SectionHeading'

const steps = ['Discover', 'Design', 'Build', 'Launch']

export default function Process() {
  return (
    <section className="section" id="process">
      <SectionHeading eyebrow="Process" title="From idea to impact" />
      <ol className="process-list">
        {steps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}
      </ol>
    </section>
  )
}
