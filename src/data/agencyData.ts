/**
 * =========================================================================
 * BADHAN AIR INTERNATIONAL TRAVELS - CONTENT & CONFIGURATION
 * =========================================================================
 * 
 * Non-technical owners can easily edit the information below.
 * Replace the bracketed placeholders [LIKE THIS] with your real details.
 * 
 * Changes here automatically update the entire website:
 * - Phone numbers & WhatsApp
 * - Office address & hours
 * - Agency licenses & credentials
 * - Service descriptions & pricing guidelines
 * =========================================================================
 */

export interface AgencyContactInfo {
  agencyName: string;
  tagline: string;
  shortDescription: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  emailPrimary: string;
  emailSecondary: string;
  officeAddress: string;
  cityCountry: string;
  operatingHours: string;
  emergencySupport: string;
  licenseRecruiting: string;
  licenseCivilAviation: string;
  licenseTrade: string;
  iataRegistration: string;
  customLogoUrl?: string; // Optional custom logo image URL or base64 data URL
  ownerName?: string;
  ownerTitle?: string;
  ownerPhone?: string;
  ownerWhatsApp?: string;
  ownerPhotoUrl?: string;
  ownerMessage?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortTitle: string;
  category: 'tickets' | 'visa' | 'manpower' | 'online';
  icon: string;
  summary: string;
  whatYouReceive: string[];
  requiredDocuments: string[];
  stepByStep: { step: number; title: string; desc: string }[];
  highlightBadge?: string;
  pricingNote: string;
}

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  destinationCountry: string;
  airlines: string[];
  flightType: 'International' | 'Domestic';
  estimatedStartingFare: string;
  popularFor: 'Work & Employment' | 'Tourism & Family' | 'Business & Student';
}

export interface VisaDestination {
  id: string;
  country: string;
  flagCode: string;
  visaTypes: string[];
  processingTime: string;
  requirementsSummary: string;
  popularity: string;
}

export interface JobCategory {
  id: string;
  title: string;
  countries: string[];
  experienceLevel: string;
  demandStatus: 'High Demand' | 'Immediate Vacancy' | 'Ongoing Intake';
  description: string;
  requirements: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  destination: string;
  serviceUsed: string;
  quote: string;
  year: string;
  verified: boolean;
}

// =========================================================================
// AGENCY CONTACT INFORMATION & PLACEHOLDERS
// (Edit these values to reflect your actual agency data)
// =========================================================================
export const agencyContact: AgencyContactInfo = {
  agencyName: 'Badhan Air International Travels',
  tagline: 'Your Trusted Gateway for Worldwide Flights, Visas & Overseas Employment',
  shortDescription: 'We provide genuine airline ticketing, transparent visa processing, government-approved manpower recruitment, and complete online travel assistance for workers, students, and travelers.',
  
  // Contact phone numbers - verified owner WhatsApp
  phonePrimary: '+880 1711-444699',
  phoneSecondary: '01711444699',
  whatsappNumber: '8801711444699', // Real WhatsApp: 01711444699
  whatsappDisplay: '01711444699',
  
  // Email addresses
  emailPrimary: 'kabirbadhan@gmail.com', // Active contact email
  emailSecondary: 'info@badhanairtravels.com', // [Replace with Agency Domain Email]
  
  // Physical office address
  officeAddress: '[Suite 402, Green Tower, Motijheel / Airport Road]', // [Replace with your street address]
  cityCountry: '[Dhaka - 1000, Bangladesh]', // [Replace with city and country]
  
  // Business hours
  operatingHours: 'Saturday to Thursday: 9:00 AM - 8:00 PM',
  emergencySupport: '24/7 Urgent Ticket Reissue & WhatsApp Support',
  
  // Official Government Licenses & IDs (Placeholders for non-technical owner to update)
  licenseRecruiting: '[RL-XXXX / BMET Approved]', // [Recruiting License No. for Manpower]
  licenseCivilAviation: '[CIVIL-AV-REG-202X-XXXX]', // [Civil Aviation Travel Agency Reg No.]
  licenseTrade: '[TRAD/DNCC/XXXXX/202X]', // [Municipal Trade License No.]
  iataRegistration: '[IATA Numeric Code: XX-X XXXXX X / Partner]', // [IATA / Agency Code]
  customLogoUrl: '/assets/aistudio/logo_copy_757ea872.png',
  ownerName: 'কবির আহমেদ ভূঁইয়া',
  ownerTitle: 'চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক',
  ownerPhone: '01711-444699',
  ownerWhatsApp: '01711444699',
  ownerPhotoUrl: '/assets/aistudio/01711444699_Kabir_bfeb9b0e.jpg',
  ownerMessage: 'আমাদের লক্ষ্য হলো প্রতিটি প্রবাসগামী ভাই-বোন ও ভ্রমণকারীর জন্য শতভাগ সততা, নির্ভরযোগ্যতা ও বৈধ ট্রাভেল সেবা নিশ্চিত করা। যেকোনো প্রয়োজনে সরাসরি আমার সাথে যোগাযোগ করতে পারেন।',
};

