export interface ServiceItem {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  image: string;
  benefits: string[];
}

export interface ReviewItem {
  name: string;
  text: string;
  date: string;
}

export interface TrustItem {
  title: string;
  description: string;
  iconName: 'clock' | 'shield' | 'leaf';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COMPANY = {
  name: 'Jaguar Services INC',
  phone: '(770) 856-0217',
  phoneHref: 'tel:+17708560217',
  whatsappNumber: '17708560217',
  whatsappHref: 'https://wa.me/17708560217',
  email: 'jaguarservicesinc@gmail.com',
  address: '620 Lynchburg St, Hampton, GA 30228',
  area: 'Hampton, GA · Serving Metro Atlanta',
  tagline: "ATLANTA'S PREMIER CARPET CARE",
  copyright: '© 2026 Jaguar Services INC. All rights reserved.',
  badge: 'Licensed · Insured · Locally Owned',
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services', isDropdown: true },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact Us', path: '/contact-us' },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: 'carpet-cleaning-stretching',
    title: 'Carpet Cleaning & Stretching',
    eyebrow: 'Revive your floors',
    summary: 'Deep extraction and precision stretching for cleaner, safer, longer-lasting carpets.',
    body: [
      'Over time, even the highest quality carpets face the inevitable wear of daily life, from deep-seated allergens and stubborn stains to unsightly ripples and bunches. At Jaguar Services INC, we provide a dual-action approach to carpet care that goes far beyond a simple surface vacuum.',
      'Our professional deep-cleaning process uses advanced extraction technology to lift embedded dirt and bacteria, improve indoor air quality, and restore the original vibrance of your fibers. Our precision stretching eliminates hazardous trips and eyesores while protecting your flooring investment.',
    ],
    image: '/assets/carpet-CCNUCPve.jpg',
    benefits: ['Deep soil extraction', 'Ripple and buckle removal', 'Healthier indoor environment'],
  },
  {
    slug: 'water-damage-restoration',
    title: 'Water Damage & Restoration',
    eyebrow: 'Immediate response',
    summary: 'Fast extraction, structural drying, and cleanup after leaks, appliance failures, or flooding.',
    body: [
      'When water enters your home or business, every second counts. Water quickly seeps into drywall, insulation, and flooring, compromising structural integrity and creating a breeding ground for mold.',
      'Our rapid-response team handles water emergencies of all sizes with industrial-grade extraction pumps and high-velocity air movers. We remove standing water and hidden moisture, then stabilize your space with a comprehensive start-to-finish restoration plan.',
    ],
    image: '/assets/storm-DmT9oA2r.jpg',
    benefits: ['Rapid water extraction', 'Professional structural drying', 'Complete cleanup and stabilization'],
  },
  {
    slug: 'upholstery-cleaning',
    title: 'Upholstery Cleaning',
    eyebrow: 'Refresh your furniture',
    summary: 'Specialized low-moisture care removes oils, allergens, dirt, and stubborn odors from fine fabrics.',
    body: [
      'Your furniture is one of the most used features in your home, acting as a magnet for dust, oils, and everyday allergens. Over time, these particles settle deep into fabric, dulling colors and causing fibers to break down prematurely.',
      'Our gentle yet effective extraction methods are designed for a wide variety of fabrics. We remove deep-seated dirt without compromising the material, creating a cleaner environment and extending the life of your upholstered investment.',
    ],
    image: '/assets/interior-DXK03ihY.jpg',
    benefits: ['Fabric-safe extraction', 'Odor and allergen removal', 'Color and texture renewal'],
  },
  {
    slug: 'storm-damage-restoration',
    title: 'Storm Damage Restoration',
    eyebrow: 'Rapid recovery',
    summary: 'Urgent stabilization and thoughtful recovery after Georgia’s toughest wind and rain events.',
    body: [
      'When severe weather strikes, the aftermath can leave your property vulnerable to structural instability and long-term environmental hazards. We provide the urgent response needed to stabilize your home or business.',
      'From debris removal and structural boarding to detailed inspections, our team identifies hidden vulnerabilities and builds a meticulous restoration plan that prevents secondary issues such as rot and persistent leaks.',
    ],
    image: '/assets/storm-DmT9oA2r.jpg',
    benefits: ['Urgent property stabilization', 'Debris removal and boarding', 'Detailed damage inspection'],
  },
  {
    slug: 'mold-remediation-repair',
    title: 'Mold Remediation & Repair',
    eyebrow: 'Protect your property',
    summary: 'Professional detection, containment, treatment, and repair for a safe, breathable space.',
    body: [
      'Mold is more than an aesthetic issue; it threatens structural integrity and personal health. It often spreads behind drywall, under flooring, or within crawlspaces long before it becomes visible.',
      'Our process uses advanced moisture detection to identify the source, professional containment to prevent spread, and industry-grade antimicrobial treatments to eliminate growth. We then complete the repairs needed to restore your property.',
    ],
    image: '/assets/mold-Ck0aW58F.jpg',
    benefits: ['Moisture-source detection', 'Professional containment', 'Remediation and repair'],
  },
  {
    slug: 'restretching-dyeing',
    title: 'Restretching & Dyeing',
    eyebrow: 'Restore, don’t replace',
    summary: 'Correct ripples, faded areas, bleach spots, and loose carpet with precision restoration.',
    body: [
      'If your carpets have developed ripples or faded patches, you may not need the high cost of replacement. Heavy traffic and humidity can loosen fibers, creating trip hazards and bubbles that diminish a room.',
      'We use professional power-stretching to return carpet to drum-tight tension, preventing premature backing wear. Specialized dyeing can correct permanent stains, bleach spots, or sun-faded areas that deep cleaning cannot reach.',
    ],
    image: '/assets/carpet-CCNUCPve.jpg',
    benefits: ['Power-stretching precision', 'Spot and color correction', 'Longer carpet lifespan'],
  },
  {
    slug: 'air-duct-cleaning',
    title: 'Air Duct Cleaning',
    eyebrow: 'Breathe cleaner air',
    summary: 'Clear dust, dander, pollen, and debris from ventilation systems for better air and efficiency.',
    body: [
      'Indoor air quality plays a critical role in the health and comfort of your family or employees. HVAC ductwork collects dust, pet dander, pollen, mold spores, and bacteria, then circulates those particles throughout the property.',
      'Our professional service uses high-powered vacuum technology and specialized brushes to clear years of accumulation. Cleaner ducts support fresher air, greater HVAC efficiency, and a more comfortable environment.',
    ],
    image: '/assets/duct-Bwb_mSzQ.jpg',
    benefits: ['High-powered vacuum cleaning', 'Reduced airborne debris', 'Improved HVAC efficiency'],
  },
  {
    slug: 'reliable-junk-removal',
    title: 'Reliable Junk Removal',
    eyebrow: 'Reclaim your space',
    summary: 'Efficient, responsible hauling for single items, cluttered rooms, and full property cleanouts.',
    body: [
      'Accumulated clutter can turn a functional home or business into an overwhelming environment. Whether you are handling years of attic storage, a chaotic garage, or renovation debris, our team offers a stress-free way to clear it.',
      'We handle the lifting, loading, and hauling without the strain of renting a dumpster. Flexible service ranges from single-item pickups to full estate cleanouts, always with respect for your property.',
    ],
    image: '/assets/junk-qrKTx1t6.jpg',
    benefits: ['Full-service lifting and hauling', 'Flexible cleanup sizes', 'Responsible, respectful removal'],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    name: 'Leanne Burnham',
    text: 'Highly recommend! They extracted so much hidden pet fur from nine rooms and two staircases. My husband no longer needed an inhaler from the pet fur that had been invisible.',
    date: 'Google Review',
  },
  {
    name: 'Nelly M',
    text: 'We have used this company a few times for carpet cleaning in different homes. They do a great job with reasonable prices.',
    date: 'Google Review',
  },
  {
    name: 'Dejuanna Sullivan',
    text: 'Love the flexibility and price. Fixing the carpet was the best part—it looked new! Easy to set up an appointment and talk to.',
    date: 'Google Review',
  },
  {
    name: 'Shakir Phillips',
    text: 'Customer service and work were five stars. I would strongly use his services again and recommend Jaguar for pristine carpet and floor restoration.',
    date: 'Google Review',
  },
  {
    name: 'Cathy Stinchcomb',
    text: 'A tremendous job—the carpet smells good, looks good, and the price was good. Professional and courteous.',
    date: 'Google Review',
  },
  {
    name: 'Marsha Bagley',
    text: 'Pricing was more than fair, scheduling was quick and seamless, and they kept me informed every step of the way.',
    date: 'Google Review',
  },
];

