import QuantityStepper from './QuantityStepper'
import ReviewItemIcon from './ReviewItemIcon'
import ReviewItemPrice from './ReviewItemPrice'
import useBuilder from '../../hooks/useBuilder'

export default function ReviewItem({
  id,
  colorIndex,
  name,
  subtitle,
  image,
  icon,
  quantity,
  price,
  originalPrice,
  priceLabel,
  variant = 'product',
}) {
  const showStepper = typeof quantity === 'number'
  const highlightPrice = Boolean(priceLabel)
  const { increaseQuantity, decreaseQuantity } = useBuilder()

  return (
    <div className="flex items-center gap-3 py-2">
      <ReviewItemIcon
        icon={icon}
        image={image}
        alt={name}
        variant={variant}
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-800">
          {name}
          {subtitle && (
            <span className="font-normal text-slate-500"> ({subtitle})</span>
          )}
        </p>
      </div>

      {showStepper && <QuantityStepper
        quantity={quantity}
        onIncrease={() => increaseQuantity(id, colorIndex)}
        onDecrease={() => decreaseQuantity(id, colorIndex)}
      />}

      <ReviewItemPrice
        price={price}
        originalPrice={originalPrice}
        priceLabel={priceLabel}
        highlight={highlightPrice}
      />
    </div>
  )
}
