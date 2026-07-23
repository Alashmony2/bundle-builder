import { TiArrowSortedDown } from "react-icons/ti";
import { useAccordion } from './Accordion'

export default function AccordionItem({
  index,
  step,
  totalSteps,
  icon: Icon,
  title,
  status,
  children,
  nextLabel,
  className = '',
}) {
  const { openIndex, setOpenIndex } = useAccordion()
  const isOpen = openIndex === index

  const handleHeaderClick = () => {
    if (isOpen) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const handleNextClick = () => {
    if (index < totalSteps - 1) {
      setOpenIndex(index + 1)
    }
  }

  return (
    <div
      className={`border-b border-[#c8d9eb] last:border-b-0 ${className}`}
    >
      <button
        type="button"
        onClick={handleHeaderClick}
        className={`w-full px-6 py-4 text-left transition-colors ${isOpen ? 'bg-[#f5f9fc]' : 'bg-white hover:bg-slate-50'
          }`}
        aria-expanded={isOpen}
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
          Step {step} of {totalSteps}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {typeof Icon === 'string' ? (
              <img
                src={Icon}
                alt=""
                className="h-6 w-6 shrink-0 object-contain"
              />
            ) : (
              Icon && (
                <Icon
                  className="h-6 w-6 shrink-0 text-slate-800"
                  aria-hidden
                />
              )
            )}
            <span className="text-lg font-semibold text-slate-900">{title}</span>
          </div>

          <div className="flex items-center gap-3">
            {isOpen && status && (
              <span className="text-sm font-medium text-[#1a98ff]">
                {status}
              </span>
            )}

            <TiArrowSortedDown
              className={`h-5 w-5 shrink-0 text-[#4E2FD2] transition-transform ${isOpen ? 'rotate-180' : ''
                }`}
              aria-hidden
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="bg-[#ebf2ff] px-6 pb-6 pt-2">
          {children}

          {nextLabel && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleNextClick}
                className="rounded-full border-2 border-[#1a98ff] bg-white px-8 py-2.5 text-sm font-semibold text-[#1a98ff] transition-colors hover:bg-[#1a98ff]/5"
              >
                Next: {nextLabel}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
