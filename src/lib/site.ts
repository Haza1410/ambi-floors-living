export const siteConfig = {
  name: "Ambi Floors & Living",
  tagline: "Premium flooring & home interiors for every room",
  description:
    "Independent flooring and home interiors retailer in Great Barr, Birmingham. Carpets, LVT, laminate, vinyl, rugs, and stylish furniture — with expert advice, professional fitting, and competitive prices.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ambifloorsliving.co.uk",
  serviceArea: "Birmingham and the West Midlands",
  products: [
    "Carpet",
    "Laminate",
    "Vinyl",
    "Rugs",
    "Beds",
    "Dining",
    "Sofas",
  ],
};

export const contact = {
  // Verify phone, email, and hours before going live.
  // Phone sourced from directory listing at same address — please confirm.
  address: {
    street: "610 Walsall Road",
    area: "Great Barr",
    city: "Birmingham",
    postcode: "B42 1EZ",
    country: "England",
    full: "610 Walsall Road, Great Barr, Birmingham, B42 1EZ",
  },
  phone: "0121 357 7089",
  phoneHref: "tel:+441213577089",
  email: "info@ambifloorsliving.co.uk",
  emailHref: "mailto:info@ambifloorsliving.co.uk",
  hours: [
    { day: "Monday", hours: "9:00 am – 6:00 pm" },
    { day: "Tuesday", hours: "9:00 am – 6:00 pm" },
    { day: "Wednesday", hours: "9:00 am – 6:00 pm" },
    { day: "Thursday", hours: "9:00 am – 6:00 pm" },
    { day: "Friday", hours: "9:00 am – 6:00 pm" },
    { day: "Saturday", hours: "9:00 am – 6:00 pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=610+Walsall+Road,+Great+Barr,+Birmingham,+B42+1EZ&t=&z=15&ie=UTF8&iwloc=&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=610+Walsall+Road,+Great+Barr,+Birmingham,+B42+1EZ",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Flooring", href: "/flooring" },
  { label: "Carpets", href: "/carpets" },
  { label: "Furniture", href: "/furniture" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const trustPillars = [
  {
    title: "Expert Advice",
    description:
      "Our knowledgeable team helps you choose the right flooring and furnishings for your home or business — with honest, practical guidance.",
    icon: "lightbulb" as const,
  },
  {
    title: "Excellent Service",
    description:
      "From your first visit to final installation, we pride ourselves on friendly, reliable service that puts your needs first.",
    icon: "heart" as const,
  },
  {
    title: "Affordable Pricing",
    description:
      "Quality products at competitive prices. We believe beautiful floors and furniture should be accessible to every budget.",
    icon: "badge-pound" as const,
  },
];

export const categories = [
  {
    title: "Flooring",
    description: "LVT, laminate, and vinyl flooring for every room.",
    href: "/flooring",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
  },
  {
    title: "Carpets",
    description: "Soft, durable carpets in styles to suit every home.",
    href: "/carpets",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Furniture",
    description: "Stylish beds, dining sets, sofas, and more.",
    href: "/furniture",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
];

export const flooringTypes = [
  {
    title: "Luxury Vinyl Tile (LVT)",
    description:
      "Water-resistant, hard-wearing, and beautifully realistic. LVT is ideal for kitchens, bathrooms, and busy family areas where style meets practicality.",
    features: [
      "Water-resistant",
      "Realistic wood & stone effects",
      "Comfortable underfoot",
      "Easy to maintain",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Laminate Flooring",
    description:
      "A cost-effective way to achieve the look of real wood. Laminate offers excellent durability and a wide range of finishes for living rooms, hallways, and bedrooms.",
    features: [
      "Great value for money",
      "Scratch-resistant",
      "Quick to install",
      "Wide style range",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa0a6a3?w=800&q=80",
  },
  {
    title: "Vinyl Flooring",
    description:
      "Versatile, affordable, and available in countless designs. Sheet and plank vinyl options suit utility rooms, kitchens, and commercial spaces alike.",
    features: [
      "Budget-friendly",
      "Moisture resistant",
      "Comfortable & quiet",
      "Low maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Great Barr",
    rating: 5,
    quote:
      "Brilliant service from start to finish. The team helped us choose the perfect LVT for our kitchen and the fitting was immaculate. Couldn't recommend them more.",
  },
  {
    name: "James T.",
    location: "Sutton Coldfield",
    rating: 5,
    quote:
      "We had new carpets fitted throughout our home. Great quality, competitive price, and the fitters were professional and tidy. Will definitely be back for our next project.",
  },
  {
    name: "Priya K.",
    location: "Erdington",
    rating: 5,
    quote:
      "Visited the showroom and received honest, helpful advice — no hard sell. Found a beautiful laminate that looks just like real wood. Very happy with the result.",
  },
  {
    name: "David R.",
    location: "Kingstanding",
    rating: 5,
    quote:
      "Needed flooring for a rental property and they guided me to a durable, easy-care option within budget. Fitting was done on time and to a high standard.",
  },
  {
    name: "Emma L.",
    location: "Walsall",
    rating: 5,
    quote:
      "We bought a sofa and rug alongside our new carpet — the showroom has a lovely range and the staff made the whole experience easy and enjoyable.",
  },
  {
    name: "Michael B.",
    location: "Handsworth Wood",
    rating: 5,
    quote:
      "Professional fitting team, excellent communication, and a showroom full of quality products. Ambi Floors & Living is our go-to for flooring in Birmingham.",
  },
];

export const faqs = [
  {
    question: "Do you offer professional fitting?",
    answer:
      "Yes. We offer a full supply-and-fit service for carpets, LVT, laminate, and vinyl flooring. Our experienced fitters ensure a flawless finish in your home or business.",
  },
  {
    question: "How do I get a free quote?",
    answer:
      "Visit our showroom at 610 Walsall Road, Great Barr, call us on 0121 357 7089, or email info@ambifloorsliving.co.uk. We'll discuss your requirements and provide a no-obligation quote.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We serve Birmingham and the surrounding West Midlands area, including Great Barr, Sutton Coldfield, Erdington, Kingstanding, Walsall, and beyond. Contact us to confirm coverage for your location.",
  },
  {
    question: "Can I see samples in the showroom?",
    answer:
      "Absolutely. Our showroom displays a wide range of carpets, flooring, rugs, and furniture. You're welcome to browse at your leisure and take samples home to help with your decision.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most domestic installations are completed within a day, depending on the size of the area and type of flooring. We'll give you a clear timeframe when we provide your quote.",
  },
  {
    question: "Do you serve commercial customers?",
    answer:
      "Yes. We supply and fit flooring for offices, retail spaces, and other commercial properties. Get in touch to discuss your project requirements and receive a tailored quote.",
  },
  {
    question: "Do you sell rugs and furniture too?",
    answer:
      "Yes. Alongside our flooring ranges, we stock stylish rugs, beds, dining sets, and sofas — everything you need to complete your room transformation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash and card payments in store. Payment terms for supply-and-fit projects can be discussed when we provide your quote.",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    alt: "Modern living room with wood-effect flooring",
    category: "Flooring",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Elegant carpeted bedroom",
    category: "Carpets",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Luxury vinyl tile kitchen flooring",
    category: "LVT",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    alt: "Contemporary sofa in showroom setting",
    category: "Furniture",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa0a6a3?w=800&q=80",
    alt: "Laminate flooring in open-plan living area",
    category: "Flooring",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Stylish dining room interior",
    category: "Furniture",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Vinyl flooring in modern hallway",
    category: "Vinyl",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    alt: "Plush carpet in cosy living room",
    category: "Carpets",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Showroom display with flooring samples",
    category: "Showroom",
  },
];

export const pageMetadata = {
  home: {
    title: "Ambi Floors & Living | Flooring, Carpets & Furniture in Birmingham",
    description:
      "Visit our Great Barr showroom for premium carpets, LVT, laminate, vinyl flooring, rugs, and home furniture. Expert advice, professional fitting, and competitive prices across Birmingham and the West Midlands.",
  },
  about: {
    title: "About Us | Ambi Floors & Living",
    description:
      "Learn about Ambi Floors & Living — your trusted independent flooring and home interiors retailer in Great Barr, Birmingham.",
  },
  flooring: {
    title: "Flooring | LVT, Laminate & Vinyl | Ambi Floors & Living",
    description:
      "Explore our range of luxury vinyl tile, laminate, and vinyl flooring. Supply and professional fitting across Birmingham and the West Midlands.",
  },
  carpets: {
    title: "Carpets | Ambi Floors & Living Birmingham",
    description:
      "Quality carpets for every room. Soft, durable, and beautifully styled — with expert fitting from our Birmingham showroom.",
  },
  furniture: {
    title: "Furniture | Beds, Dining & Sofas | Ambi Floors & Living",
    description:
      "Stylish home furniture including beds, dining sets, and sofas. Complete your room transformation at our Great Barr showroom.",
  },
  gallery: {
    title: "Gallery | Ambi Floors & Living",
    description:
      "Browse our gallery of flooring, carpets, and furniture inspiration from Ambi Floors & Living.",
  },
  testimonials: {
    title: "Testimonials | Ambi Floors & Living",
    description:
      "Read what our customers say about Ambi Floors & Living — expert advice, quality products, and professional fitting in Birmingham.",
  },
  faq: {
    title: "FAQs | Ambi Floors & Living",
    description:
      "Frequently asked questions about our flooring, carpets, furniture, fitting services, and showroom in Great Barr, Birmingham.",
  },
  contact: {
    title: "Contact Us | Ambi Floors & Living",
    description:
      "Visit our showroom at 610 Walsall Road, Great Barr, Birmingham. Call 0121 357 7089 for expert advice and free quotes.",
  },
};
