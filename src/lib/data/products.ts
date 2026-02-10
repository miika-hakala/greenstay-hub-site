export interface Product {
  name: string;
  price: string;
  type: 'rental' | 'sale';
  origin: string;
  note?: string;
}

export interface Bundle {
  name: string;
  price: string;
  saving: string;
  items: { name: string; type: 'rental' | 'sale' }[];
  description: string;
}

export const rentalCategories = [
  {
    name: 'Tech',
    icon: '🔌',
    products: [
      { name: 'Power bank 5,000 mAh', price: '€2/day', type: 'rental' as const, origin: 'EU' },
      { name: 'Power bank 10,000 mAh', price: '€3/day', type: 'rental' as const, origin: 'EU' },
      { name: 'Bluetooth speaker (waterproof)', price: '€3/day', type: 'rental' as const, origin: 'EU' },
      { name: 'Headlamp', price: '€2/day', type: 'rental' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Beach & Sun',
    icon: '🏖️',
    products: [
      { name: 'Beach bag', price: '€4/stay', type: 'rental' as const, origin: 'EU' },
      { name: 'Beach towel (premium)', price: '€3/stay', type: 'rental' as const, origin: 'EU' },
      { name: 'Snorkelling kit', price: '€5/day', type: 'rental' as const, origin: 'EU' },
      { name: 'Cooler bag', price: '€3/stay', type: 'rental' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Hiking & Outdoor',
    icon: '🥾',
    products: [
      { name: 'Day backpack (compact)', price: '€4/day', type: 'rental' as const, origin: 'EU' },
      { name: 'Hiking poles (foldable, pair)', price: '€5/day', type: 'rental' as const, origin: 'EU' },
      { name: 'Thermos bottle (0.5L, stainless)', price: '€3/day', type: 'rental' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Comfort',
    icon: '😴',
    products: [{ name: 'Travel pillow', price: '€2/day', type: 'rental' as const, origin: 'EU' }]
  }
];

export const essentialCategories = [
  {
    name: 'Hygiene',
    icon: '🧴',
    products: [
      { name: 'Bamboo toothbrush', price: '€2–4', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Toothpaste (travel)', price: '€2–3', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Deodorant (natural, solid)', price: '€4–6', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Shampoo bar', price: '€4–7', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Soap bar (natural)', price: '€3–5', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Wet wipes (biodegradable)', price: '€2–3', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Razor (reusable handle)', price: '€5–8', type: 'sale' as const, origin: 'EU' },
      { name: 'Hair ties / bobby pins', price: '€2–3', type: 'sale' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Beach & Sun',
    icon: '☀️',
    products: [
      { name: 'Sunscreen SPF30+ (reef-safe)', price: '€8–12', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'After-sun lotion', price: '€6–9', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Lip balm with SPF', price: '€3–5', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Flip-flops', price: '€4–8', type: 'sale' as const, origin: 'EU' },
      { name: 'Insect repellent', price: '€5–8', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Sun hat / cap', price: '€5–10', type: 'sale' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Tech',
    icon: '🔌',
    products: [
      { name: 'Universal charger (USB-C / Lightning)', price: '€8–12', type: 'sale' as const, origin: 'EU' },
      { name: 'EU travel adapter', price: '€5–8', type: 'sale' as const, origin: 'EU' },
      { name: 'Earbuds (wired)', price: '€5–8', type: 'sale' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Comfort & Safety',
    icon: '🛡️',
    products: [
      { name: 'Sleep mask', price: '€3–5', type: 'sale' as const, origin: 'EU' },
      { name: 'Earplugs (reusable)', price: '€3–5', type: 'sale' as const, origin: 'EU' },
      { name: 'Reusable water bottle', price: '€6–10', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Tote bag (organic cotton)', price: '€5–8', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'First aid kit (mini)', price: '€4–6', type: 'sale' as const, origin: 'EU' },
      { name: 'Sewing kit (mini)', price: '€2–3', type: 'sale' as const, origin: 'EU' }
    ]
  },
  {
    name: 'Family & Baby',
    icon: '👶',
    products: [
      { name: 'Baby sunscreen SPF50+', price: '€6–10', type: 'sale' as const, origin: 'Spain/EU' },
      { name: 'Diapers (small pack, 4–6)', price: '€4–6', type: 'sale' as const, origin: 'EU' },
      { name: 'Pacifier (2-pack, BPA-free)', price: '€3–5', type: 'sale' as const, origin: 'EU' }
    ]
  }
];

export const bundles: Bundle[] = [
  {
    name: 'Beach Bundle',
    price: '€12',
    saving: 'Save €2–3',
    items: [
      { name: 'Sunscreen SPF30+', type: 'sale' },
      { name: 'Beach towel', type: 'rental' },
      { name: 'Beach bag', type: 'rental' }
    ],
    description: 'Everything for a day at the beach.'
  },
  {
    name: 'Tech Bundle',
    price: '€10',
    saving: 'Save €2–4',
    items: [
      { name: 'Power bank', type: 'rental' },
      { name: 'Universal charger', type: 'sale' },
      { name: 'EU adapter', type: 'sale' }
    ],
    description: 'Stay charged throughout your trip.'
  },
  {
    name: 'Essentials Bundle',
    price: '€8',
    saving: 'Save €1–3',
    items: [
      { name: 'Bamboo toothbrush', type: 'sale' },
      { name: 'Deodorant', type: 'sale' },
      { name: 'Shampoo bar', type: 'sale' }
    ],
    description: "Forgot your toiletry bag? Sorted."
  },
  {
    name: 'Comfort Bundle',
    price: '€9',
    saving: 'Save €1–2',
    items: [
      { name: 'Sleep mask', type: 'sale' },
      { name: 'Earplugs', type: 'sale' },
      { name: 'Travel pillow', type: 'rental' }
    ],
    description: "For a great night's sleep."
  },
  {
    name: 'Hiking Bundle',
    price: '€14',
    saving: 'Save €3–5',
    items: [
      { name: 'Day backpack', type: 'rental' },
      { name: 'Hiking poles', type: 'rental' },
      { name: 'Water bottle', type: 'sale' },
      { name: 'First aid kit', type: 'sale' }
    ],
    description: 'Ready for Sierra de Mijas trails.'
  },
  {
    name: 'Baby Emergency Kit',
    price: '€12',
    saving: 'Save €2–3',
    items: [
      { name: 'Diapers (small pack)', type: 'sale' },
      { name: 'Wet wipes', type: 'sale' },
      { name: 'Baby sunscreen', type: 'sale' },
      { name: 'Pacifier', type: 'sale' }
    ],
    description: 'Emergency baby supplies, sorted.'
  }
];