// =========================================================================
// SERVICES DETAILS
// =========================================================================
export const servicesList: ServiceDetail[] = [
  {
    id: 'air-ticket-booking',
    title: 'Air Ticket Booking (Domestic & International)',
    shortTitle: 'Air Ticketing',
    category: 'tickets',
    icon: 'Plane',
    summary: 'Best fares on all leading international and domestic carriers with instant PNR confirmation, group discounts for overseas workers, and dedicated date change assistance.',
    whatYouReceive: [
      'Instant e-ticket issuance with verified airline PNR',
      'Exclusive group flight discounts for overseas workers & families',
      'Custom baggage allowance guidance & extra baggage pre-booking',
      '24/7 ticket reissue, route modification, and cancellation handling',
      'Direct partnerships with Biman Bangladesh, Saudia, Emirates, Qatar, flydubai, Air Arabia, Kuwait Airways, and domestic carriers'
    ],
    requiredDocuments: [
      'Valid passport copy (minimum 6 months validity)',
      'Intended travel date(s) and destination airport',
      'Valid entry visa copy (for international departures)',
      'BMET Emigration Smart Card (for overseas employment passengers)'
    ],
    stepByStep: [
      { step: 1, title: 'Share Travel Itinerary', desc: 'Tell us your departure date, origin, and destination via phone, WhatsApp, or our online form.' },
      { step: 2, title: 'Compare Airline Quotes', desc: 'We present the best flight schedules, luggage limits, and lowest available prices.' },
      { step: 3, title: 'Confirm & Receive E-Ticket', desc: 'Secure payment via bank or mobile banking; receive your confirmed official e-ticket within minutes.' }
    ],
    highlightBadge: 'Lowest Available Fares',
    pricingNote: 'Transparent pricing with zero hidden booking surcharges.'
  },
  {
    id: 'visa-processing',
    title: 'Visa Processing & Embassy Assistance',
    shortTitle: 'Visa Processing',
    category: 'visa',
    icon: 'FileCheck',
    summary: 'End-to-end visa consultation for tourist, work permit, student, business, and family visit visas with complete document attestation and biometric scheduling.',
    whatYouReceive: [
      'Professional assessment of your visa eligibility and travel profile',
      'Step-by-step document preparation, translation, and attestation',
      'Biometric appointment booking (VFS Global, Tasheel, Embassy centers)',
      'Embassy fee payment and application submission tracking',
      'Pre-interview guidance for student and European/UK visas'
    ],
    requiredDocuments: [
      'Original passport with at least 6 months validity & blank pages',
      'Recent passport-sized photographs (as per embassy specifications)',
      'National ID / Birth Certificate',
      'Bank statement & solvency certificate (for tourist/student visas)',
      'Work contract / employer invitation / university offer letter (if applicable)',
      'Police clearance certificate (for work & long-term visas)'
    ],
    stepByStep: [
      { step: 1, title: 'Document Assessment', desc: 'Bring or send your documents for our expert verification against official embassy checklists.' },
      { step: 2, title: 'Filing & Biometrics', desc: 'We complete embassy forms, pay consular fees, and schedule your biometric/fingerprint slot.' },
      { step: 3, title: 'Visa Delivery', desc: 'We track your status continuously and deliver your stamped passport or e-visa promptly.' }
    ],
    highlightBadge: 'High Approval Record',
    pricingNote: 'Embassy fees charged at exact official rates plus clear service fee.'
  },
  {
    id: 'manpower-employment',
    title: 'Manpower & Overseas Employment Services',
    shortTitle: 'Overseas Employment',
    category: 'manpower',
    icon: 'Users',
    summary: 'Connecting skilled, semi-skilled, and general workers with verified employers across the Middle East, Southeast Asia, and Europe in strict compliance with government regulations.',
    whatYouReceive: [
      'Genuine overseas job openings verified directly with legal overseas employers',
      'BMET (Bureau of Manpower, Employment and Training) clearance processing',
      'GAMCA and approved medical checkup coordination',
      'Contract transparency: exact salary, accommodation, food, and working hours verified before departure',
      'Pre-departure orientation & airport immigration briefing so you travel safely and with confidence'
    ],
    requiredDocuments: [
      'Original passport (minimum 1-2 years validity recommended)',
      'National ID card and family details',
      'Educational certificates or trade/technical skill certificates (if applicable)',
      'Police Clearance Certificate verified by Ministry of Foreign Affairs',
      'GAMCA Medical Fitness Certificate from approved medical center',
      'Passport size photos with white background'
    ],
    stepByStep: [
      { step: 1, title: 'Job Matching & Interview', desc: 'Select an available foreign vacancy matching your skills and attend employer trade tests/interviews.' },
      { step: 2, title: 'Medical & Visa Clearance', desc: 'Complete certified medical checkups, contract signing, and visa issuance.' },
      { step: 3, title: 'BMET Smart Card & Flight', desc: 'Obtain government emigration clearance (Smart Card), air ticket, and depart with peace of mind.' }
    ],
    highlightBadge: 'Safe & Legal Migration',
    pricingNote: 'Full compliance with government emigration guidelines and zero hidden deductions.'
  },
  {
    id: 'online-travel-services',
    title: 'Online Services for Overseas Work & Travel',
    shortTitle: 'Online Services',
    category: 'online',
    icon: 'Globe',
    summary: 'Fast digital solutions for passport renewals, official visa verification, BMET smart card applications, travel insurance, and international hotel reservations.',
    whatYouReceive: [
      'E-Passport online application and urgent renewal support',
      'Official visa validity verification (MOFA, Muqeem, Absher, VDR portals)',
      'BMET Emigration Clearance Smart Card processing assistance',
      'Comprehensive overseas travel and medical insurance policies',
      'International hotel booking vouchers & airport meet-and-assist services',
      'Notary public and Ministry of Foreign Affairs (MOFA) document attestation'
    ],
    requiredDocuments: [
      'Scanned copy of existing passport / National ID',
      'Visa copy or visa application reference number for online verification',
      'Medical fitness report or employer demand letter (for BMET processing)'
    ],
    stepByStep: [
      { step: 1, title: 'Submit Digital Request', desc: 'Send your requirements and document photos via WhatsApp, email, or our website.' },
      { step: 2, title: 'Quick Processing', desc: 'Our online team verifies and processes your paperwork through official government and embassy portals.' },
      { step: 3, title: 'Digital Delivery', desc: 'Receive your verified documents, insurance policy, or smart card receipt digitally and by courier.' }
    ],
    highlightBadge: 'Fast Turnaround',
    pricingNote: 'Affordable, transparent service charges per application.'
  }
];

