export const PRODUCTS = [

  {
    id: "prod-002",
    name: "Heineken Premium Lager Beer",
    image: "/heineken.jpg",
    volume: "600ml",
    price: 1500,
  },
  {
    id: "prod-003",
    name: "Orijin Herbal Spirit Bitters",
    image: "/orijin.jpg",
    volume: "750ml",
    price: 2500,
    oldPrice: 2800,
  },

  {
    id: "prod-005",
    name: "Hennessy Very Special (VS) Cognac",
    image: "/henessy.jpg",
    volume: "700ml",
    price: 52000,
    oldPrice: 55000,
  },
  {
    id: "prod-006",
    name: "Martell Blue Swift Cognac",
    image: "/martell.jpg",
    volume: "750ml",
    price: 110000,
  },
  {
    id: "prod-007",
    name: "Campari Aperitif",
    image: "/campari.jpg",
    volume: "1000ml",
    price: 22500,
    oldPrice: 24000,
  },
  {
    id: "prod-008",
    name: "Jack Daniel's Old No. 7 Tennessee Whiskey",
    image: "/jack-daniels.jpg",
    volume: "700ml",
    price: 28000,
  },
  {
    id: "prod-009",
    name: "Carlo Rossi Sweet Red Wine",
    image: "/rossi.jpg",
    volume: "750ml",
    price: 6500,
    oldPrice: 7200,
  },
  {
    id: "prod-010",
    name: "Smirnoff Ice Black",
    image: "/smirnoff.jpg",
    volume: "300ml",
    price: 1100,
  },
];

interface EventItem {
    id: string
    title: string
    tag: string
    description: string
    date: string
    location: string
    time: string
    image: string
}

export const EVENTS = [

    {
        id: '2',
        title: 'Lekki Beach Groove',
        tag: 'Party & Vibes',
        description: 'Experience the ultimate beachside chill with live DJ sets, cold drinks, bonfire setups, and great company right by the Atlantic shoreline.',
        date: 'July, 15 2025',
        location: 'Lekki Phase 1',
        time: '4PM - 12AM WAT',
        image: '/lekki-beach.jpeg',
    },
    {
        id: '3',
        title: 'Acoustics & Cocktails',
        tag: 'Live Music',
        description: 'An intimate evening of soulful acoustic live performances paired with signature artisan cocktails crafted by top mixologists.',
        date: 'August, 5 2025',
        location: 'Ikoyi',
        time: '6PM - 11PM WAT',
        image: '/diner.jpg',
    },
     
    {
        id: '1',
        title: 'Owambe Under the Stars',
        tag: 'Wine and Dine',
        description: 'Owambe Under The Stars is an outdoor celebration with Afrobeat, highlife and juju music, delicious food, and the best of Lagos nightlife - under the stars!',
        date: 'July, 1 2025',
        location: 'Victoria Island',
        time: '8PM - 1AM WAT',
        image: '/eventHome.png',
    },
]

export const BLOGS = [
    {
        id: 'blog-1',
        tag: 'Culture',
        title: 'Whiskey vs Cognac: What Lagos Drinks', 
        description: 'Exploring the timeless rivalry between smooth cognac and bold whiskey across the top clubs, lounges, and streets of Lagos.',
        meta: 'Feb 18, 2026 • 6 min read',
        image: '/whiskey.jpg'
    },
    {
        id: 'blog-2',
        tag: 'Nightlife',
        title: 'Inside Victoria Island’s Weekend Energy', 
        description: 'A deep dive into the weekend hotspots, VIP tables, and pulsating Afrobeat rhythms that define high-end nights in V.I.',
        meta: 'Feb 21, 2026 • 5 min read',
        image: '/lagnite.jpg'
    },
    {
        id: 'blog-3',
        tag: 'Lifestyle',
        title: 'The Rise of Artisan Cocktails in Nigeria', 
        description: 'How modern mixologists in Lagos are blending local indigenous herbs, spirits, and tropical fruits into world-class cocktails.',
        meta: 'Mar 02, 2026 • 4 min read',
        image: '/cocktails.jpg'
    },
    {
        id: 'blog-4',
        tag: 'Events',
        title: 'Owambe Culture: Fashion, Music & Excess', 
        description: 'Unpacking the vibrant traditions, stunning aso ebi styles, and non-stop live band performances that make Nigerian parties legendary.',
        meta: 'Mar 10, 2026 • 7 min read',
        image: '/eventHome.png'
    },
    {
        id: 'blog-5',
        tag: 'Drinks',
        title: 'Why Stout Remains a Nigerian Classic', 
        description: 'From local bars to upscale lounges, discover why dark, rich stouts continue to hold a permanent throne in the hearts of drinkers.',
        meta: 'Mar 15, 2026 • 5 min read',
        image: '/weekDeal1.png'
    },
    {
        id: 'blog-6',
        tag: 'Community',
        title: 'Weekend Hangouts: Where to Chill in Lekki', 
        description: 'Your ultimate guide to the best waterfront spots, rooftop lounges, and chill spots to unwind after a long Lagos work week.',
        meta: 'Mar 22, 2026 • 6 min read',
        image: '/lounge.jpg'
    },
];