export const TRUST_PILLARS: TrustItem[] = [
  {
    title: 'Punctual & Reliable',
    description: 'On schedule, transparent, and respectful of your property.',
    iconName: 'clock',
  },
  {
    title: 'Certified Expertise',
    description: 'Licensed, insured, and equipped for professional results.',
    iconName: 'shield',
  },
  {
    title: 'Eco-Friendly Care',
    description: 'Non-toxic, pet-safe solutions without harsh residue.',
    iconName: 'leaf',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How long does it take for carpets to dry?',
    answer: 'On average, carpets take 4 to 8 hours to dry. Humidity, airflow, and carpet fiber can affect the timing.',
  },
  {
    question: 'Are your products safe for pets and children?',
    answer: 'Yes. We use eco-friendly, non-toxic solutions that are tough on stains and safe once the carpet is dry.',
  },
  {
    question: 'How often should carpets be professionally cleaned?',
    answer: 'Most homes benefit every 6 to 12 months, or every 4 to 6 months with pets, allergies, or high traffic.',
  },
];

export const GALLERY_IMAGES = [
  { src: '/assets/gallery-1-CYHe89v8.jpg', label: 'Project 01' },
  { src: '/assets/gallery-2-fcuJYmix.jpg', label: 'Project 02' },
  { src: '/assets/gallery-3-C4QqmFJW.jpg', label: 'Project 03' },
  { src: '/assets/gallery-4-DnuqYUKC.jpg', label: 'Project 04' },
  { src: '/assets/gallery-5-DsidGLXr.jpg', label: 'Project 05' },
  { src: '/assets/gallery-7-D8R76djL.jpg', label: 'Project 06' },
  { src: '/assets/gallery-8-BI7kw9j4.jpg', label: 'Project 07' },
];