// =========================================================================
// POPULAR FLIGHT ROUTES (Quick booking reference)
// =========================================================================
export const popularRoutes: PopularRoute[] = [
  {
    id: 'dha-dxb',
    from: 'Dhaka (DAC)',
    to: 'Dubai (DXB)',
    destinationCountry: 'United Arab Emirates',
    airlines: ['Emirates', 'flydubai', 'Biman Bangladesh', 'US-Bangla'],
    flightType: 'International',
    estimatedStartingFare: 'BDT 42,000 / $360',
    popularFor: 'Work & Employment'
  },
  {
    id: 'dha-jed',
    from: 'Dhaka (DAC)',
    to: 'Jeddah (JED)',
    destinationCountry: 'Saudi Arabia',
    airlines: ['Saudia', 'Biman Bangladesh', 'Flynas'],
    flightType: 'International',
    estimatedStartingFare: 'BDT 55,000 / $470',
    popularFor: 'Work & Employment'
  },
  {
    id: 'dha-kul',
    from: 'Dhaka (DAC)',
    to: 'Kuala Lumpur (KUL)',
    destinationCountry: 'Malaysia',
    airlines: ['Malaysia Airlines', 'AirAsia', 'Biman Bangladesh', 'Batik Air'],
    flightType: 'International',
    estimatedStartingFare: 'BDT 35,000 / $300',
    popularFor: 'Work & Employment'
  },
  {
    id: 'dha-doh',
    from: 'Dhaka (DAC)',
    to: 'Doha (DOH)',
    destinationCountry: 'Qatar',
    airlines: ['Qatar Airways', 'Biman Bangladesh', 'US-Bangla'],
    flightType: 'International',
    estimatedStartingFare: 'BDT 46,000 / $395',
    popularFor: 'Work & Employment'
  },
  {
    id: 'dha-lhr',
    from: 'Dhaka (DAC)',
    to: 'London Heathrow (LHR)',
    destinationCountry: 'United Kingdom',
    airlines: ['Biman Bangladesh', 'Qatar Airways', 'Emirates', 'Saudia'],
    flightType: 'International',
    estimatedStartingFare: 'BDT 88,000 / $750',
    popularFor: 'Business & Student'
  },
  {
    id: 'dha-cxb',
    from: 'Dhaka (DAC)',
    to: "Cox's Bazar (CXB)",
    destinationCountry: 'Bangladesh (Domestic)',
    airlines: ['Biman Bangladesh', 'US-Bangla', 'Air Astra', 'Novoair'],
    flightType: 'Domestic',
    estimatedStartingFare: 'BDT 4,500 / $38',
    popularFor: 'Tourism & Family'
  }
];

