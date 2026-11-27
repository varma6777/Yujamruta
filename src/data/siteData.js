// Site Data & Configuration for YUJAMRUTHA
// All contact information, pricing, schedules, and products are easily editable here.

export const BRAND_INFO = {
  name: "YUJAMRUTHA",
  kannadaName: "ಯುಜಾಮೃತ",
  tagline: "Balance Your Body. Calm Your Mind. Transform Your Life.",
  subtitle: "Yoga | Organic Honey | Good Health",
  nameMeaning: "YUJ means Yoga • AMRUTHA means Honey",
  yujMeaning: "YUJ (ಯುಜ್) means Yoga — mindful movement, breath control, and inner balance.",
  amruthaMeaning: "AMRUTHA (ಅಮೃತ) means Honey — 100% pure raw nectar for health and natural longevity.",
  phone: "+91 98807 81965",
  rawPhone: "919880781965",
  email: "yujamrutha.wellness@gmail.com",
  address: "Kotikoppa, Araga Post, Thirthahalli Taluk, Shivamogga District, Karnataka – 577414",
  mapCoordinates: "13.6938° N, 75.2447° E (Thirthahalli, Western Ghats)",
  hours: "Monday – Saturday: 6:00 AM – 7:30 PM",
  socials: {
    instagram: "https://instagram.com/yujamrutha",
    facebook: "https://facebook.com/yujamrutha",
    youtube: "https://youtube.com/@yujamrutha",
    whatsapp: "https://wa.me/919880781965"
  }
};

export const YOGA_CLASS_DETAILS = {
  mode: "Online Classes (Interactive Live Video)",
  timing: "6:30 AM – 7:30 AM (IST)",
  schedule: "5 Days a Week (Monday to Friday)",
  duration: "1 Hour per Session",
  registrationFee: "₹500 (One-time Admission)",
  monthlyFee: "₹400 / month",
  level: "Beginner to Advanced (Personalized Guidance)",
  language: "Kannada, English & Hindi Support"
};

export const INSTRUCTOR_PROFILE = {
  name: "Abhinandan K K",
  role: "Lead Yoga Acharya & Founder",
  bio: "Abhinandan K K is an accomplished yogic practitioner and passionate instructor dedicated to preserving traditional Indian wellness science. Having completed formal Yogic Instructor Certification from SVYASA Yoga University (Bangalore), he has represented at All India and South Zone yoga championship circuits. His teaching merges traditional Hatha foundations with scientific anatomical alignment, mindful breathwork (Pranayama), and restorative therapy.",
  achievements: [
    { title: "YIC Completed", institution: "SVYASA Yoga University, Bengaluru", desc: "Trained under premier yogic masters with deep focus on classical Hatha yoga, yoga therapy, and therapeutic alignment." },
    { title: "All India Level Yoga Participant", institution: "National Yoga Championships", desc: "Showcased advanced asana mastery, artistic yoga, and deep pranayama control on national platforms." },
    { title: "South Zone Level Yoga Participant", institution: "Inter-State Yogic Competitions", desc: "Distinguished competitor in artistic yoga, balancing postures, and yogic stamina." },
    { title: "Western Ghats Nature Advocate", institution: "Yujamrutha Apiaries & Wellness", desc: "Pioneering the synthesis of daily yogic sadhana and 100% natural raw forest honey nutrition." }
  ],
  quote: "Yoga is not just touching your toes; it is about awakening the dormant energy within and aligning with nature's rhythm."
};

