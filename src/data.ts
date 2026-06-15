import { Project, Tool, Service } from './types';

// Let's use direct asset path strings so TypeScript doesn't require module declaration definitions
const tobiHeadshot = '/src/assets/images/tobi_headshot_1781521029826.jpg';
const brandingProject = '/src/assets/images/branding_project_1781521046073.jpg';
const logoProject = '/src/assets/images/logo_project_1781521060540.jpg';

export const TOBI_HEADSHOT = tobiHeadshot;

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Paynest - FinTech Brand Identity',
    category: 'Brand Identity',
    image: '/paynest-02.jpg',
    description: 'A complete custom visual ecosystem, digital application design assets, and functional branding guidelines crafted for a frictionless P2P financial system.',
    objective: 'Construct a memorable visual language representing secure, fast digital payment handshakes and modern accessibility.',
    process: 'Structured clean futuristic layouts with deep violet and gold color schemes. Standardized the graphic guidelines across high-contrast templates to ensure flawless resolution on all devices.',
    result: 'Elevated client investor appeal and helped their core product establish instant authority, resulting in a successful seed funding round.',
    clientType: 'FinTech Startup'
  },
  {
    id: 'proj-2',
    title: 'Burger Hub - Gourmet Identity & Packaging',
    category: 'Packaging Design',
    image: '/Burger-01.jpg',
    description: 'Custom deli packaging wraps, bold carton lunchbox designs, and rustic-modern menu typography representing mouthwatering gourmet culinary crafts.',
    objective: 'Re-position an artisanal burger vendor to dominate the boutique fast-casual food sector through heavy visual contrast and distinctive packaging.',
    process: 'Formulated thick black alignment grids, playful vector branding stamps, and warm cardboard stock suggestions optimized for eco-friendly custom print vendors.',
    result: 'Substantially boosted brand recognition, with consumers enthusiastically sharing unboxing photos across active social media networks.',
    clientType: 'Gourmet Dine-in Restaurant'
  },
  {
    id: 'proj-3',
    title: 'Apex Studio - Minimalist Premium Stationery',
    category: 'Business Card Design',
    image: '/business card-03.jpg',
    description: 'Elegant dual-sided business cards emphasizing generous white space, bold structural lines, and blind-debossed layouts.',
    objective: 'Create a distinctive, premium tactile handshake asset that screams architectural precision and design confidence.',
    process: 'Curated sharp sans-serif typography, asymmetric grid layouts, and minimalist borders to establish ultimate professional authority.',
    result: 'Secured stellar first impressions at trade fairs, cementing premium client leads and strengthening corporate networking pipelines.',
    clientType: 'Creative Architecture Firm'
  },
  {
    id: 'proj-4',
    title: 'Shea Organics - Luxury Cosmetic Packaging',
    category: 'Packaging Design',
    image: '/shea-03.jpg',
    description: 'Sleek luxury jar labels and matte-finished boxes featuring soft pastel patterns, elegant monospacing, and organic branding details.',
    objective: 'Elevate an organic raw African cold-pressed shea cream brand to command premium boutique shelf prices.',
    process: 'Skeletal vector frames, clean serif header details, and fine product labeling grids detailing premium organic certifications and natural ingredients.',
    result: 'Assisted the brand in locking down shelf spaces in high-end stores within three months of packaging deployment.',
    clientType: 'Organic Beauty Boutique'
  },
  {
    id: 'proj-5',
    title: 'CR7 - Dynamic Vector Motion Poster',
    category: 'Illustration',
    image: '/RONALDO-01.jpg',
    description: 'A striking vector motion-path tribute illustration celebrating the monumental career and athletic stance of Cristiano Ronaldo.',
    objective: 'Illustrate dynamic athletic energy through geometric light flows and custom vector curves.',
    process: 'Hand-guided thousands of premium bezier curves in Illustrator, overlaying glowing red-to-blue gradient waves on a dark space canvas.',
    result: 'Shared widely across sports portfolios, accumulating thousands of likes and leading to custom illustration licenses.',
    clientType: 'Digital Art Collectors'
  },
  {
    id: 'proj-6',
    title: 'Blue Horizon - Marine Biodiversity Poster',
    category: 'Poster Design',
    image: '/sea   nature design-01.jpg',
    description: 'Vibrant flat-style environmental design showcasing rich sea life silhouettes and aquatic typography raising conservation awareness.',
    objective: 'Formulate an eye-catching, educational poster to inspire community action toward ocean and coral preservation.',
    process: 'Harmonized smooth organic vectors with deep ocean blue gradients, framing the central elements with clean, modern metadata labels.',
    result: 'Displayed in prominent municipal exhibit spaces, successfully expanding community participation in local environmental campaigns.',
    clientType: 'Environmental NGO'
  },
  {
    id: 'proj-7',
    title: 'Sonic Wave - Premium Headphone Flyer',
    category: 'Flyer Design',
    image: '/headphone-01.jpg',
    description: 'High-contrast commercial product launch flyer featuring high-definition product lighting and clean technical descriptors.',
    objective: 'Design a highly engaging, converting promo flyer to accelerate pre-orders for newly engineered studio headphones.',
    process: 'Engineered a dramatic backlight style with vibrant red and blue neon glow highlights, structuring features into scannable lists.',
    result: 'Achieved an outstanding conversion rate in pre-order signups across regional email distributions and retail partner flyers.',
    clientType: 'Consumer Tech Manufacturer'
  },
  {
    id: 'proj-8',
    title: 'Childish Gambino - Music Header Banner',
    category: 'Banner Design',
    image: '/gambino-01.jpg',
    description: 'Sophisticated editorial banner matching deep artistic textures with bold swiss-aligned typographic hierarchies.',
    objective: 'Create an expressive digital header celebrating musical artistry and editorial design philosophies.',
    process: 'Layered rich photo filters with offset modern text blocks to compose an unforgettable visual tone for digital platforms.',
    result: 'Boosted reader engagement on music blogs, lengthening first-impression viewer focus and interactions.',
    clientType: 'Culture Editorial Outlet'
  },
  {
    id: 'proj-9',
    title: 'Outpost Offroad - Trail Adventure Social Kit',
    category: 'Social Media Design',
    image: '/Jeep-01.jpg',
    description: 'Adventurous high-energy social grid templates, custom adventure flyers, and postcards designed for extreme vehicle convoy outings.',
    objective: 'Draft captivating templates to drive club memberships and accelerate weekend trail registration signups.',
    process: 'Juxtaposed rugged vehicle graphics with bright neon borders and slanted typography frames to convey action and motion.',
    result: 'Achieved a sold-out record in under 48 hours, maximizing vehicle convoy spots across all channels.',
    clientType: 'Premium Automotive Club'
  },
  {
    id: 'proj-10',
    title: 'Mamba Mentality - Memorial Art Poster',
    category: 'Poster Design',
    image: '/kobe [Recovered]1234-01.jpg',
    description: 'Limited-edition illustrative poster honoring the legacy of Kobe Bryant using halftone textures and elegant grid typography.',
    objective: 'Integrate historic action photography with symbolic modern layouts in a premium collectible artwork format.',
    process: 'Combined purple-gold halftone dots with geometric line weights to form a respectful, timeless design.',
    result: 'Widely praised on global design boards and distributed to premium youth sports venues.',
    clientType: 'Sports Foundation'
  },
  {
    id: 'proj-11',
    title: 'La Femme - Luxe Cosmetics Social Collection',
    category: 'Social Media Design',
    image: '/lady-01.jpg',
    description: 'Editorial slide graphics emphasizing premium aesthetics, high negative space, and modern serif typography.',
    objective: 'Create stunning templates to strengthen premium skincare position on modern social feeds.',
    process: 'Crafted delicate borders, muted earth tones, and precise typographic tracking to ensure a sleek and expensive visual tone.',
    result: 'Generated a significant uptick in high-value e-commerce checkout paths from Instagram and Pinterest links.',
    clientType: 'Luxury Skincare Boutique'
  },
  {
    id: 'proj-12',
    title: 'Geometric Symbology - Modern Logotype Suite',
    category: 'Logo Design',
    image: '/logo design.png',
    description: 'A pristine showcase of responsive corporate logomarks engineered with absolute grid precision.',
    objective: 'Demonstrate perfect brand legibility and scaling across extreme dimensions, from favicon scales to giant banners.',
    process: 'Iterated through dozens of circular geometric grid constraints to lock down iconic balances with sharp visual appeal.',
    result: 'Approved and trademarked seamlessly, providing a robust symbolic identity foundation for the clients.',
    clientType: 'SaaS Startup Incubator'
  },
  {
    id: 'proj-13',
    title: 'Tribal Roots - Textured Cultural Art',
    category: 'Illustration',
    image: '/native-01.jpg',
    description: 'A warm, textured illustration celebrating rich traditional cultural heritage motifs and artisanal organic gradients.',
    objective: 'Deliver an expressive, high-fidelity hero graphic for cultural collections and editorial articles.',
    process: 'Hand-detailed layered vectors and incorporated premium paper textures to radiate handmade warmth and organic beauty.',
    result: 'Honored as the cover illustration for a regional creative review, driving physical collector edition sales.',
    clientType: 'Cultural Arts Center'
  },
  {
    id: 'proj-14',
    title: 'EduTech Mascot - Character Logo Design',
    category: 'Logo Design',
    image: '/cartoon face-01.jpg',
    description: 'Approachable, warm vector cartoon mascot icon built with friendly smiles and smooth bezier curves.',
    objective: 'Design an inspiring and friendly brand mascot to personalize learning software and lower user hesitation.',
    process: 'Fleshed out circular shapes, colorful gradients, and expressive vector paths optimized for digital application screens.',
    result: 'Adopted as the core interface guide, contributing to higher student onboarding retention rates.',
    clientType: 'EdTech Learning Platform'
  },
  {
    id: 'proj-15',
    title: 'Msaaaa - Creative Portraiture Style Guide',
    category: 'Brand Identity',
    image: '/msaaaa-01.jpg',
    description: 'Ultra-clean typographic layout guidelines and branding handbook for luxurious profile photography packages.',
    objective: 'Conceive a stark branding style manual that supports high-profile photographs without adding cognitive clutter.',
    process: 'Coupled generous negative space with crisp thin frames, elegant black-white contrasts, and monospaced technical grids.',
    result: 'Successfully supported a boutique pricing transition, establishing a premium visual presence for the studio.',
    clientType: 'Luxury Portrait Studio'
  }
];

