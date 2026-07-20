import wyzeV4 from '../assets/Wyze_V4.png'
import wyzeV3 from '../assets/Wyze_V3.png'

export const REVIEW_HEADER = {
  label: 'Review',
  title: 'Your security system',
  description:
    'Review your personalized protection system designed to keep what matters most safe.',
}

export const REVIEW_CATEGORIES = [
  {
    id: 'cameras',
    label: 'Cameras',
    items: [
      {
        id: 'wyze-cam-v4',
        name: 'Wyze Cam v4',
        image: wyzeV4,
        quantity: 1,
        price: '27.98',
        originalPrice: '35.98',
      },
      {
        id: 'wyze-cam-pan-v3',
        name: 'Wyze Cam Pan v3',
        image: wyzeV3,
        quantity: 2,
        price: '47.98',
        originalPrice: '57.98',
      },
    ],
  },
  {
    id: 'sensors',
    label: 'Sensors',
    items: [
      {
        id: 'wyze-sense-motion',
        name: 'Wyze Sense Motion Sensor',
        icon: 'motion',
        quantity: 2,
        price: '59.98',
      },
      {
        id: 'wyze-sense-hub',
        name: 'Wyze Sense Hub',
        subtitle: 'Required',
        icon: 'hub',
        quantity: 1,
        originalPrice: '29.98',
        priceLabel: 'FREE',
      },
    ],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    items: [
      {
        id: 'wyze-microsd',
        name: 'Wyze MicroSD Card (256GB)',
        icon: 'storage',
        quantity: 2,
        price: '41.96',
      },
    ],
  },
  {
    id: 'plan',
    label: 'Plan',
    items: [
      {
        id: 'cam-unlimited',
        name: 'Cam Unlimited',
        icon: 'shield',
        price: '9.99/mo',
        originalPrice: '12.99/mo',
      },
    ],
  },
]

export const REVIEW_SHIPPING = {
  id: 'fast-shipping',
  name: 'Fast Shipping',
  icon: 'shipping',
  originalPrice: '5.99',
  priceLabel: 'FREE',
}

export const REVIEW_SUMMARY = {
  returnsText:
    "30-day hassle-free returns. If you're not totally in love with the product, we will refund you 100%.",
  financingLabel: 'as low as $19.19/mo',
  originalTotal: '238.81',
  total: '187.89',
  savingsMessage: "Congrats! You're saving $50.92 on your security bundle!",
}