export const YOGA_PROGRAMS = [
  {
    id: "beginner-yoga",
    title: "Beginner Yoga",
    sanskrit: "आरम्भ योग (Aarambha Yoga)",
    tagline: "Gentle Foundations for Lifelong Vitality & Mind-Body Ease",
    description: "A safe, step-by-step introduction to foundational classical Hatha postures, breath coordination, and joint-loosening movements (Sukshma Vyayama). Specially designed to build confidence, prevent injury, and establish an unbroken morning sadhana routine.",
    asanas: ["Tadasana (Mountain Pose)", "Vrikshasana (Tree Pose)", "Surya Namaskar (Sun Salutations)", "Bhujangasana (Cobra)", "Shavasana (Deep Relaxation)"],
    benefits: [
      "Relieves morning joint stiffness and enhances natural flexibility",
      "Corrects slouching, forward neck, and chronic desk fatigue",
      "Calms the sympathetic nervous system and boosts everyday energy"
    ],
    idealFor: "Complete beginners, seniors, desk-bound workers, and anyone resuming fitness after a break.",
    intensity: "Gentle Foundation",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Postural Foundation & Mobility",
    icon: "Sparkles",
    badge: "Most Popular"
  },
  {
    id: "advanced-yoga",
    title: "Advanced Yoga",
    sanskrit: "प्रवीण योग (Praveena Yoga)",
    tagline: "Dynamic Asana Mastery, Transitions & Yogic Endurance",
    description: "Deepen your practice with complex multi-stage asanas, dynamic vinyasa transitions, deep spinal extensions, and intense core integration. Designed for dedicated practitioners aiming for anatomical perfection, yogic stamina, and competition-level mastery.",
    asanas: ["Sirsasana (Headstand variations)", "Chakrasana (Wheel Pose)", "Mayurasana (Peacock Pose)", "Natarajasana (Lord of the Dance)", "Uddiyana & Mula Bandha"],
    benefits: [
      "Builds profound upper body, shoulder, and spinal core power",
      "Develops ironclad balance, spatial proprioception, and focus",
      "Kindles digestive fire (Jatharagni) and metabolic efficiency"
    ],
    idealFor: "Experienced practitioners, athletes, martial artists, and competitive yoga aspirants.",
    intensity: "High Intensity",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Strength, Inversions & Core Stamina",
    icon: "Flame",
    badge: "Intensive"
  },
  {
    id: "pranayama",
    title: "Pranayama & Breath Control",
    sanskrit: "प्राणायाम (Pranayama Sadhana)",
    tagline: "Mastering the Vital Life-Force to Stabilize the Mind",
    description: "Grounded in ancient Patanjali Ashtanga science, this module teaches systematic control of vital breath (Prana) through classical kumbhaka (retention), internal cleansing kriyas, and soothing vibrational sound frequencies to dissolve stress.",
    asanas: ["Kapalabhati (Frontal brain cleansing)", "Nadi Shodhana (Alternate nostril breath)", "Bhastrika (Bellows breath)", "Bhramari (Humming bee resonance)", "Ujjayi (Oceanic breath)"],
    benefits: [
      "Expands vital lung capacity and oxygenates cellular tissues",
      "Lowers resting heart rate and reduces stress cortisol levels",
      "Dissolves mental chatter and creates effortless focus for meditation"
    ],
    idealFor: "Anyone with chronic anxiety, shallow breathing, asthma, desk stress, or sleep issues.",
    intensity: "Therapeutic & Meditative",
    duration: "45 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Lung Capacity, Stress Relief & Prana Flow",
    icon: "Wind",
    badge: "Mindfulness"
  },
  {
    id: "flexibility-training",
    title: "Flexibility Training",
    sanskrit: "लचीलापन साधना (Lachilapan Sadhana)",
    tagline: "Deep Fascia Release, Hip Openers & Muscular Elongation",
    description: "A targeted therapeutic mobility module focusing on myofascial release, hip opening, hamstring lengthening, and shoulder decompression. Combines mindful PNF stretching and passive holds to safely unlock stiff joints without tearing ligaments.",
    asanas: ["Eka Pada Rajakapotasana (Pigeon Pose)", "Hanumanasana progressions", "Gomukhasana (Cow Face arms)", "Supta Padangusthasana", "Ardha Matsyendrasana (Spinal Twist)"],
    benefits: [
      "Releases chronically tight hip flexors and stiff hamstrings",
      "Hydrates spinal intervertebral discs and improves walking gait",
      "Speeds up athletic recovery and prevents sudden muscular strains"
    ],
    idealFor: "Runners, gym enthusiasts, IT professionals sitting 8+ hours, and stiff bodies.",
    intensity: "Deep Mobility",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Hip Openers, Spine Health & Flexibility",
    icon: "Activity",
    badge: "Rejuvenation"
  },
  {
    id: "hand-balance",
    title: "Hand Balance Training",
    sanskrit: "भुज बल योग (Bhuja Bala Yoga)",
    tagline: "Wrist Conditioning, Shoulder Stability & Overcoming Fear",
    description: "Master gravity-defying arm balances with scientific anatomical conditioning. We break down complex balancing poses into progressive wall drills, wrist-strengthening sequences, and core compression mechanics taught by university-level competitors.",
    asanas: ["Bakasana (Crow Pose)", "Parsva Bakasana (Side Crow)", "Pincha Mayurasana (Forearm Balance)", "Tolasana (Scale Pose)", "Wrist & Shoulder Conditioning Drills"],
    benefits: [
      "Dramatically reinforces wrists, forearms, and rotator cuffs",
      "Cultivates razor-sharp spatial awareness and neuromuscular agility",
      "Overcomes psychological fear of inversions through progressive spotting"
    ],
    idealFor: "Students wanting to conquer arm balances, build real functional strength, and elevate their sadhana.",
    intensity: "Skill & Balance",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Arm Strength, Core Control & Balance",
    icon: "Target",
    badge: "Skill Builder"
  },
  {
    id: "yoga-therapy",
    title: "Yoga Therapy",
    sanskrit: "चिकित्सा योग (Chikitsa Yoga)",
    tagline: "Therapeutic Relief for Back Pain, Cervical Stiffness & Vitality",
    description: "Rooted in clinical yoga therapy principles from S-VYASA University, this gentle module adapts yogic postures specifically to manage modern lifestyle ailments, lumbar strains, neck stiffness, sluggish digestion, and chronic exhaustion.",
    asanas: ["Lumbar Decompression bridges (Setu Bandha)", "Bhujangasana (Gentle Cobra)", "Pavanamuktasana (Wind-relieving series)", "Viparita Karani (Restorative inversion)", "Guided Yoga Nidra (Deep Relaxation)"],
    benefits: [
      "Relieves chronic lower back ache, sciatica, and cervical strain",
      "Improves digestive motility and promotes deep, restful sleep",
      "Gentle, zero-impact therapy that respects your body's existing limits"
    ],
    idealFor: "Individuals recovering from physical fatigue, joint aches, sedentary back pain, or stress.",
    intensity: "Restorative Healing",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Pain Relief, Posture Correction & Healing",
    icon: "HeartPulse",
    badge: "Therapeutic"
  },
  {
    id: "body-control",
    title: "Body Control & Awareness",
    sanskrit: "काया नियंत्रण (Kaya Niyantrana)",
    tagline: "Heightened Sensory Proprioception & Kinetic Grace",
    description: "True yoga is effortless effort (Prayatna Shaithilya). This program trains students to move through transitions with zero wasted kinetic energy, heightened sensory proprioception, and meditative physical stillness on and off the mat.",
    asanas: ["Slow-Motion Vinyasa Transitions", "Garudasana (Eagle Pose balance)", "Utkatasana (Chair Pose alignment)", "Drishti (Gaze Fixation) practices", "Isometric Core Stabilization"],
    benefits: [
      "Sharpens motor reflexes, physical poise, and walking posture",
      "Prevents accidental trips, slips, and joint hyperextension",
      "Deepens mind-body connection and emotional self-regulation"
    ],
    idealFor: "Anyone seeking refined movement, better balance, and grounded emotional clarity.",
    intensity: "Mind-Body Precision",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Proprioception, Mental Focus & Balance",
    icon: "Compass",
    badge: "Mind-Body"
  },
  {
    id: "safe-falling",
    title: "Safe Falling & Injury Prevention",
    sanskrit: "संरक्षण अभ्यास (Sanrakshana Abhyasa)",
    tagline: "Biomechanical Roll Mechanics & Joint Protection for Life",
    description: "Unique to Yujamrutha's sports-trained yogic curriculum, this safety module teaches students how to fall, roll, and exit precarious balancing poses without panic. By training kinetic rolling reflexes, students safeguard wrists, elbows, and knees against impact.",
    asanas: ["Rotational Roll Mechanics (Forward & Side)", "Wrist Decompression & Tuck Drills", "Safe Exit from Inversions", "Joint-Stacking Under Load", "Dynamic Ankle & Knee Stabilizers"],
    benefits: [
      "Removes the fear of exploring new asanas on the yoga mat",
      "Inoculates wrists, shoulders, and knees against everyday slip injuries",
      "Instills protective neuromuscular reflexes that last a lifetime"
    ],
    idealFor: "Active individuals, adventurous practitioners learning inversions, and seniors seeking fall safety.",
    intensity: "Safety & Reflexes",
    duration: "60 Mins",
    schedule: "Mon–Fri • 6:30 AM",
    focus: "Injury Prevention, Reflexes & Joint Security",
    icon: "ShieldCheck",
    badge: "Essential"
  }
];

