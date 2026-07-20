import {
  HiOutlineSignal,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from 'react-icons/hi2'

const ICON_MAP = {
  motion: HiOutlineSignal,
  hub: HiOutlineServerStack,
  storage: HiOutlineCircleStack,
  shield: HiOutlineShieldCheck,
  shipping: HiOutlineTruck,
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

  const Icon = ICON_MAP[icon]

  if (!Icon) {
    return (
      <span
        className="h-10 w-10 shrink-0 rounded-md bg-white"
        aria-hidden
      />
    )
  }

  const iconColor = variant === 'shipping' ? 'text-emerald-500' : 'text-slate-600'

  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white ${iconColor}`}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  )
}
