import { Program, TeamMember, ImpactStat, Testimonial, BlogItem, FAQ, DonationOption } from "./types";
// @ts-ignore
import mobilisationImg from "./assets/images/irving_food_mobilisation_1781907593945.jpg";

export const STATS: ImpactStat[] = [
  {
    label: "Meals Distributed",
    value: "250,000+",
    subtext: "Nutritious balanced meals delivered to Irving families since 2020",
    iconName: "Apple",
  },
  {
    label: "Families Supported",
    value: "12,500+",
    subtext: "Local households receiving dignity, items, and ongoing care",
    iconName: "Home",
  },
  {
    label: "Active Volunteers",
    value: "450+",
    subtext: "Selfless local residents dedicating time weekly",
    iconName: "Users",
  },
  {
    label: "Food Rescued",
    value: "180 Tons",
    subtext: "Safe food diverted from retail waste to hungry families",
    iconName: "TrendingUp",
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "pantry",
    title: "Food Pantry Assistance",
    shortDesc: "Weekly grocery bags with fresh greens, lean proteins, block milk, and pantry essentials.",
    fullDesc: "Our Food Pantry Assistance program ensures that Irving households do not have to choose between putting food on the table and paying rent. Once registered, families can visit our dignity pantry weekly to select nutritious items tailored to their dietary needs, including fresh produce, proteins, and dairy items.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    beneficiaries: "350+ Families Weekly"
  },
  {
    id: "emergency",
    title: "Emergency Food Relief",
    shortDesc: "Immediate raw and hot meal boxes for individuals experiencing fire, displacement, or sudden crisis.",
    fullDesc: "When disaster strikes, nourishment cannot wait. Our Emergency Food Relief program delivers survival ration kits and hot ready-to-eat meals directly to families impacted by fire, immediate displacement, job loss, or sudden medical emergencies in Irving, TX.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
    beneficiaries: "20+ Rapid responses daily"
  },
  {
    id: "drives",
    title: "Community Food Drives",
    shortDesc: "We mobilize Irving schools, businesses, and faith spaces to collect non-perishables and expand supplies.",
    fullDesc: "Strength lies in neighborhood unity. We collaborate year-round with Irving organizations, retail outlets, primary schools, and churches to establish neighborhood food collection points. These drives build civic awareness and replenish critical shelves.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600",
    beneficiaries: "15+ annual Irving collection cycles"
  },
  {
    id: "seniors",
    title: "Senior Support Programs",
    shortDesc: "Custom home deliveries and nutritional counseling for elder, non-ambulatory local citizens.",
    fullDesc: "Mobility barriers must not lead to isolation or malnutrition. Our volunteers package soft, easily chewable, and sodium-conscious foods, personally delivering them to elder Irving and DFW seniors. These weekly check-ins provide vital companionship.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600",
    beneficiaries: "200+ Seniors Monthly"
  },
  {
    id: "families",
    title: "Family Assistance Programs",
    shortDesc: "Comprehensive hygiene boxes, nutritional baby infant milk, and school snack supplies.",
    fullDesc: "Providing for infants and children requires detailed care. Beyond traditional food boxes, this initiative offers baby formulas, diapers, school break snack bags, and hygiene packets (shampoo, toothpaste, tissue) to relieve direct home budgets.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600",
    beneficiaries: "450+ Underprivileged Children"
  },
  {
    id: "education",
    title: "Educational Outreach",
    shortDesc: "Workshops teaching families low-cost meal preparation, nutrition safety, and budget optimization.",
    fullDesc: "A sustainable path starts with education. We host bi-weekly community gatherings where professional nutritionists and volunteer cooks teach simple techniques to prepare robust, healthy meals using pantry items, guiding budgetary prudence and safety.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
    beneficiaries: "50+ Graduates Monthly"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "David Stenson",
    role: "Director & Founder",
    bio: "David founded GYFTS Rescue based on a simple promise: that no child or senior in Irving should sleep with an empty stomach.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Maria Rodriguez",
    role: "Pantry Coordinator",
    bio: "Maria oversees safe stock logistics, partner distributions, and nutritional variety of every pack coming from GYFTS Rescue.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Rev. Thomas Green",
    role: "Outreach Lead",
    bio: "Thomas coordinates community partnerships, senior delivery routes, and maintains relationships with local retail contributors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "When my husband lost his store, we had no savings left for food. GYFTS Rescue welcomed us with warmth, respect, and zero judgment. The food box helped my kids stay healthy.",
    author: "Elena R.",
    role: "Pantry Client",
    location: "Irving, TX"
  },
  {
    id: "2",
    quote: "Delivering grocery boxes to homebound seniors has changed my perspective completely. Getting to listen to their stories and bring nutrition makes volunteering so beautiful.",
    author: "James M.",
    role: "Active Volunteer",
    location: "Austin Hills, Irving"
  },
  {
    id: "3",
    quote: "GYFTS Rescue operates with maximum financial wisdom. When we see every dollar translated directly to fresh lettuce, tomatoes, and safety for families, we easily support them.",
    author: "Sarah L.",
    role: "Local Corporate Funder",
    location: "Valley Ranch, TX"
  }
];

