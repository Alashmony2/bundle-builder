export default function QuantityStepper({ quantity }) {
  return (
    <div
      className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white"
      aria-hidden
    >
      <span className="flex h-7 w-7 items-center justify-center text-sm text-slate-400">
        −
      </span>
      <span className="flex h-7 min-w-7 items-center justify-center border-x border-slate-200 px-1 text-sm font-semibold text-slate-800">
        {quantity}
      </span>
      <span className="flex h-7 w-7 items-center justify-center text-sm text-slate-800">
        +
      </span>
    </div>
  )
}
