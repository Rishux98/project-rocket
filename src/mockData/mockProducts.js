export const mockProducts = [
  // --- AUDIO CATEGORY ---
  {
    id: "prod-1",
    name: "AuraSound ANC Pro 500",
    brand: "AuraSound",
    category: "Audio",
    price: 24999,
    originalPrice: 29999,
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
    ratingBreakdown: { 5: 98, 4: 30, 3: 8, 2: 4, 1: 2 },
    reviews: [
      {
        id: "rev-101",
        author: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Battery life is an absolute beast for long haul flights!",
        comment: "Used these on a 14-hour flight from Delhi to London. With ANC on full blast, the battery barely dropped below 60%. The noise cancelling blocked out the engine roar almost completely. Super comfortable padding around the ears.",
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
        comment: "As an audio engineer, I am extremely picky. The LDAC support delivers ultra-crisp highs and tight, resonant bass without muddiness. Worth every rupee of the ₹25,000 price tag.",
        date: "2026-08-20",
        verified: true,
        aspectTags: ["performance", "price"],
        helpful: 35,
        unhelpful: 1
      }
    ]
  },
  {
    id: "prod-2",
    name: "SonicBlast Horizon TWS Earbuds",
    brand: "SonicBlast",
    category: "Audio",
    price: 8999,
    originalPrice: 11999,
    rating: 4.5,
    reviewCount: 96,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Compact true wireless earbuds featuring 11mm dynamic drivers, hybrid ANC, wireless charging case, and IPX7 water resistance.",
    specs: {
      "Driver Size": "11mm Dynamic",
      "Battery Life": "8h Earbuds + 28h Case",
      "Water Resistance": "IPX7 Waterproof",
      "ANC Mode": "Hybrid Active Noise Cancel (-42dB)",
      "Codec": "AAC / SBC / aptX Adaptive"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.6, count: 54 },
      { aspect: "build", label: "Build Quality", score: 4.4, count: 40 },
      { aspect: "price", label: "Value / Price", score: 4.7, count: 68 },
      { aspect: "support", label: "Customer Support", score: 4.2, count: 19 },
      { aspect: "performance", label: "ANC & Mic", score: 4.5, count: 72 }
    ],
    ratingBreakdown: { 5: 60, 4: 25, 3: 7, 2: 3, 1: 1 },
    reviews: [
      {
        id: "rev-201",
        author: "Rohan Sharma",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Best TWS earbuds under ₹10,000!",
        comment: "The noise cancellation during subway commutes is amazing. Bass response is punchy without distorting vocals. Fits snugly during gym workouts.",
        date: "2026-08-11",
        verified: true,
        aspectTags: ["price", "performance"],
        helpful: 31,
        unhelpful: 0
      }
    ]
  },
  {
    id: "prod-3",
    name: "SoundSphere Cinema 3D Soundbar",
    brand: "SoundSphere",
    category: "Audio",
    price: 34990,
    originalPrice: 39990,
    rating: 4.8,
    reviewCount: 68,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "5.1.2 channel Dolby Atmos soundbar with wireless subwoofer, HDMI eARC, 450W output, and room acoustic calibration.",
    specs: {
      "Output Power": "450 Watts Peak",
      "Channels": "5.1.2 Dolby Atmos / DTS:X",
      "Subwoofer": "8-inch Wireless Down-firing",
      "Connectivity": "HDMI eARC, Optical, Bluetooth 5.2, Wi-Fi"
    },
    aspectScores: [
      { aspect: "battery", label: "Power Efficiency", score: 4.3, count: 20 },
      { aspect: "build", label: "Build Quality", score: 4.9, count: 48 },
      { aspect: "price", label: "Value / Price", score: 4.5, count: 32 },
      { aspect: "support", label: "Customer Support", score: 4.6, count: 14 },
      { aspect: "performance", label: "Surround Sound", score: 4.9, count: 60 }
    ],
    ratingBreakdown: { 5: 55, 4: 10, 3: 2, 2: 1, 1: 0 },
    reviews: [
      {
        id: "rev-301",
        author: "Priya Nair",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "Transformed our home theater setup completely",
        comment: "The height channels create a true 3D spatial effect when watching movies on Netflix. Dialogue is crisp even during heavy action scenes.",
        date: "2026-08-04",
        verified: true,
        aspectTags: ["performance", "build"],
        helpful: 29,
        unhelpful: 1
      }
    ]
  },
  {
    id: "prod-4",
    name: "StudioPulse HD Reference Headphones",
    brand: "StudioPulse",
    category: "Audio",
    price: 19500,
    originalPrice: 22000,
    rating: 4.6,
    reviewCount: 52,
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Open-back studio reference headphones engineered for mixing, mastering, and critical acoustic listening.",
    specs: {
      "Design": "Open-Back Dynamic",
      "Impedance": "250 Ohms",
      "Frequency Response": "5Hz - 40,000Hz",
      "Cable": "3m Detachable Oxygen-Free Copper"
    },
    aspectScores: [
      { aspect: "battery", label: "Wired Operation", score: 5.0, count: 15 },
      { aspect: "build", label: "Build & Comfort", score: 4.8, count: 42 },
      { aspect: "price", label: "Value / Price", score: 4.4, count: 28 },
      { aspect: "support", label: "Customer Support", score: 4.3, count: 10 },
      { aspect: "performance", label: "Acoustic Neutrality", score: 4.9, count: 50 }
    ],
    ratingBreakdown: { 5: 38, 4: 10, 3: 3, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-5",
    name: "BeatWave Portable Boombox X",
    brand: "BeatWave",
    category: "Audio",
    price: 12499,
    originalPrice: 14999,
    rating: 4.4,
    reviewCount: 84,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Rugged outdoor Bluetooth speaker with dual pass radiators, RGB party lighting ring, and 24-hour continuous playtime.",
    specs: {
      "Output": "60W RMS Dual Woofers + Tweeters",
      "Battery": "24 Hours Playback (10,000mAh Powerbank)",
      "Protection": "IP67 Dust & Water Proof"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.8, count: 62 },
      { aspect: "build", label: "Durability", score: 4.7, count: 45 },
      { aspect: "price", label: "Value / Price", score: 4.5, count: 40 },
      { aspect: "support", label: "Customer Support", score: 4.0, count: 12 },
      { aspect: "performance", label: "Loudness & Bass", score: 4.6, count: 70 }
    ],
    ratingBreakdown: { 5: 50, 4: 24, 3: 6, 2: 3, 1: 1 },
    reviews: []
  },
  {
    id: "prod-6",
    name: "Vocalist Pro Wireless Mic Duo",
    brand: "StudioPulse",
    category: "Audio",
    price: 14999,
    originalPrice: 17999,
    rating: 4.7,
    reviewCount: 41,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Dual-channel 2.4GHz wireless lavalier microphone system with active noise reduction for content creators and podcasters.",
    specs: {
      "Range": "200 meters Line of Sight",
      "Latency": "8ms Ultra Low Latency",
      "Recording": "32-bit Float Internal Backup",
      "Battery": "7h Mics + 21h Charging Case"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.6, count: 28 },
      { aspect: "build", label: "Compact Build", score: 4.7, count: 25 },
      { aspect: "price", label: "Value / Price", score: 4.8, count: 30 },
      { aspect: "support", label: "Customer Support", score: 4.4, count: 8 },
      { aspect: "performance", label: "Vocal Clarity", score: 4.9, count: 38 }
    ],
    ratingBreakdown: { 5: 32, 4: 7, 3: 2, 2: 0, 1: 0 },
    reviews: []
  },

  // --- LAPTOPS CATEGORY ---
  {
    id: "prod-7",
    name: "ZenithBook Ultra 14 M3",
    brand: "Zenith Tech",
    category: "Laptops",
    price: 119900,
    originalPrice: 129900,
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
    ratingBreakdown: { 5: 80, 4: 12, 3: 4, 2: 1, 1: 1 },
    reviews: [
      {
        id: "rev-701",
        author: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "22 hours battery life is not a marketing gimmick!",
        comment: "I work out of coffee shops all day without taking my power brick. Video rendering on battery is just as fast as plugged in.",
        date: "2026-08-18",
        verified: true,
        aspectTags: ["battery", "performance"],
        helpful: 62,
        unhelpful: 1
      }
    ]
  },
  {
    id: "prod-8",
    name: "Vortex Titan 16 RTX Gaming Laptop",
    brand: "Vortex Gaming",
    category: "Laptops",
    price: 164990,
    originalPrice: 179990,
    rating: 4.7,
    reviewCount: 110,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "High-performance gaming machine with Intel Core i9-14900HX, NVIDIA RTX 4080 (175W TGP), 240Hz QHD+ screen, and liquid metal cooling.",
    specs: {
      "Processor": "Intel Core i9-14900HX (24 Cores)",
      "Graphics": "NVIDIA GeForce RTX 4080 12GB VRAM",
      "RAM": "32GB DDR5 5600MHz",
      "Storage": "1TB Gen4 NVMe SSD",
      "Display": "16\" QHD+ (2560x1600) 240Hz 500 nits"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 3.2, count: 40 },
      { aspect: "build", label: "Chassis & Thermal", score: 4.7, count: 82 },
      { aspect: "price", label: "Value / Price", score: 4.3, count: 50 },
      { aspect: "support", label: "Customer Support", score: 4.5, count: 22 },
      { aspect: "performance", label: "FPS & Raytracing", score: 5.0, count: 102 }
    ],
    ratingBreakdown: { 5: 85, 4: 18, 3: 5, 2: 1, 1: 1 },
    reviews: []
  },
  {
    id: "prod-9",
    name: "CloudStudio Creator 15 OLED",
    brand: "CloudStudio",
    category: "Laptops",
    price: 98500,
    originalPrice: 109990,
    rating: 4.6,
    reviewCount: 64,
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Designed for video editors and 3D artists. Features a 100% DCI-P3 4K touch OLED display, Ryzen 9 processor, and dial controller trackpad.",
    specs: {
      "Processor": "AMD Ryzen 9 7940HS",
      "Graphics": "NVIDIA RTX 4060 8GB",
      "RAM": "32GB LPDDR5",
      "Display": "15.6\" 4K Touch OLED Pantone Validated"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.1, count: 32 },
      { aspect: "build", label: "Build Quality", score: 4.8, count: 45 },
      { aspect: "price", label: "Value / Price", score: 4.6, count: 30 },
      { aspect: "support", label: "Customer Support", score: 4.2, count: 11 },
      { aspect: "performance", label: "4K Render Speed", score: 4.8, count: 55 }
    ],
    ratingBreakdown: { 5: 45, 4: 14, 3: 3, 2: 1, 1: 1 },
    reviews: []
  },
  {
    id: "prod-10",
    name: "MicroDesk Mini PC Pro Workstation",
    brand: "Zenith Tech",
    category: "Laptops",
    price: 45999,
    originalPrice: 52999,
    rating: 4.5,
    reviewCount: 42,
    images: [
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Compact 0.5-liter mini PC workstation powered by Ryzen 7 7840U with triple 4K display output and dual 2.5G Ethernet ports.",
    specs: {
      "Processor": "AMD Ryzen 7 7840U 8-Core",
      "Graphics": "AMD Radeon 780M iGPU",
      "RAM": "32GB DDR5 (Upgradeable to 64GB)",
      "Storage": "1TB NVMe SSD + Extra M.2 Slot"
    },
    aspectScores: [
      { aspect: "battery", label: "Desktop Powered", score: 4.5, count: 12 },
      { aspect: "build", label: "Aluminum Chassis", score: 4.7, count: 30 },
      { aspect: "price", label: "Value / Price", score: 4.9, count: 38 },
      { aspect: "support", label: "Customer Support", score: 4.1, count: 9 },
      { aspect: "performance", label: "Multitasking", score: 4.6, count: 36 }
    ],
    ratingBreakdown: { 5: 28, 4: 10, 3: 3, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-11",
    name: "NovaBook Air Slim 13",
    brand: "Zenith Tech",
    category: "Laptops",
    price: 69990,
    originalPrice: 79990,
    rating: 4.4,
    reviewCount: 75,
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Featherweight 990g laptop with Core i5 13th Gen, 16-hour battery, and anti-glare IPS display for students and professionals on the move.",
    specs: {
      "Weight": "990 grams",
      "Processor": "Intel Core i5-1335U",
      "RAM": "16GB LPDDR5",
      "Display": "13.3\" FHD+ IPS Anti-Glare 400 nits"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.7, count: 50 },
      { aspect: "build", label: "Ultra Light Build", score: 4.8, count: 60 },
      { aspect: "price", label: "Value / Price", score: 4.5, count: 42 },
      { aspect: "support", label: "Customer Support", score: 4.0, count: 15 },
      { aspect: "performance", label: "Office & Productivity", score: 4.4, count: 62 }
    ],
    ratingBreakdown: { 5: 48, 4: 20, 3: 5, 2: 1, 1: 1 },
    reviews: []
  },

  // --- WEARABLES CATEGORY ---
  {
    id: "prod-12",
    name: "PulseFit Horizon Smartwatch",
    brand: "PulseFit",
    category: "Wearables",
    price: 14999,
    originalPrice: 18999,
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
    ratingBreakdown: { 5: 45, 4: 20, 3: 6, 2: 3, 1: 2 },
    reviews: []
  },
  {
    id: "prod-13",
    name: "Chronos Executive Titanium Watch",
    brand: "PulseFit",
    category: "Wearables",
    price: 32990,
    originalPrice: 38990,
    rating: 4.8,
    reviewCount: 54,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Grade-5 titanium smart watch with sapphire crystal glass, rotating crown, wireless charging, and cellular LTE connectivity.",
    specs: {
      "Case": "Grade-5 Aerospace Titanium",
      "Connectivity": "eSIM LTE + Wi-Fi + Bluetooth 5.3",
      "Battery": "5 Days Smart Mode / 14 Days Power Saver"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.5, count: 30 },
      { aspect: "build", label: "Titanium Luxury", score: 5.0, count: 48 },
      { aspect: "price", label: "Value / Price", score: 4.2, count: 22 },
      { aspect: "support", label: "Customer Support", score: 4.6, count: 14 },
      { aspect: "performance", label: "eSIM & Apps", score: 4.7, count: 42 }
    ],
    ratingBreakdown: { 5: 42, 4: 9, 3: 2, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-14",
    name: "AuraRing Smart Health Ring",
    brand: "AuraSound",
    category: "Wearables",
    price: 19999,
    originalPrice: 22999,
    rating: 4.6,
    reviewCount: 88,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Lightweight titanium smart ring measuring sleep stages, HRV readiness, body temperature, and stress level with 7-day battery.",
    specs: {
      "Material": "Medical Titanium with PVD Coating",
      "Weight": "4 to 6 grams",
      "Battery": "7 Days Continuous Tracking",
      "Waterproofing": "100 Meters Waterproof"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.8, count: 60 },
      { aspect: "build", label: "Comfort & Fit", score: 4.9, count: 70 },
      { aspect: "price", label: "Value / Price", score: 4.3, count: 38 },
      { aspect: "support", label: "Customer Support", score: 4.4, count: 16 },
      { aspect: "performance", label: "Sleep Tracking", score: 4.8, count: 75 }
    ],
    ratingBreakdown: { 5: 62, 4: 18, 3: 5, 2: 2, 1: 1 },
    reviews: []
  },
  {
    id: "prod-15",
    name: "VisionPulse AR/VR Spatial Glasses",
    brand: "PulseFit",
    category: "Wearables",
    price: 49990,
    originalPrice: 59990,
    rating: 4.5,
    reviewCount: 39,
    images: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Dual Micro-OLED AR glasses projecting a virtual 201-inch screen anywhere. 120Hz refresh rate and spatial audio speakers built into temples.",
    specs: {
      "Display": "Dual Micro-OLED 1080p per Eye",
      "Virtual Screen": "201-inch at 6 meters",
      "Refresh Rate": "120Hz Smooth Gaming Mode",
      "Weight": "75 grams"
    },
    aspectScores: [
      { aspect: "battery", label: "Tethered Power", score: 4.0, count: 15 },
      { aspect: "build", label: "Lightweight Ergonomics", score: 4.7, count: 32 },
      { aspect: "price", label: "Value / Price", score: 4.2, count: 18 },
      { aspect: "support", label: "Customer Support", score: 4.3, count: 8 },
      { aspect: "performance", label: "Micro-OLED Display", score: 4.9, count: 36 }
    ],
    ratingBreakdown: { 5: 25, 4: 10, 3: 3, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-16",
    name: "FitBand Active Fitness Tracker 5",
    brand: "PulseFit",
    category: "Wearables",
    price: 3499,
    originalPrice: 4499,
    rating: 4.3,
    reviewCount: 130,
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Budget friendly fitness tracker with 1.62-inch AMOLED screen, 120+ workout modes, continuous heart rate, and 14-day battery.",
    specs: {
      "Display": "1.62\" AMOLED 500 nits",
      "Battery": "14 Days Typical Usage",
      "Workouts": "120+ Sport Modes with VO2 Max",
      "Water Resistance": "5 ATM"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.9, count: 95 },
      { aspect: "build", label: "Silicone Strap", score: 4.3, count: 70 },
      { aspect: "price", label: "Value / Price", score: 4.9, count: 110 },
      { aspect: "support", label: "Customer Support", score: 3.9, count: 20 },
      { aspect: "performance", label: "Steps & Heart Rate", score: 4.4, count: 85 }
    ],
    ratingBreakdown: { 5: 75, 4: 35, 3: 12, 2: 5, 1: 3 },
    reviews: []
  },

  // --- GAMING CATEGORY ---
  {
    id: "prod-17",
    name: "Vortex Apex RGB Mechanical Keyboard",
    brand: "Vortex Gaming",
    category: "Gaming",
    price: 11999,
    originalPrice: 13999,
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
    ratingBreakdown: { 5: 82, 4: 20, 3: 8, 2: 3, 1: 2 },
    reviews: []
  },
  {
    id: "prod-18",
    name: "PrecisionX UltraLight Wireless Mouse",
    brand: "Vortex Gaming",
    category: "Gaming",
    price: 6499,
    originalPrice: 7999,
    rating: 4.7,
    reviewCount: 82,
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "49-gram ultra lightweight esports gaming mouse with 30,000 DPI optical sensor, 8,000Hz polling rate, and optical switches.",
    specs: {
      "Weight": "49 Grams (No Holes)",
      "Sensor": "FocusPro 30K Optical",
      "Polling Rate": "8000Hz HyperPolling",
      "Switches": "Gen-3 Optical Mouse Switches (90M Clicks)"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.4, count: 45 },
      { aspect: "build", label: "Ultra Light Shell", score: 4.8, count: 62 },
      { aspect: "price", label: "Value / Price", score: 4.6, count: 50 },
      { aspect: "support", label: "Customer Support", score: 4.2, count: 12 },
      { aspect: "performance", label: "Tracking Precision", score: 4.9, count: 72 }
    ],
    ratingBreakdown: { 5: 58, 4: 18, 3: 4, 2: 1, 1: 1 },
    reviews: []
  },
  {
    id: "prod-19",
    name: "HyperStrike Pro Wireless Controller",
    brand: "Vortex Gaming",
    category: "Gaming",
    price: 5999,
    originalPrice: 7499,
    rating: 4.5,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Pro gamepad featuring anti-drift Hall Effect thumbsticks, mechanical micro-switch ABXY buttons, and 4 remappable rear paddles.",
    specs: {
      "Thumbsticks": "K-Silver Hall Effect Magnetic Sticks",
      "Buttons": "0.3mm Microswitch Tactile Action",
      "Paddles": "4 Remappable Ergonomic Back Triggers",
      "Compatibility": "PC, Steam Deck, Switch, Android, iOS"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.5, count: 38 },
      { aspect: "build", label: "Hall Effect Sticks", score: 4.9, count: 55 },
      { aspect: "price", label: "Value / Price", score: 4.7, count: 42 },
      { aspect: "support", label: "Customer Support", score: 4.1, count: 10 },
      { aspect: "performance", label: "Zero Drift Trigger", score: 4.8, count: 50 }
    ],
    ratingBreakdown: { 5: 42, 4: 18, 3: 5, 2: 1, 1: 1 },
    reviews: []
  },
  {
    id: "prod-20",
    name: "Vortex Curved 32\" 240Hz OLED Monitor",
    brand: "Vortex Gaming",
    category: "Gaming",
    price: 38990,
    originalPrice: 44990,
    rating: 4.9,
    reviewCount: 48,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "32-inch 1400R curved QD-OLED gaming monitor with 240Hz refresh rate, 0.03ms response time, and True Black HDR400.",
    specs: {
      "Panel": "32\" QD-OLED 1400R Curved",
      "Resolution": "QHD (2560 x 1440)",
      "Refresh Rate": "240Hz",
      "Response Time": "0.03ms (GtG)",
      "HDR": "VESA DisplayHDR True Black 400"
    },
    aspectScores: [
      { aspect: "battery", label: "Power & Heat", score: 4.2, count: 18 },
      { aspect: "build", label: "OLED Build & Stand", score: 4.9, count: 40 },
      { aspect: "price", label: "Value / Price", score: 4.4, count: 25 },
      { aspect: "support", label: "Customer Support", score: 4.6, count: 12 },
      { aspect: "performance", label: "Contrast & 240Hz", score: 5.0, count: 46 }
    ],
    ratingBreakdown: { 5: 44, 4: 3, 3: 1, 2: 0, 1: 0 },
    reviews: []
  },
  {
    id: "prod-21",
    name: "AcousticPro Gaming Headset 7.1",
    brand: "Vortex Gaming",
    category: "Gaming",
    price: 7999,
    originalPrice: 9999,
    rating: 4.4,
    reviewCount: 78,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Wireless gaming headset with spatial 7.1 surround sound, broadcast-grade detachable microphone, and cooling gel ear cushions.",
    specs: {
      "Driver": "50mm Neodymium Drivers",
      "Surround Sound": "THX Spatial Audio 7.1",
      "Battery": "50 Hours Wireless Playtime",
      "Microphone": "Cardioid Noise Cancelling Mic"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery Life", score: 4.8, count: 52 },
      { aspect: "build", label: "Cooling Gel Pads", score: 4.6, count: 48 },
      { aspect: "price", label: "Value / Price", score: 4.5, count: 40 },
      { aspect: "support", label: "Customer Support", score: 4.0, count: 11 },
      { aspect: "performance", label: "Footstep Spatial Audio", score: 4.6, count: 62 }
    ],
    ratingBreakdown: { 5: 46, 4: 22, 3: 7, 2: 2, 1: 1 },
    reviews: []
  },

  // --- CAMERAS CATEGORY ---
  {
    id: "prod-22",
    name: "Lumina Vision Pro 4K Camera",
    brand: "Lumina Optics",
    category: "Cameras",
    price: 149900,
    originalPrice: 159900,
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
    ratingBreakdown: { 5: 58, 4: 5, 3: 1, 2: 0, 1: 0 },
    reviews: [
      {
        id: "rev-2201",
        author: "Victor Vance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        rating: 5,
        title: "AI autofocus tracks eyes instantly even in pitch dark",
        comment: "I shoot weddings and low light events. The real-time eye tracking locks on instantly. Dynamic range is mind-blowing.",
        date: "2026-08-21",
        verified: true,
        aspectTags: ["performance", "build"],
        helpful: 39,
        unhelpful: 0
      }
    ]
  },
  {
    id: "prod-23",
    name: "AeroDrone 4K HDR Gimbal Camera",
    brand: "Lumina Optics",
    category: "Cameras",
    price: 54990,
    originalPrice: 62990,
    rating: 4.7,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Foldable 4K HDR drone weighing under 249g with 3-axis mechanical gimbal, omnidirectional obstacle avoidance, and 38-min flight time.",
    specs: {
      "Weight": "249g (No Drone License Required)",
      "Camera": "1/1.3\" CMOS 48MP Photo / 4K 60fps HDR",
      "Flight Time": "38 Minutes per Battery",
      "Transmission": "12km OcuSync 4 HD Transmission"
    },
    aspectScores: [
      { aspect: "battery", label: "Flight Time", score: 4.7, count: 48 },
      { aspect: "build", label: "Folding Design", score: 4.8, count: 52 },
      { aspect: "price", label: "Value / Price", score: 4.6, count: 40 },
      { aspect: "support", label: "Customer Support", score: 4.3, count: 12 },
      { aspect: "performance", label: "4K Footage & Stability", score: 4.9, count: 62 }
    ],
    ratingBreakdown: { 5: 55, 4: 12, 3: 4, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-24",
    name: "ActionCam X Ultra 5K Waterproof",
    brand: "Lumina Optics",
    category: "Cameras",
    price: 31990,
    originalPrice: 35990,
    rating: 4.6,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Rugged action camera featuring 5.3K 60fps video, HyperSmooth Horizon Lock, dual color LCD screens, and 10m waterproof without case.",
    specs: {
      "Video": "5.3K 60fps / 4K 120fps Slow-Mo",
      "Stabilization": "HyperSmooth 6.0 Horizon Lock",
      "Screens": "Front 1.4\" Preview + Rear 2.27\" Touch LCD",
      "Waterproofing": "10 Meters Waterproof Native"
    },
    aspectScores: [
      { aspect: "battery", label: "Cold Weather Battery", score: 4.3, count: 42 },
      { aspect: "build", label: "Rugged Waterproof", score: 4.9, count: 70 },
      { aspect: "price", label: "Value / Price", score: 4.5, count: 45 },
      { aspect: "support", label: "Customer Support", score: 4.1, count: 15 },
      { aspect: "performance", label: "5K Horizon Lock", score: 4.8, count: 76 }
    ],
    ratingBreakdown: { 5: 58, 4: 22, 3: 6, 2: 2, 1: 1 },
    reviews: []
  },
  {
    id: "prod-25",
    name: "VlogMate Studio Cam Compact",
    brand: "Lumina Optics",
    category: "Cameras",
    price: 22499,
    originalPrice: 25999,
    rating: 4.5,
    reviewCount: 47,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Pocket-sized 4K blogging camera with built-in directional 3-capsule microphone, flip-out screen, and face priority auto-exposure.",
    specs: {
      "Sensor": "1.0-inch Stacked CMOS",
      "Lens": "20mm F/2.0 Wide-Angle Fixed",
      "Microphone": "3-Capsule Directional Mic + Windscreen",
      "Weight": "201 grams"
    },
    aspectScores: [
      { aspect: "battery", label: "USB-C Streaming", score: 4.4, count: 22 },
      { aspect: "build", label: "Pocket Ergonomics", score: 4.7, count: 35 },
      { aspect: "price", label: "Value / Price", score: 4.6, count: 30 },
      { aspect: "support", label: "Customer Support", score: 4.2, count: 9 },
      { aspect: "performance", label: "Vlog Focus & Mic", score: 4.7, count: 40 }
    ],
    ratingBreakdown: { 5: 30, 4: 12, 3: 4, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-26",
    name: "Lumina Prime 85mm F/1.4 Lens",
    brand: "Lumina Optics",
    category: "Cameras",
    price: 68500,
    originalPrice: 74990,
    rating: 4.9,
    reviewCount: 38,
    images: [
      "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Ultra-fast portrait prime lens producing buttery smooth bokeh, zero chromatic aberration, and silent linear XD autofocus motors.",
    specs: {
      "Focal Length": "85mm Prime",
      "Max Aperture": "F/1.4",
      "Blades": "11-Blade Circular Aperture",
      "Filter Size": "77mm"
    },
    aspectScores: [
      { aspect: "battery", label: "Optical Mechanical", score: 5.0, count: 12 },
      { aspect: "build", label: "Magnesium Alloy", score: 4.9, count: 30 },
      { aspect: "price", label: "Value / Price", score: 4.4, count: 20 },
      { aspect: "support", label: "Customer Support", score: 4.8, count: 10 },
      { aspect: "performance", label: "Bokeh & Sharpness", score: 5.0, count: 36 }
    ],
    ratingBreakdown: { 5: 35, 4: 2, 3: 1, 2: 0, 1: 0 },
    reviews: []
  },

  // --- SMARTPHONES CATEGORY ---
  {
    id: "prod-27",
    name: "AuraPhone 15 Pro Max",
    brand: "AuraSound",
    category: "Smartphones",
    price: 134900,
    originalPrice: 144900,
    rating: 4.8,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Titanium flagship smartphone featuring 3nm A17 Pro chip, 48MP main camera with 5x optical telephoto zoom, and Action button.",
    specs: {
      "Processor": "A17 Pro 3nm Bionic Chip",
      "Display": "6.7\" Super Retina XDR OLED 120Hz ProMotion",
      "Camera": "48MP Main + 12MP UltraWide + 12MP 5x Telephoto",
      "Material": "Grade-5 Titanium Frame with Ceramic Shield"
    },
    aspectScores: [
      { aspect: "battery", label: "All Day Battery", score: 4.7, count: 110 },
      { aspect: "build", label: "Titanium Frame", score: 4.9, count: 130 },
      { aspect: "price", label: "Value / Price", score: 4.1, count: 70 },
      { aspect: "support", label: "Customer Support", score: 4.8, count: 45 },
      { aspect: "performance", label: "Speed & 5x Camera", score: 4.9, count: 145 }
    ],
    ratingBreakdown: { 5: 125, 4: 22, 3: 6, 2: 2, 1: 1 },
    reviews: []
  },
  {
    id: "prod-28",
    name: "Zenith Fold Z Dual Screen",
    brand: "Zenith Tech",
    category: "Smartphones",
    price: 124990,
    originalPrice: 139990,
    rating: 4.6,
    reviewCount: 84,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Next-gen foldable smartphone unfolding into a 7.6-inch tablet display with armor aluminum hinge, S-Pen support, and IPX8 rating.",
    specs: {
      "Main Display": "7.6\" Dynamic AMOLED 2X 120Hz Foldable",
      "Cover Screen": "6.2\" HD+ AMOLED 120Hz",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "RAM & Storage": "12GB RAM / 512GB UFS 4.0"
    },
    aspectScores: [
      { aspect: "battery", label: "Dual Cell Battery", score: 4.3, count: 40 },
      { aspect: "build", label: "Hinge Durability", score: 4.7, count: 65 },
      { aspect: "price", label: "Value / Price", score: 4.2, count: 35 },
      { aspect: "support", label: "Customer Support", score: 4.5, count: 18 },
      { aspect: "performance", label: "Fold Multitasking", score: 4.8, count: 72 }
    ],
    ratingBreakdown: { 5: 58, 4: 18, 3: 5, 2: 2, 1: 1 },
    reviews: []
  },
  {
    id: "prod-29",
    name: "NovaTab Ultra 12.9 OLED Tablet",
    brand: "Zenith Tech",
    category: "Smartphones",
    price: 74990,
    originalPrice: 84990,
    rating: 4.7,
    reviewCount: 62,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Pro 12.9-inch OLED tablet with 2.8K resolution, magnetic Bluetooth stylus included, quad speakers, and 10,000mAh battery.",
    specs: {
      "Display": "12.9\" 2.8K OLED 120Hz (2800 x 1752)",
      "Stylus": "NovaPen Pro (4096 pressure levels included)",
      "Speakers": "Quad AKG Tuned Dolby Atmos",
      "Battery": "10,000mAh with 67W Fast Charge"
    },
    aspectScores: [
      { aspect: "battery", label: "10,000mAh Battery", score: 4.8, count: 42 },
      { aspect: "build", label: "Aluminum Slim", score: 4.8, count: 50 },
      { aspect: "price", label: "Value / Price", score: 4.6, count: 35 },
      { aspect: "support", label: "Customer Support", score: 4.3, count: 12 },
      { aspect: "performance", label: "Drawing & Digital Art", score: 4.8, count: 55 }
    ],
    ratingBreakdown: { 5: 46, 4: 12, 3: 3, 2: 1, 1: 0 },
    reviews: []
  },
  {
    id: "prod-30",
    name: "PixelVerse Lite 5G Smartphone",
    brand: "CloudStudio",
    category: "Smartphones",
    price: 21999,
    originalPrice: 25999,
    rating: 4.5,
    reviewCount: 140,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Feature-packed budget 5G phone with 64MP OIS main camera, 5000mAh battery, 67W Turbo Charge, and 120Hz FHD+ AMOLED screen.",
    specs: {
      "Processor": "MediaTek Dimensity 7050 5G",
      "Display": "6.67\" FHD+ AMOLED 120Hz",
      "Camera": "64MP OIS Main + 8MP UltraWide",
      "Battery": "5000mAh (67W Fast Charging)"
    },
    aspectScores: [
      { aspect: "battery", label: "Battery & 67W Charge", score: 4.9, count: 110 },
      { aspect: "build", label: "Sleek Glass Back", score: 4.5, count: 85 },
      { aspect: "price", label: "Value / Price", score: 4.9, count: 125 },
      { aspect: "support", label: "Customer Support", score: 4.1, count: 25 },
      { aspect: "performance", label: "5G Speed & Camera", score: 4.5, count: 100 }
    ],
    ratingBreakdown: { 5: 88, 4: 38, 3: 10, 2: 3, 1: 1 },
    reviews: []
  }
];

export const aspectLabels = {
  battery: { name: "Battery Life", icon: "🔋", color: "emerald" },
  build: { name: "Build Quality", icon: "🛠️", color: "blue" },
  price: { name: "Value & Price", icon: "🏷️", color: "purple" },
  support: { name: "Customer Support", icon: "🎧", color: "amber" },
  performance: { name: "Performance", icon: "⚡", color: "rose" }
};