export const BLOGS: BlogItem[] = [
  {
    id: "b1",
    title: "How Irving Neighborhoods Mobilized This Summer to Counter Hunger",
    summary: "A spectacular recap of our city-wide food collection and pantry storage expansions.",
    content: "This season has been warm, yet the hearts of families in Irving were warmer. Over fifteen school programs and local bakeries joined hands with GYFTS Rescue to donate non-perishables. Through community efforts, we loaded over 5 tons of staples, ensuring our pantry stands stocked for the upcoming school semester.",
    author: "David Stenson",
    date: "June 12, 2026",
    category: "Success Stories",
    image: mobilisationImg
  },
  {
    id: "b2",
    title: "Senior Home Delivery Network Doubles Route Capacity in Irving",
    summary: "Expanding delivery pathways to help more disabled elder adults reach organic nourishment.",
    content: "With help from a new van grant, we have established six new direct distribution pathways across Irving. Seniors who struggle to drive or have severe illness now receive soft, nutritional grocery items packed cleanly by our youth volunteers.",
    author: "Maria Rodriguez",
    date: "May 28, 2026",
    category: "News & Alerts",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "b3",
    title: "Interactive Cooking Workshop: Cooking Smartly on a Tiny Budget",
    summary: "Our educational Outreach program hosts a lively cooking demonstration sharing easy recipes.",
    content: "Dozens of mothers and single fathers gathered at local parks to learn safe, swift ways to cook canned lentils, dry beans, and turn standard box items into highly appetizing and low-sugar dishes for teenagers. High nutritional advice was a key element.",
    author: "Maria Rodriguez",
    date: "April 15, 2026",
    category: "Community Events",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Do I need complex paperwork to receive food pantry bags?",
    answer: "No, GYFTS Rescue prioritizes human dignity. Anyone experiencing immediate hunger or food scarcity is eligible. We ask basic questions about size of household and primary location to optimize our delivery, but no intrusive requirements apply."
  },
  {
    question: "Where does the rescued food come from?",
    answer: "We partner with local grocers, supermarkets, bakeries, corporate cafeterias, and Irving agricultural gardens. Safe, surplus, unblemished ingredients that might otherwise go unused are collected and immediate sorted."
  },
  {
    question: "Can I host a mini food drive in my business or street blocks?",
    answer: "Absolutely! We provide GYFTS Rescue cardboard drop boxes, flyer templates, and our cargo van can schedule a pickup once your bucket is full of non-perishable canned items."
  },
  {
    question: "Are monetary donations tax-deductible?",
    answer: "Yes. GYFTS Rescue is a registered nonprofit community rescue organization. Complete transaction history and tax receipts are sent automatically to your provided email address."
  },
  {
    question: "How are senior delivery boxes customized?",
    answer: "Our pantry coordinator adapts boxes to emphasize lower sodium goods, vitamin-packed ingredients, dairy options, and soft fruits and pasta, while taking account of severe allergy alerts."
  }
];

export const DONATION_OPTIONS: DonationOption[] = [
  {
    amount: 25,
    label: "Feed 1 Family",
    impactText: "Provides a full pantry grocery basket for 1 local Irving family for a week."
  },
  {
    amount: 50,
    label: "Feed 2 Families",
    impactText: "Delivers two loaded boxes containing fresh veggies, dairy, proteins, and pantry essentials."
  },
  {
    amount: 100,
    label: "Emergency Support",
    impactText: "Feeds 5 families or funds rapid response items for local disaster-relief kits."
  },
  {
    amount: 250,
    label: "Community Partner",
    impactText: "Sponsors senior delivery packages for a month, including medicine drop companion runs."
  }
];
