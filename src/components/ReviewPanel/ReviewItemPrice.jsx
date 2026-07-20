export default function ReviewItemPrice({
  price,
  originalPrice,
  priceLabel,
  highlight = false,
}) {
  return (
    <div className="shrink-0 text-right">
      {originalPrice && (
        <span className="mr-1.5 text-xs text-slate-400 line-through">
          ${originalPrice}
        </span>
      )}
      {priceLabel ? (
        <span
          className={`text-sm font-bold ${
            highlight ? 'text-[#1a98ff]' : 'text-slate-900'
          }`}
        >
          {priceLabel}
        </span>
      ) : (
        <span className="text-sm font-bold text-slate-900">${price}</span>
      )}
    </div>
  )
}
