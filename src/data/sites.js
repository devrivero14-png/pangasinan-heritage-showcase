/**
 * Content for the Pangasinan Heritage Digital Showcase.
 *
 * This file is the only place content lives. Pages and components read from
 * it, so adding a site means adding one object here and one set of images in
 * public/images/sites/ named `<slug>-480.webp`, `<slug>-960.webp`, `<slug>-1440.webp`.
 */

/**
 * Each site has `image: true` by default (photos in public/images/sites/).
 * Set `image: false` to show the placeholder instead.
 */

/** Categories, in the order they appear in the filter. */
export const CATEGORIES = ['Natural', 'Historical', 'Religious', 'Cultural', 'Architectural', 'Recreational'];

/** Icon name (see components/atoms/Icon) for each category. */
export const CATEGORY_ICON = {
  Natural: 'landscape',
  Historical: 'landmark',
  Religious: 'church',
  Cultural: 'palette',
  Architectural: 'building',
  Recreational: 'waves',
};

export const SITES = [
  {
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    town: 'Alaminos',
    location: 'Alaminos City, Pangasinan',
    categories: ['Natural'],
    summary: 'More than a hundred limestone islands scattered across the Lingayen Gulf.',
    description: [
      'A national park in the Lingayen Gulf made up of over a hundred limestone islands and islets. Visitors island-hop by outrigger boat between spots such as Governor\'s, Quezon and Children\'s Island for swimming, snorkeling, kayaking and cliff jumping.',
      'Several islands hold caves and viewpoints, and the park has been a protected natural area and one of Pangasinan\'s best-known destinations for decades.',
    ],
    imageAlt: 'Aerial view of green islands in turquoise water',
    contact: 'Alaminos City Tourism Office',
    featured: true,
  },
  {
    slug: 'cape-bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    town: 'Bolinao',
    location: 'Patar, Bolinao, Pangasinan',
    categories: ['Historical', 'Architectural'],
    summary: 'One of the tallest lighthouses in the Philippines, above Patar Beach.',
    description: [
      'One of the tallest lighthouses in the Philippines, standing on Punta Piedra Point above Patar Beach since the early American colonial period.',
      'The lighthouse guided ships along the northwestern coast and remains an active navigational aid today. Its hilltop perch offers wide views of the West Philippine Sea and makes it a popular stop at sunset.',
    ],
    imageAlt: 'White lighthouse tower against a deep blue sky',
    contact: 'Bolinao Municipal Tourism Office',
    featured: true,
  },
  {
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot Spring Resort',
    town: 'Balungao',
    location: 'Balungao, Pangasinan',
    categories: ['Natural', 'Recreational'],
    summary: 'Warm spring-fed pools at the foot of Mount Balungao.',
    description: [
      'A resort at the foot of Mount Balungao built around natural hot spring pools and surrounded by forested hills and nature trails.',
      'Beyond the warm pools, the area offers cottages, picnic grounds and short hikes, making it a favourite weekend getaway for families from across the province.',
    ],
    imageAlt: 'Swimming pools on a hillside surrounded by trees',
    contact: 'Balungao Municipal Tourism Office',
    featured: true,
  },
  {
    slug: 'manaoag-basilica',
    name: 'Minor Basilica of Our Lady of Manaoag',
    town: 'Manaoag',
    location: 'Manaoag, Pangasinan',
    categories: ['Religious', 'Historical'],
    summary: 'One of the most visited pilgrimage churches in the country.',
    description: [
      'One of the most visited pilgrimage churches in the Philippines, home to the venerated image of Our Lady of the Rosary of Manaoag.',
      'With roots in the early 1600s, the basilica draws pilgrims and tourists year-round who come to pray, light candles and attend Mass.',
    ],
    imageAlt: 'Front of the Manaoag basilica with its bell tower and plaza',
    contact: 'Manaoag Basilica Parish Office',
  },
  {
    slug: 'tayug-sunflower-eco-park',
    name: 'Tayug Sunflower Eco Park',
    town: 'Tayug',
    location: 'Tayug, Pangasinan',
    categories: ['Natural', 'Cultural'],
    summary: 'Seasonal fields of sunflowers in eastern Pangasinan.',
    description: [
      'A seasonal eco-park where fields burst into bloom with sunflowers, drawing visitors for photos and light farm-tourism activities.',
      'Peak bloom usually falls around the start of the year, when the park celebrates its sunflower season.',
    ],
    imageAlt: 'A maze of sunflower hedges in a wide green field',
    contact: 'Tayug Municipal Tourism Office',
  },
  {
    slug: 'lingayen-capitol',
    name: 'Lingayen Provincial Capitol',
    town: 'Lingayen',
    location: 'Lingayen, Pangasinan',
    categories: ['Historical', 'Architectural'],
    summary: 'The neoclassical seat of the provincial government by the gulf.',
    description: [
      'The seat of the provincial government, known for its stately neoclassical architecture.',
      'The capitol grounds face the beach where Allied forces landed during the 1945 liberation of Luzon, and a memorial on the grounds commemorates the landing.',
    ],
    imageAlt: 'Neoclassical capitol building with tall columns at sunset',
    contact: 'Pangasinan Provincial Tourism Office',
  },
  {
    slug: 'casa-real',
    name: 'Casa Real',
    town: 'Lingayen',
    location: 'Lingayen, Pangasinan',
    categories: ['Historical', 'Cultural'],
    summary: 'A restored colonial-era building near the capitol.',
    description: [
      'A restored heritage building near the provincial capitol, preserved to showcase Pangasinan\'s colonial-era history and local heritage exhibits.',
      'Its facade and period details give visitors a glimpse of early provincial architecture.',
    ],
    image: false, // no verified photo yet — the card shows a placeholder
    imageAlt: '',
    contact: 'Pangasinan Provincial Tourism Office',
  },
  {
    slug: 'bolinao-falls',
    name: 'Bolinao Falls',
    town: 'Bolinao',
    location: 'Bolinao, Pangasinan',
    categories: ['Natural', 'Recreational'],
    summary: 'Turquoise falls and cool spring-fed pools in the hills of Bolinao.',
    description: [
      'A set of turquoise waterfalls tucked into the hills of Bolinao, popular for swimming beneath the falls and swinging from a rope into the pool below.',
      'Bolinao Falls I and II are the most visited, each with its own cool, spring-fed pool.',
    ],
    imageAlt: 'Waterfall framed by tall tropical trees',
    contact: 'Bolinao Municipal Tourism Office',
  },
];

export function getSite(slug) {
  return SITES.find((s) => s.slug === slug);
}

/** Other sites that share a category with `site`, most overlap first. */
export function getRelated(site, limit = 3) {
  return SITES.filter((s) => s.slug !== site.slug)
    .map((s) => ({ s, score: s.categories.filter((c) => site.categories.includes(c)).length + (s.town === site.town ? 1 : 0) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.s);
}