// =========================================================================
// POPULAR VISA DESTINATIONS
// =========================================================================
export const visaDestinations: VisaDestination[] = [
  {
    id: 'saudi-arabia',
    country: 'Saudi Arabia',
    flagCode: 'SA',
    visaTypes: ['Work Visa', 'Umrah & Tourist Visa', 'Business Visa', 'Family Visit'],
    processingTime: '5 - 10 Working Days',
    requirementsSummary: 'Valid Passport, Medical (Gamca), Police Clearance, Attested Certificates, Photos',
    popularity: 'Highest Employment Destination'
  },
  {
    id: 'uae-dubai',
    country: 'United Arab Emirates (Dubai)',
    flagCode: 'AE',
    visaTypes: ['Employment Visa', '14/30/60 Days Tourist', 'Freelance / Green Visa'],
    processingTime: '3 - 7 Working Days',
    requirementsSummary: 'Passport copy, Color photo (white background), Sponsor/Employer agreement for work visa',
    popularity: 'Fastest Electronic Processing'
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    flagCode: 'MY',
    visaTypes: ['eNTRI / eVISA Tourist', 'Calling Visa (Employment)', 'Student Visa'],
    processingTime: '5 - 12 Working Days',
    requirementsSummary: 'Passport, Return Flight Ticket, Hotel Booking, Bank Statement (for tourist) or Calling Letter',
    popularity: 'Top Southeast Asia Choice'
  },
  {
    id: 'qatar',
    country: 'Qatar',
    flagCode: 'QA',
    visaTypes: ['Work Visa', 'Hayya / Tourist Visa', 'Family Residence Visa'],
    processingTime: '7 - 14 Working Days',
    requirementsSummary: 'Passport, Qatar Visa Center (QVC) appointment, Medical & Biometrics',
    popularity: 'High Skilled & Labor Demand'
  },
  {
    id: 'oman',
    country: 'Oman',
    flagCode: 'OM',
    visaTypes: ['Work Permit', 'Express Tourist Visa', 'Investor Visa'],
    processingTime: '4 - 8 Working Days',
    requirementsSummary: 'Passport, Police clearance, Approved labor clearance from Oman Ministry of Labour',
    popularity: 'Growing Employment Corridor'
  },
  {
    id: 'uk-europe',
    country: 'United Kingdom & Schengen',
    flagCode: 'GB',
    visaTypes: ['Standard Visitor Visa', 'Student Tier 4', 'Skilled Worker Visa'],
    processingTime: '15 - 25 Working Days',
    requirementsSummary: 'Passport, 6-Month Bank Solvency, Tax Returns, Employment / Student CAS letter, VFS Biometrics',
    popularity: 'Premier Student & Tourism Destination'
  }
];