export const HONEY_PRODUCTS = [
  {
    id: "honey-250g",
    name: "Natural Multifloral Honey",
    weight: "250g",
    price: 180,
    originalPrice: 220,
    description: "100% pure raw unheated forest honey harvested from wild blossoms of the Western Ghats. Perfect personal sampler bottle.",
    image: "/assets/images/honey-250g.jpg",
    features: ["Raw & Unpasteurized", "Cold Extracted", "Rich in Pollen & Enzymes", "No Added Sugar"],
    badge: "Trial Pack",
    rating: 4.9,
    reviewsCount: 84
  },
  {
    id: "honey-500g",
    name: "Natural Multifloral Honey",
    weight: "500g",
    price: 340,
    originalPrice: 400,
    description: "Our signature family jar. Rich amber honey with delicate floral aroma, enzymes, and medicinal forest nectar properties.",
    image: "/assets/images/honey-500g.jpg",
    features: ["Family Size", "Natural Immunity Booster", "Direct from Araga Apiaries", "Glass Jar Packaging"],
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 196
  },
  {
    id: "honey-1kg",
    name: "Natural Multifloral Honey",
    weight: "1 kg",
    price: 650,
    originalPrice: 750,
    description: "Value wellness jar for daily yoga practitioners, families, and Ayurvedic morning rituals. Unfiltered raw golden nectar.",
    image: "/assets/images/honey-1kg.jpg",
    features: ["Best Value Jar", "Long-lasting Supply", "Eco-friendly Packaging", "Certified Pure"],
    badge: "Best Value",
    rating: 4.9,
    reviewsCount: 142
  }
];

