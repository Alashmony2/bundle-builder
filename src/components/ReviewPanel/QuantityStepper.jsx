export default function QuantityStepper({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white">
      <button
        onClick={onDecrease}
        className="flex h-7 w-7 items-center justify-center text-sm text-slate-400"
      >
        −
      </button>

      <span className="flex h-7 min-w-7 items-center justify-center border-x border-slate-200 px-1 text-sm font-semibold text-slate-800">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="flex h-7 w-7 items-center justify-center text-sm text-slate-800"
      >
        +
      </button>
    </div>
  )
}