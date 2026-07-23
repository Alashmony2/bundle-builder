import { useState } from 'react'
import badge from '../../assets/Badge.png'
import useBuilder from '../../hooks/useBuilder'

export default function SummarySection({
  returnsText,
  financingLabel,
  originalTotal,
  total,
  savingsMessage,
}) {

  const { saveConfiguration } = useBuilder()
  const [isCheckedOut, setIsCheckedOut] = useState(false)

  return (
    <aside className="flex w-full flex-col">
      <div className="mb-6 flex gap-4">
        <div className="flex items-center md:flex-col lg:flex-row justify-between w-full gap-2">
          <div className="md:flex md:items-center md:gap-2">
            <img src={badge} alt="Badge" className="h-19.5 w-19.5 lg:h-32.75 lg:w-32.75" />
            <p className="pt-2 text-xs leading-relaxed text-slate-600 hidden md:block lg:hidden">
              {returnsText}
            </p>
          </div>

          <div className=" ">
            <span className="inline-block  ml-11 rounded-sm bg-[#7c3aed] px-3 py-1 text-[11px] font-semibold text-white ">
              {financingLabel}
            </span>
            <div className="text-right">
              <span className="mr-2 text-sm text-slate-400 line-through">
                ${originalTotal}
              </span>
              <span className="text-3xl font-bold text-[#5b31d1]">${total}</span>
            </div>
          </div>

        </div>

      </div>

      <div className="mt-auto space-y-3">





        {isCheckedOut && (
          <p className="text-center text-sm font-medium text-emerald-600">
            Checkout completed successfully!
          </p>
        )}
        <button
          type="button"
          onClick={() => setIsCheckedOut(true)}
          className="w-full rounded-lg bg-[#5b31d1] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#4c28b0]"
        >
          Checkout
        </button>

        <button
          type="button"
          onClick={saveConfiguration}
          className="w-full text-center text-xs font-medium text-[#1a98ff] underline underline-offset-2 cursor-pointer"
        >
          Save my system for later
        </button>
      </div>
    </aside>
  )
}