export const HONEY_SOURCING_STEPS = [
  {
    step: "01",
    title: "Eco-Friendly Beekeeping",
    subtitle: "Pristine Western Ghats Flora",
    desc: "Beehives are nested amidst flowering medicinal trees, coffee blooms, and wild herbs around Kotikoppa, Thirthahalli. Bees forage naturally without artificial syrup feeding.",
    icon: "Trees"
  },
  {
    step: "02",
    title: "Ethical Honey Collection",
    subtitle: "Protecting the Colony",
    desc: "Only sealed, mature honeycombs are selected during harvest. Ample honey reserves are left behind so the bee colony continues to flourish safely.",
    icon: "Sun"
  },
  {
    step: "03",
    title: "Cold Gentle Extraction",
    subtitle: "Zero Heat • Unpasteurized",
    desc: "Honey is manually uncapped and spun via gentle centrifugal extractor. Never boiled, heated or microfiltered, keeping living enzymes and royal jelly intact.",
    icon: "Droplets"
  },
  {
    step: "04",
    title: "Hygienic Glass Packaging",
    subtitle: "Preserving Golden Purity",
    desc: "Carefully poured into sanitized food-grade glass jars to preserve taste, aroma, and therapeutic properties without harmful plastic leaching.",
    icon: "PackageCheck"
  },
  {
    step: "05",
    title: "Direct Doorstep Delivery",
    subtitle: "From Forest Apiary to You",
    desc: "Packed with shock-resistant biodegradable cushioning and dispatched safely to your home across Karnataka and all of India.",
    icon: "Truck"
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Sandeep Hegde",
    role: "Ayurvedic Physician, Bengaluru",
    text: "Finding truly unadulterated raw honey today is rare. Yujamrutha's honey has that distinct herbal aroma and gentle crystallization that only genuine raw forest honey possesses. Paired with Abhinandan's morning yoga sadhana, it is the best start to one's day.",
    rating: 5,
    tag: "Verified Honey & Yoga Member"
  },
  {
    name: "Pooja Krishnamurthy",
    role: "Software Architect, Hyderabad",
    text: "The 6:30 AM online classes transformed my stiff desk posture. Abhinandan sir pays individual attention to camera alignment, breathing, and flexibility. I also take 1 spoonful of their Western Ghats honey with warm water daily – energy levels are noticeably higher!",
    rating: 5,
    tag: "Online Yoga Student"
  },
  {
    name: "Manjunath Rao",
    role: "Fitness Enthusiast, Shivamogga",
    text: "The hand balance and safe falling drills are something no other yoga class teaches. Outstanding pedagogy from an SVYASA certified champion. And their 1kg honey jar has become an irreplaceable staple in our home kitchen.",
    rating: 5,
    tag: "Advanced Yoga & Honey Buyer"
  }
];

// Bilingual Helper Getters
import {
  YOGA_CLASS_DETAILS_KN,
  INSTRUCTOR_PROFILE_KN,
  YOGA_PROGRAMS_KN,
  HONEY_PRODUCTS_KN,
  HONEY_SOURCING_STEPS_KN,
  TESTIMONIALS_KN,
  CERTIFICATES_KN
} from "./translationsData.js";

export const getYogaClassDetails = (lang = "en") => (lang === "kn" ? YOGA_CLASS_DETAILS_KN : YOGA_CLASS_DETAILS);
export const getInstructorProfile = (lang = "en") => (lang === "kn" ? INSTRUCTOR_PROFILE_KN : INSTRUCTOR_PROFILE);
export const getYogaPrograms = (lang = "en") => (lang === "kn" ? YOGA_PROGRAMS_KN : YOGA_PROGRAMS);
export const getHoneyProducts = (lang = "en") => (lang === "kn" ? HONEY_PRODUCTS_KN : HONEY_PRODUCTS);
export const getHoneySourcingSteps = (lang = "en") => (lang === "kn" ? HONEY_SOURCING_STEPS_KN : HONEY_SOURCING_STEPS);
export const getTestimonials = (lang = "en") => (lang === "kn" ? TESTIMONIALS_KN : TESTIMONIALS);
export const getCertificatesData = (lang = "en", defaultCerts = []) => (lang === "kn" ? CERTIFICATES_KN : defaultCerts);