export const SKILL_PERCENTAGES = [
  { name: 'Brand Strategy & Identity', percentage: 98 },
  { name: 'Logo Design & Typography', percentage: 96 },
  { name: 'Packaging & Print Materials', percentage: 92 },
  { name: 'Social Media & Marketing Collateral', percentage: 95 },
  { name: 'Vector Illustration & Posters', percentage: 89 },
];

export const TOOLS: Tool[] = [
  { name: 'Adobe Photoshop', level: 98, iconName: 'photoshop', category: 'design' },
  { name: 'Adobe Illustrator', level: 96, iconName: 'illustrator', category: 'design' },
  { name: 'Canva Pro', level: 90, iconName: 'canva', category: 'core' },
  { name: 'Figma', level: 88, iconName: 'figma', category: 'prototyping' },
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Logo Design',
    description: 'A custom, memorable emblem designed to be clean, iconic, and scalable. Built with mathematical precision of geometry to work beautifully anywhere from a tiny favicon to huge billboards.',
    features: ['3 Unique Initial Concepts', 'Mathematical Grid Construction', 'Full Vector Formats (AI, EPS, SVG, PDF)', 'Black/White & Color Variations', 'Full Copyright Ownership Transfer']
  },
  {
    id: 'srv-2',
    title: 'Branding & Identity',
    description: 'A comprehensive visual ecosystem tailored to establish premium credibility for your business. Align your colors, fonts, voice, and layout assets to tell a high-trust, cohesive brand story.',
    features: ['Custom Logo Lockups', 'Premium Color Palette & Typography Guidelines', 'Extended Visual Assets Guidelines', 'Creative Direction Briefing', 'Durable Branding Guide PDF']
  },
  {
    id: 'srv-3',
    title: 'Social Media Design',
    description: 'Thumb-stopping, professional social graphics designed to match premium identity standards. Drive high audience interaction, click-through-rates, and brand presence on social media.',
    features: ['High-converting Canva templates', 'Instagram Grid/Stories templates', 'LinkedIn and YouTube Banner sets', 'Content Structure & Highlight covers', 'Post layouts optimized for conversion']
  },
  {
    id: 'srv-4',
    title: 'Flyers & Posters',
    description: 'Visually dramatic physical or print collateral designed with perfect visual balance to sell tickets, fill occupancy targets, promote high-end products, or celebrate cultural events.',
    features: ['Print-ready (300 DPI, CMYK with crop marks)', 'Aesthetic Typographic layout', 'Curated custom graphics/illustrations', 'Unlimited revisions', 'Digital distribution versions']
  },
  {
    id: 'srv-5',
    title: 'Packaging Design',
    description: 'Luxury packaging built to fascinate consumers at first glance. Elegant structures, thoughtful geometries, premium stock choices, and tactile finishes that justify a premium product price.',
    features: ['Dieline alignment modeling', '3D Photorealistic product renders', 'Bespoke high-end typography selections', 'FDA-compliant layout templates', 'Eco-friendly material consults']
  },
  {
    id: 'srv-6',
    title: 'Business Cards & Banners',
    description: 'Physical marketing items, stationeries, and high-visibility digital web banners crafted to command respect. Designed to ensure memorable, premium physical and visual handshakes.',
    features: ['Ultra-premium material consults', 'Blind deboss or Hot Foil accent setups', 'Meticulous margin & grid lines', 'Ready-to-print vector layers', 'Web banners in all standard dimensions']
  }
];

export const TRUST_PARTNERS = [
  { name: 'Vortex Global', logoText: 'VORTEX' },
  { name: 'Lumina Tech', logoText: 'LUMINA' },
  { name: 'Aura Skincare', logoText: 'AURA' },
  { name: 'Axiom Law', logoText: 'AXIOM' },
  { name: 'Zenith Crypt', logoText: 'ZENITH' },
  { name: 'Apex Group', logoText: 'APEX' },
];
