import {
  HiOutlineCamera,
  HiOutlineShieldCheck,
  HiOutlineSignal,
  HiOutlinePlusCircle,
} from 'react-icons/hi2'
import { Accordion, AccordionItem } from '../Accordion'
import ProductCard from './ProductCard'
import useBuilder from '../../hooks/useBuilder'
import { BUILDER_STEPS } from '../../data/builderData.js'

const STEP_ICONS = [
  HiOutlineCamera,
  HiOutlineShieldCheck,
  HiOutlineSignal,
  HiOutlinePlusCircle,
]

const PLACEHOLDER_CONTENT = [
  null,
  'Plan options will appear here.',
  'Sensor options will appear here.',
  'Protection add-ons will appear here.',
]

export default function Builder() {
  const { products } = useBuilder()

  return (
    <section className="w-full min-w-0 flex-1 max-w-[1213px]">
      <Accordion defaultOpenIndex={0}>
        {BUILDER_STEPS.map((step, index) => (
          <AccordionItem
            key={step.title}
            index={index}
            step={index + 1}
            totalSteps={BUILDER_STEPS.length}
            icon={STEP_ICONS[index]}
            title={step.title}
            status={index === 0 ? '2 selected' : undefined}
            nextLabel={step.nextLabel}
          >
            {index === 0 ? (
              <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2 xl:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <p className="py-8 text-center text-sm text-slate-500">
                {PLACEHOLDER_CONTENT[index]}
              </p>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
