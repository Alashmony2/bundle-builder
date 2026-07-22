import useBuilder from '../../hooks/useBuilder'
export default function ProductCard({
  id,
  name,
  description,
  image,
  savePercent,
  quantity = 0,
  price,
  originalPrice,
  colors = [],
  activeColor = 0,
}) {
  const { increaseQuantity, decreaseQuantity } = useBuilder()
  const currentQuantity =
  colors.length > 0
    ? colors[activeColor].quantity
    : quantity

  return (
    <article
      className={`flex flex-col rounded-xl border-2 bg-white p-4 ${currentQuantity > 0 ? 'border-[#1a98ff]' : 'border-slate-200'
        }`}
    >
      {savePercent > 0 && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-[#7c3aed] px-2.5 py-0.5 text-[11px] font-semibold text-white">
          Save {savePercent}%
        </span>
      )}
      {savePercent === 0 && <span className="mb-3 h-[22px]"  />}

      <div className="mb-4 flex flex-1 items-center justify-center px-2">
        <img src={image} alt={name} className="h-28 w-auto object-contain" />
      </div>

      <h3 className="mb-1 text-base font-bold text-slate-900">{name}</h3>
      <p className="mb-4 text-xs leading-relaxed text-slate-500">
        {description}{' '}
        <span className="cursor-default font-medium text-[#1a98ff]">
          Learn More
        </span>
      </p>

      {colors.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {colors.map((color, colorIndex) => (
            <span
              key={color.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${colorIndex === activeColor
                ? 'border-[#1a98ff] bg-[#1a98ff]/5 text-slate-800'
                : 'border-slate-200 text-slate-600'
                }`}
            >
              <span
                className="h-3 w-3 rounded-full border border-slate-300"
                style={{ backgroundColor: color.hex }}
                
              />
              {color.label}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
        <div
          className="inline-flex items-center rounded-full border border-slate-200 bg-white"
          
        >
          <button
            onClick={() => decreaseQuantity(id, activeColor)}
            disabled={currentQuantity === 0}
            className={`flex h-8 w-8 items-center justify-center ${currentQuantity === 0
                ? 'cursor-not-allowed text-slate-300'
                : 'text-slate-800'
              }`}
          >
            −
          </button>
          <span className="flex h-8 min-w-8 items-center justify-center px-1 text-sm font-semibold text-slate-800">
            {currentQuantity}
          </span>
          <button
            onClick={() => increaseQuantity(id, activeColor)}
            className="flex h-8 w-8 items-center justify-center text-slate-800"
          >
            +
          </button>
        </div>

        <div className="text-right">
          {originalPrice && (
            <span className="mr-1.5 text-xs text-red-500 line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-sm font-bold text-slate-900">${price}</span>
        </div>
      </div>
    </article>
  )
}
