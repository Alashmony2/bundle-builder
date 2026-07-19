import { createContext, useContext, useState } from 'react'

const AccordionContext = createContext(null)

export function useAccordion() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

export default function Accordion({ children, defaultOpenIndex = 0, className = '' }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div
        className={`overflow-hidden rounded-lg border border-[#c8d9eb] bg-white ${className}`}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}
