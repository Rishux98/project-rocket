export const mockProducts = [
  {
    id: "prod-1",
    name: "AuraSound ANC Pro 500",
    brand: "AuraSound",
    category: "Audio",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviewCount: 142,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Industry-leading active noise cancelling wireless headphones with custom 40mm titanium drivers, 38-hour battery life, and spatial audio head-tracking.",
    specs: {
      "Driver Size": "40mm Titanium",
      "Battery Life": "38 Hours (ANC On)",
      "Charging": "USB-C Fast Charge (10 min = 5 hrs)",
      "Bluetooth": "5.3 with LDAC, AAC, SBC",
      "Microphones": "8 Beamforming Mics",
      "Weight": "250g",
      "Warranty": "2 Years International"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.8, count: 86 },
      { aspect: "build", label: "Build Quality", score: 4.6, count: 64 },
      { aspect: "price", label: "Value / Price", score: 4.1, count: 42 },
      { aspect: "support", label: "Customer Support", score: 4.5, count: 28 },
      { aspect: "performance", label: "Audio & ANC", score: 4.9, count: 110 }
    ],
    ratingBreakdown: {
      5: 98,
      4: 30,
      3: 8,
      2: 4,
      1: 2
    },
    reviews: [
      {
        id: "rev-101",
        author: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Battery life is an absolute beast for long haul flights!",
        comment: "Used these on a 14-hour flight from San Francisco to Tokyo. With ANC on full blast, the battery barely dropped below 60%. The noise cancelling blocked out the engine roar almost completely. Super comfortable padding around the ears.",
        date: "2026-08-14",
        verified: true,
        aspectTags: ["battery", "performance", "build"],
        helpful: 48,
        unhelpful: 2
      },
      {
        id: "rev-102",
        author: "Sophia Lin",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Soundstage and acoustic detail are breathtaking",
        comment: "As an audio engineer, I am extremely picky. The LDAC support delivers ultra-crisp highs and tight, resonant bass without muddiness. Worth every penny of the $350 price tag.",
        date: "2026-08-20",
        verified: true,
        aspectTags: ["performance", "price"],
        helpful: 35,
        unhelpful: 1
      },
      {
        id: "rev-103",
        author: "David K.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        rating: 4,
        title: "Great build quality, slightly tight clamp force",
        comment: "The aluminum hinges and memory foam cups feel premium. The build quality is top-notch. My only small issue is that the headband clamp force feels slightly snug for larger heads during long sessions.",
        date: "2026-08-02",
        verified: true,
        aspectTags: ["build", "performance"],
        helpful: 19,
        unhelpful: 3
      },
      {
        id: "rev-104",
        author: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Customer support replaced my ear cushions for free!",
        comment: "I contacted AuraSound customer support because I accidentally snagged an ear pad zipper. Their support team shipped a replacement kit under warranty within 48 hours. Stellar service!",
        date: "2026-07-28",
        verified: true,
        aspectTags: ["support"],
        helpful: 24,
        unhelpful: 0
      },
      {
        id: "rev-105",
        author: "Brian Miller",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        rating: 3,
        title: "Good sound but expensive for what it offers",
        comment: "The price is steep compared to competitors. While the ANC is great and battery lasts days, the mobile companion app has occasional bluetooth pairing drops.",
        date: "2026-07-15",
        verified: false,
        aspectTags: ["price", "performance"],
        helpful: 12,
        unhelpful: 7
      },
      {
        id: "rev-106",
        author: "Chloe Bennett",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Fast charging saved my morning commute",
        comment: "Forgot to charge overnight, plugged it in for 10 minutes while brewing coffee, and got through my entire 4-hour workday listening to music. Battery tech is top tier.",
        date: "2026-06-30",
        verified: true,
        aspectTags: ["battery"],
        helpful: 15,
        unhelpful: 1
      }
    ]
  },
  {
    id: "prod-2",
    name: "ZenithBook Ultra 14 M3",
    brand: "Zenith Tech",
    category: "Laptops",
    price: 1299.00,
    originalPrice: 1399.00,
    rating: 4.8,
    reviewCount: 98,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Ultra-slim 14-inch OLED laptop powered by the M3 ARM processor. 22-hour battery life, fanless silent chassis, and 120Hz display.",
    specs: {
      "Processor": "Zenith M3 10-Core CPU",
      "RAM": "16GB Unified LPDDR5X",
      "Storage": "512GB PCIe 4.0 NVMe SSD",
      "Display": "14.2\" 2.8K OLED 120Hz HDR",
      "Battery": "72Wh (22 Hours Video Playback)",
      "Ports": "2x Thunderbolt 4, HDMI 2.1, MagCharge",
      "Weight": "1.24 kg"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.9, count: 72 },
      { aspect: "build", label: "Build Quality", score: 4.8, count: 58 },
      { aspect: "price", label: "Value / Price", score: 4.4, count: 35 },
      { aspect: "support", label: "Customer Support", score: 4.2, count: 18 },
      { aspect: "performance", label: "Speed & OLED", score: 4.9, count: 80 }
    ],
    ratingBreakdown: {
      5: 80,
      4: 12,
      3: 4,
      2: 1,
      1: 1
    },
    reviews: [
      {
        id: "rev-201",
        author: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "22 hours battery life is not a marketing gimmick!",
        comment: "I work out of coffee shops all day without taking my power brick. I leave home at 8 AM and come back at 8 PM with 35% battery remaining. Video rendering on battery is just as fast as plugged in.",
        date: "2026-08-18",
        verified: true,
        aspectTags: ["battery", "performance"],
        helpful: 62,
        unhelpful: 1
      },
      {
        id: "rev-202",
        author: "Hannah Abbott",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "The 120Hz OLED screen ruined all other monitors for me",
        comment: "Deep blacks, vibrant sRGB color accuracy, and butter smooth 120Hz scrolling. The build quality feels like a single solid piece of aerospace aluminum.",
        date: "2026-08-10",
        verified: true,
        aspectTags: ["build", "performance"],
        helpful: 41,
        unhelpful: 0
      },
      {
        id: "rev-203",
        author: "Timothy Drake",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
        rating: 4,
        title: "Super fast processor, but wish RAM was upgradeable",
        comment: "The M3 chip handles 50+ Chrome tabs and VS Code without a hitch. However, since RAM is soldered onto the chip, make sure you get enough memory upfront.",
        date: "2026-07-22",
        verified: true,
        aspectTags: ["performance", "price"],
        helpful: 28,
        unhelpful: 2
      }
    ]
  },
  {
    id: "prod-3",
    name: "PulseFit Horizon Smartwatch",
    brand: "PulseFit",
    category: "Wearables",
    price: 199.50,
    originalPrice: 249.00,
    rating: 4.4,
    reviewCount: 76,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Advanced health tracker with dual-frequency GPS, ECG monitor, continuous SpO2, and 10-day battery life in a titanium bezel.",
    specs: {
      "Display": "1.4\" Sapphire Crystal AMOLED",
      "Battery": "10 Days Typical Use / 30h Dual GPS",
      "Sensors": "Optical HR, ECG, SpO2, Skin Temp",
      "Water Resistance": "5 ATM (50 Meters)",
      "Compatibility": "iOS & Android"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.7, count: 50 },
      { aspect: "build", label: "Build Quality", score: 4.5, count: 38 },
      { aspect: "price", label: "Value / Price", score: 4.6, count: 45 },
      { aspect: "support", label: "Customer Support", score: 3.9, count: 12 },
      { aspect: "performance", label: "GPS & Health", score: 4.3, count: 40 }
    ],
    ratingBreakdown: {
      5: 45,
      4: 20,
      3: 6,
      2: 3,
      1: 2
    },
    reviews: [
      {
        id: "rev-301",
        author: "Rachel Green",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "10-day battery life makes Apple Watch look weak",
        comment: "I went on a 7-day hiking trip with GPS tracking enabled every morning. Returned home with 25% battery left. Sapphire screen hasn't scratched despite brushing against rocks.",
        date: "2026-08-05",
        verified: true,
        aspectTags: ["battery", "build"],
        helpful: 33,
        unhelpful: 1
      },
      {
        id: "rev-302",
        author: "Kevin Patel",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        rating: 4,
        title: "Unbeatable price for dual GPS precision",
        comment: "Compared to $500+ Garmin watches, this provides identical GPS track logs on my outdoor runs. Excellent value for money under $200.",
        date: "2026-07-19",
        verified: true,
        aspectTags: ["price", "performance"],
        helpful: 21,
        unhelpful: 2
      }
    ]
  },
  {
    id: "prod-4",
    name: "Vortex Apex RGB Mechanical Keyboard",
    brand: "Vortex Gaming",
    category: "Gaming",
    price: 159.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviewCount: 115,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Hot-swappable gasket-mounted mechanical keyboard with pre-lubed linear switches, PBT keycaps, and per-key RGB lighting.",
    specs: {
      "Layout": "75% Compact (82 Keys)",
      "Switches": "Vortex Speed Linear (Pre-lubed)",
      "Keycaps": "Double-shot PBT Cherry Profile",
      "Mounting": "Poron Gasket Mount",
      "Connectivity": "Tri-Mode (2.4GHz / Bluetooth / USB-C)"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.2, count: 30 },
      { aspect: "build", label: "Build & Acoustics", score: 4.9, count: 90 },
      { aspect: "price", label: "Value / Price", score: 4.5, count: 52 },
      { aspect: "support", label: "Customer Support", score: 4.1, count: 14 },
      { aspect: "performance", label: "Typing & Latency", score: 4.8, count: 78 }
    ],
    ratingBreakdown: {
      5: 82,
      4: 20,
      3: 8,
      2: 3,
      1: 2
    },
    reviews: [
      {
        id: "rev-401",
        author: "Nathan Swift",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "The sound out of the box is pure thocky heaven!",
        comment: "No modding needed! The pre-lubed switches, gasket mount, and internal sound dampening foam produce a deep thocky acoustic profile. Premium CNC aluminum top frame.",
        date: "2026-08-12",
        verified: true,
        aspectTags: ["build", "performance"],
        helpful: 54,
        unhelpful: 1
      }
    ]
  },
  {
    id: "prod-5",
    name: "Lumina Vision Pro 4K Mirrorless Camera",
    brand: "Lumina Optics",
    category: "Cameras",
    price: 1899.00,
    originalPrice: 1999.00,
    rating: 4.9,
    reviewCount: 64,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Full-frame 33MP mirrorless camera with AI subject tracking autofocus, 4K 60p 10-bit video, and 5-axis in-body image stabilization.",
    specs: {
      "Sensor": "33MP Full-Frame Exmor R CMOS",
      "Video": "4K 60p 10-bit 4:2:2 N-Log",
      "Autofocus": "AI Human/Animal/Vehicle Eye AF (759 points)",
      "Stabilization": "5-Axis IBIS (7.0 stops)",
      "Screen": "3.2\" Vari-Angle Touchscreen LCD"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.4, count: 25 },
      { aspect: "build", label: "Weather Sealing", score: 4.9, count: 42 },
      { aspect: "price", label: "Value / Price", score: 4.3, count: 20 },
      { aspect: "support", label: "Customer Support", score: 4.7, count: 15 },
      { aspect: "performance", label: "Autofocus & Image Quality", score: 5.0, count: 58 }
    ],
    ratingBreakdown: {
      5: 58,
      4: 5,
      3: 1,
      2: 0,
      1: 0
    },
    reviews: [
      {
        id: "rev-501",
        author: "Victor Vance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "AI autofocus tracks eyes instantly even in pitch dark",
        comment: "I shoot weddings and low light events. The real-time eye tracking locks on instantly and doesn't lose focus when the subject turns away. Image quality dynamic range is mind-blowing.",
        date: "2026-08-21",
        verified: true,
        aspectTags: ["performance", "build"],
        helpful: 39,
        unhelpful: 0
      }
    ]
  }
];

export const aspectLabels = {
  battery: { name: "Battery Life", icon: "🔋", color: "emerald" },
  build: { name: "Build Quality", icon: "🛠️", color: "blue" },
  price: { name: "Value & Price", icon: "🏷️", color: "purple" },
  support: { name: "Customer Support", icon: "🎧", color: "amber" },
  performance: { name: "Performance", icon: "⚡", color: "rose" }
};
