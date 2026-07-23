import sensemotion from '../../assets/sensemotion.png'
import sensehub from '../../assets/sensehub.png'
import microsd from '../../assets/microsd.png'
import unlimited from '../../assets/unlimited.png'
import shipping from '../../assets/shipping.png'

const ICON_MAP = {
  motion: sensemotion,
  hub: sensehub,
  storage: microsd,
  shield: unlimited,
  shipping: shipping,
}

export default function ReviewItemIcon({ icon, image, alt, variant = 'product' }) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt}
        className="h-10 w-10 shrink-0 object-contain"
      />
    )
  }

  const iconImage = ICON_MAP[icon]

  if (!iconImage) {
    return (
      <span
        className="h-10 w-10 shrink-0 rounded-md bg-white"
        aria-hidden
      />
    )
  }

  return (
    <img
      src={iconImage}
      alt={alt}
      className="h-10 w-10 shrink-0 object-contain"
    />
  )
}