// =========================================================================
// OVERSEAS JOB SECTORS (For Manpower Services)
// =========================================================================
export const overseasJobSectors: JobCategory[] = [
  {
    id: 'construction',
    title: 'Construction & Civil Engineering',
    countries: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait'],
    experienceLevel: 'Skilled & General Labor',
    demandStatus: 'High Demand',
    description: 'Electricians, Plumbers, Steel Fixers, Masons, Carpenters, Heavy Equipment Operators, and Site Foremen.',
    requirements: ['Minimum age 21', 'Basic trade experience', 'Medical fitness', 'Police clearance']
  },
  {
    id: 'driving-logistics',
    title: 'Professional Drivers & Logistics',
    countries: ['Saudi Arabia', 'UAE', 'Oman'],
    experienceLevel: 'Valid Driving License Holders',
    demandStatus: 'Immediate Vacancy',
    description: 'Heavy trailer drivers, medium truck operators, delivery van drivers, forklift operators, and warehouse storekeepers.',
    requirements: ['Valid domestic or Gulf driving license', 'Clean driving record', 'Medical clearance']
  },
  {
    id: 'hospitality-retail',
    title: 'Hospitality, Catering & Retail',
    countries: ['Dubai (UAE)', 'Saudi Arabia', 'Qatar', 'Malaysia'],
    experienceLevel: 'Entry to Experienced',
    demandStatus: 'High Demand',
    description: 'Chefs, Cook assistants, Food & Beverage stewards, Hotel housekeeping staff, Baristas, and Supermarket cashiers.',
    requirements: ['Basic English or Arabic conversational skills', 'Smart presentation', 'Customer service mindset']
  },
  {
    id: 'industrial-factory',
    title: 'Factory, Production & Garments',
    countries: ['Malaysia', 'Jordan', 'Romania', 'Mauritius'],
    experienceLevel: 'Trained & Semi-Skilled',
    demandStatus: 'Ongoing Intake',
    description: 'Machine operators, assembly line workers, quality checkers, packaging staff, and garment technicians.',
    requirements: ['Minimum 18 years', 'Physical endurance', 'Basic secondary education']
  }
];

// =========================================================================
// AUTHENTIC CLIENT TESTIMONIALS
// =========================================================================
export const clientTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Mohammad Rafiqul Islam',
    destination: 'Riyadh, Saudi Arabia',
    serviceUsed: 'Manpower Recruitment & Air Ticket',
    quote: 'Badhan Air arranged my overseas work permit and flight ticket with total honesty. They explained my contract clearly, handled my BMET smart card, and guided me until I safely landed at King Khalid Airport.',
    year: '2025',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Tanvir Ahmed & Family',
    destination: 'London, United Kingdom',
    serviceUsed: 'Tourist Visa & International Flight Tickets',
    quote: 'Our family needed urgent flight tickets and visa guidance during holiday rush. Badhan Air got us confirmed seats on Emirates at a rate significantly lower than other agents. Exceptional service!',
    year: '2026',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Shamim Hossain',
    destination: 'Kuala Lumpur, Malaysia',
    serviceUsed: 'Employment Visa Verification & Flight',
    quote: 'Before paying my overseas employer, Badhan Air verified my visa online and saved me from potential fraud. When confirmed, they booked my flight and arranged baggage support without hassle.',
    year: '2025',
    verified: true
  }
];

// =========================================================================
// FREQUENTLY ASKED QUESTIONS (Plain Language)
// =========================================================================
export const frequentlyAskedQuestions = [
  {
    question: 'How do I check if my flight ticket or visa is genuine?',
    answer: 'Every air ticket issued by Badhan Air comes with a direct Passenger Name Record (PNR) that you can verify yourself on the airline’s official website or app. For visas, we provide official government portal verification links (such as Saudi MOFA/Muqeem or Malaysia eVisa portal) so you can confirm approval directly with government immigration records.'
  },
  {
    question: 'What is required for overseas worker manpower clearance?',
    answer: 'To travel legally for overseas employment, you need a valid passport, authenticated employment visa/calling letter, approved GAMCA medical fitness certificate, and a BMET Emigration Smart Card. Our team assists with every single step of this government clearance process.'
  },
  {
    question: 'Can I change my flight date or cancel a ticket after booking?',
    answer: 'Yes. We provide 24/7 ticket reissue and cancellation services according to the specific airline’s fare rules. Simply contact our support team with your ticket PNR, and we will calculate the airline change fee and issue your updated itinerary immediately.'
  },
  {
    question: 'How long does visa processing take?',
    answer: 'Tourist e-visas (like Dubai or Malaysia) typically take 3 to 7 working days. Gulf employment visas take 7 to 14 days after medical and biometrics. UK, European, or student visas usually require 15 to 25 working days depending on embassy workload.'
  },
  {
    question: 'How can I pay for my tickets or services?',
    answer: 'We accept secure bank transfers, cash payments at our office, and popular mobile financial services (bKash, Nagad, etc.). You always receive an official stamped money receipt and electronic invoice.'
  }
];
