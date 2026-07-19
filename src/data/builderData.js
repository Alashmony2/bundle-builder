import wyzeV4 from '../assets/Wyze_V4.png'
import wyzeV3 from '../assets/Wyze_V3.png'
import wyzeV2 from '../assets/Wyze_V2.png'
import wyzeDuo from '../assets/Wyze_duo.png'
import wyzeBattery from '../assets/Wyze_battery.png'

export const CAMERA_PRODUCTS = [
  {
    id: 'wyze-v4',
    name: 'Wyze Cam v4',
    description: '1080p HD video, Color Night Vision, Indoor/Outdoor IP65.',
    image: wyzeV4,
    savePercent: 23,
    selected: true,
    quantity: 2,
    price: '23.33',
    originalPrice: '39.99',
    colors: [
      { label: 'White', hex: '#f5f5f5' },
      { label: 'Grey', hex: '#9ca3af' },
      { label: 'Black', hex: '#1f2937' },
    ],
    activeColor: 0,
  },
  {
    id: 'wyze-v3',
    name: 'Wyze Cam v3',
    description: '1080p HD video, Color Night Vision, Indoor/Outdoor IP65.',
    image: wyzeV3,
    savePercent: 26,
    selected: true,
    quantity: 1,
    price: '21.13',
    originalPrice: '35.99',
    colors: [
      { label: 'White', hex: '#f5f5f5' },
      { label: 'Black', hex: '#1f2937' },
    ],
    activeColor: 0,
  },
  {
    id: 'wyze-v2',
    name: 'Wyze Cam v2',
    description: '1080p HD video, Color Night Vision, Indoor/Outdoor IP65.',
    image: wyzeV2,
    savePercent: 0,
    selected: false,
    quantity: 0,
    price: '19.99',
    colors: [],
  },
  {
    id: 'wyze-Duo',
    name: 'Wyze Cam Duo',
    description: '1080p HD video, Color Night Vision, Indoor/Outdoor IP65.',
    image: wyzeDuo,
    savePercent: 13,
    selected: false,
    quantity: 0,
    price: '49.99',
    originalPrice: '59.99',
    colors: [
      { label: 'White', hex: '#f5f5f5' },
      { label: 'Black', hex: '#1f2937' },
    ],
  },
  {
    id: 'wyze-Battery',
    name: 'Wyze Battery Cam Pro',
    description: '1080p HD video, Color Night Vision, Indoor/Outdoor IP65.',
    image: wyzeBattery,
    savePercent: 13,
    selected: false,
    quantity: 0,
    price: '49.99',
    originalPrice: '59.99',
    colors: [
      { label: 'White', hex: '#f5f5f5' },
      { label: 'Black', hex: '#1f2937' },
    ],
  },
  
]

export const BUILDER_STEPS = [
  {
    title: 'Choose your cameras',
    nextLabel: 'Choose your sensors',
  },
  {
    title: 'Choose your plan',
    nextLabel: 'Choose your sensors',
  },
  {
    title: 'Choose your sensors',
    nextLabel: 'Add extra protection',
  },
  {
    title: 'Add extra protection',
    nextLabel: null,
  },
]
