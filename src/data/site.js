/**
 * Single source of truth for the whole page.
 * Edit the values below and every section updates automatically.
 */

/** Builds a fast, responsive Unsplash URL. Swap `id` for your own hosted image if you prefer. */
export const img = (id, w = 900, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`

export const site = {
  name: 'Cedar & Salt',
  tagline: 'Seasonal neighbourhood kitchen',
  description:
    'Wood-fired plates, house-fermented bread and generous glasses of wine — cooked nightly in the heart of Portland.',
  founded: 2009,
  phone: '+1 (503) 555-0148',
  phoneHref: 'tel:+15035550148',
  email: 'hello@cedarandsalt.com',
  emailHref: 'mailto:hello@cedarandsalt.com',
  reservationEmail: 'tables@cedarandsalt.com',
  whatsapp: {
    // Digits only, country code first — wa.me needs no `+`, spaces or dashes.
    number: '+15035550148',
    message: "Hi Cedar & Salt — I'd like to ask about a table.",
  },
  address: {
    line1: '1428 SE Division Street',
    line2: 'Portland, Oregon 97202',
  },
  coords: { lat: 45.5048, lon: -122.6505 },
  transitNote: 'Streetcar stop (SE Division St) 2 min walk · Bike racks out front · Street parking after 6 pm',
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ],
}

/** Anchor links used by the navbar, footer and CTA buttons. */
export const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our story', href: '#about' },
  { label: 'Hours', href: '#hours' },
  { label: 'Visit', href: '#contact' },
]

export const menuCategories = ['Starters', 'Mains', 'Brunch', 'Sweets']

export const dishes = [
  {
    id: 'sourdough',
    name: 'Charred Sourdough & Cultured Butter',
    description:
      'Forty-eight hour levain from our back room, charred over olive wood and finished with flaky sea salt.',
    price: 9,
    category: 'Starters',
    tags: ['Vegetarian'],
    image: img('1509440159596-0249088772ff', 800, 600),
    alt: 'Rustic sourdough loaves on a bakery shelf',
  },
  {
    id: 'tomato',
    name: 'Heirloom Tomato & Whipped Ricotta',
    description:
      'Peak-season tomatoes from Sauvie Island, hand-stretched ricotta, basil oil and a dusting of fennel pollen.',
    price: 14,
    category: 'Starters',
    tags: ['Vegetarian', 'Gluten free'],
    image: img('1540189549336-e6e99c3679fe', 800, 600),
    alt: 'Colourful heirloom tomato salad in a bowl',
  },
  {
    id: 'tagliatelle',
    name: 'Truffle Tagliatelle',
    description:
      'Hand-rolled ribbons, winter truffle butter, aged parmesan and a snow of shaved pecorino.',
    price: 26,
    category: 'Mains',
    tags: ['Chef’s pick'],
    image: img('1473093295043-cdd812d0e601', 800, 600),
    alt: 'Twirl of truffle tagliatelle with parmesan',
  },
  {
    id: 'margherita',
    name: 'Wood-Fired Margherita',
    description:
      'Seventy-two-hour dough blistered at 460°C, San Marzano tomatoes, fior di latte and torn basil.',
    price: 19,
    category: 'Mains',
    tags: ['Vegetarian'],
    image: img('1565299624946-b28f40a0ae38', 800, 600),
    alt: 'Wood-fired margherita pizza with charred crust',
  },
  {
    id: 'brisket-burger',
    name: 'Smashed Brisket Burger',
    description:
      'Twelve-hour brisket patty, aged cheddar, burnt onion jam and pickles on a milk bun.',
    price: 24,
    category: 'Mains',
    tags: ['House favourite'],
    image: img('1551782450-a2132b4ba21d', 800, 600),
    alt: 'Cheeseburger with lettuce and pickles',
  },
  {
    id: 'pancakes',
    name: 'Buttermilk Pancakes & Maple',
    description:
      'Weekend-only. Tall, tangy buttermilk pancakes with dark maple, brown butter and macerated berries.',
    price: 17,
    category: 'Brunch',
    tags: ['Weekends', 'Vegetarian'],
    image: img('1567620905732-2d1ec7ab7445', 800, 600),
    alt: 'Stack of buttermilk pancakes with blueberries',
  },
  {
    id: 'french-toast',
    name: 'Brioche French Toast',
    description:
      'Overnight brioche, vanilla custard, roasted stone fruit and a spoon of espresso-honey.',
    price: 16,
    category: 'Brunch',
    tags: ['Vegetarian'],
    image: img('1484723091739-30a097e8f929', 800, 600),
    alt: 'French toast with syrup and fresh fruit',
  },
  {
    id: 'chocolate',
    name: 'Dark Chocolate Pot',
    description: 'Seventy-two percent Valrhona, olive oil, sea salt and a shortbread shard.',
    price: 11,
    category: 'Sweets',
    tags: ['Vegetarian'],
    image: img('1551024506-0bccd828d307', 800, 600),
    alt: 'Rich chocolate dessert on a plate',
  },
  {
    id: 'brownie',
    name: 'Brownie Sundae',
    description: 'Fudgy dark brownie, vanilla bean gelato, salted caramel and toasted hazelnut.',
    price: 12,
    category: 'Sweets',
    tags: ['Chef’s pick'],
    image: img('1563805042-7684c019e1cb', 800, 600),
    alt: 'Chocolate brownie sundae with ice cream',
  },
]

export const heroDish = {
  name: 'Truffle Tagliatelle',
  note: 'Chef’s pick · winter menu',
  image: img('1504674900247-0877df9cc836', 1200, 1500),
  alt: 'A table of shared seasonal dishes at Cedar & Salt',
}

export const heroSecondaryImage = img('1473093295043-cdd812d0e601', 600, 600)

/** Copy for the split panel that sits beside the login / sign-up forms. */
export const authPanel = {
  image: img('1517248135467-4c7edcad34c4', 1200, 1600),
  alt: 'The warmly lit dining room at Cedar & Salt',
  title: 'A seat kept for you',
  copy: 'Members get first pick of the wood oven, their usual table on the quiet Tuesday nights, and a text when the shortlist menu lands.',
  perks: [
    'Early access to weekend brunch bookings',
    'Saved details — allergies, favourite seat, wine',
    'A slice of something sweet on your birthday',
  ],
}

export const aboutImages = {
  main: img('1414235077428-338989a2e8c0', 1000, 1200),
}

export const highlights = [
  { icon: 'leaf', title: 'Market-led menu', copy: 'Written each morning around whatever the growers bring us.' },
  { icon: 'flame', title: 'Live-fire kitchen', copy: 'One wood oven, one charcoal grill, no shortcuts.' },
  { icon: 'heart', title: 'Room for everyone', copy: 'A neighbourhood room — dogs at the bar, kids at the counter.' },
]

export const stats = [
  { value: '16', label: 'Years on Division' },
  { value: '4.9', label: 'Average rating' },
  { value: '30+', label: 'Growers we buy from' },
]

/** Indexed by `Date.prototype.getDay()` — Sunday first. Set `closed: true` to darken a row. */
export const openingHours = [
  { day: 'Sunday', short: 'Sun', open: '10:00', close: '21:00' },
  { day: 'Monday', short: 'Mon', open: '11:30', close: '22:00' },
  { day: 'Tuesday', short: 'Tue', open: '11:30', close: '22:00' },
  { day: 'Wednesday', short: 'Wed', open: '11:30', close: '22:00' },
  { day: 'Thursday', short: 'Thu', open: '11:30', close: '22:30' },
  { day: 'Friday', short: 'Fri', open: '11:30', close: '23:00' },
  { day: 'Saturday', short: 'Sat', open: '10:00', close: '23:00' },
]

export const hoursNote = 'Kitchen closes 45 minutes before the room does. Closed Thanksgiving and Christmas Day.'

/** OpenStreetMap needs no API key — swap for a Google Maps embed if you have one. */
export const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${site.coords.lon - 0.014}%2C${site.coords.lat - 0.008}%2C${site.coords.lon + 0.014}%2C${site.coords.lat + 0.008}&layer=mapnik&marker=${site.coords.lat}%2C${site.coords.lon}`

export const directionsUrl = `https://www.openstreetmap.org/?mlat=${site.coords.lat}&mlon=${site.coords.lon}#map=16/${site.coords.lat}/${site.coords.lon}`

/** Opens WhatsApp with a pre-filled message, so the first message is never blank. */
export const whatsappUrl = `https://wa.me/${site.whatsapp.number.replace(/\D/g, '')}?text=${encodeURIComponent(site.whatsapp.message)}`