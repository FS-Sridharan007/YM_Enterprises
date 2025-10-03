import solarPanel from "../assets/products/Highsolar.jpg";
import solarInventor from "../assets/products/solarinventor.jpg";
import solarBatteries from "../assets/products/energystorage.jpg";
import chargeControllers from "../assets/products/smartcontroller.jpg";
import mountingSystems from "../assets/products/durable.jpg";
import decorativeLighting from "../assets/products/Dlight.jpg";
import technicalLighting from "../assets/products/T1.jpg";
import spotLights from "../assets/products/A1.jpg";
import outdoorLighting from "../assets/products/W1.jpg";
import ledStripLights from "../assets/products/v1.jpg";
import SmartLightC from "../assets/products/sl1.jpg";
import SmartHomeA from "../assets/products/sm1.jpg";
import IntelligentT from "../assets/products/it1.jpg";
import HepaAirP from "../assets/products/ap1.jpg";
import AutomatedRobotV from "../assets/products/rv1.jpg";
import SmartSecureL from "../assets/products/lock1.jpg";

export const productCategories = [
  {
    id: "solar-solutions",
    category: "Solar Solutions",
    items: [
      {
        id: "solar-panels",
        title: "High-Efficiency Solar Panels",
        description: "Harness the power of the sun with our high-efficiency solar panels, designed for maximum durability and performance.",
        image: solarPanel,
        price: "₹25,000",
        specifications: [
          { name: "Wattage", value: "450W" },
          { name: "Efficiency", value: "22.5%" },
          { name: "Warranty", value: "25 Years" },
          { name: "Cell Type", value: "Monocrystalline" }
        ]
      },
      {
        id: "solar-inverters",
        title: "Advanced Solar Inverters",
        description: "The heart of your solar system. Our advanced inverters efficiently convert DC to usable AC power, ensuring maximum energy yield.",
        image: solarInventor,
        price: "₹45,000",
        specifications: [
          { name: "Max AC Power", value: "5000W" },
          { name: "MPPT Voltage Range", value: "100-550V" },
          { name: "Warranty", value: "10 Years" },
          { name: "Type", value: "String Inverter" }
        ]
      },
      {
        id: "solar-batteries",
        title: "Energy Storage Batteries",
        description: "Store excess solar energy for use at night or during outages with our reliable and long-lasting battery solutions.",
        image: solarBatteries,
        price: "₹80,000",
        specifications: [
          { name: "Capacity", value: "5 kWh" },
          { name: "Technology", value: "Lithium-ion" },
          { name: "Cycle Life", value: "6000 cycles" },
          { name: "Depth of Discharge", value: "95%" }
        ]
      },
      {
        id: "charge-controllers",
        title: "Smart Charge Controllers",
        description: "Protect your batteries and optimize the charging process with our intelligent solar charge controllers.",
        image: chargeControllers,
        price: "₹8,500",
        specifications: [
          { name: "Max Current", value: "40A" },
          { name: "System Voltage", value: "12/24V Auto" },
          { name: "Type", value: "MPPT" }
        ]
      },
      {
        id: "mounting-systems",
        title: "Durable Mounting Systems",
        description: "Secure your solar array with our robust mounting systems, engineered for all roof types and weather conditions.",
        image: mountingSystems,
        price: "₹12,000",
        specifications: [
          { name: "Material", value: "Anodized Aluminum" },
          { name: "Application", value: "Pitched & Flat Roofs" },
          { name: "Wind Load", value: "Up to 150 km/h" }
        ]
      }
    ]
  },
  {
    id: "lighting-systems",
    category: "Lighting Systems",
    items: [
      {
        id: "decorative-lighting",
        title: "Decorative Lighting",
        description: "Transform any space with our exquisite range of decorative lighting, from statement chandeliers to elegant pendants.",
        image: decorativeLighting,
        price: "₹5,000 - ₹50,000",
        specifications: [
          { name: "Style", value: "Modern, Vintage, Industrial" },
          { name: "Material", value: "Glass, Metal, Crystal" }
        ]
      },
      {
        id: "technical-lighting",
        title: "Technical Lighting",
        description: "Experience precision and performance with our technical lighting solutions, ideal for commercial and architectural applications.",
        image: technicalLighting,
        price: "Starting at ₹3,000",
        specifications: [
          { name: "Application", value: "Track, Downlight, Panel" },
          { name: "CRI", value: ">90" }
        ]
      },
      {
        id: "spot-lights",
        title: "Accent Spot Lights",
        description: "Draw attention to what matters most. Perfect for accentuating artwork, architectural features, or retail displays.",
        image: spotLights,
        price: "₹1,800",
        specifications: [
          { name: "Beam Angle", value: "15°, 24°, 36°" },
          { name: "Lumen Output", value: "800 lm" }
        ]
      },
      {
        id: "outdoor-lighting",
        title: "Weatherproof Outdoor Lighting",
        description: "Enhance the beauty and security of your exterior spaces with our durable outdoor lighting, built to withstand the elements.",
        image: outdoorLighting,
        price: "Starting at ₹2,500",
        specifications: [
          { name: "IP Rating", value: "IP65 Waterproof" },
          { name: "Material", value: "Die-cast Aluminum" }
        ]
      },
      {
        id: "led-strip-lights",
        title: "Versatile LED Strip Lights",
        description: "Unleash your creativity with flexible LED strips, perfect for cove lighting, under-cabinet illumination, and dynamic ambient effects.",
        image: ledStripLights,
        price: "₹1,200 per 5m roll",
        specifications: [
          { name: "Colors", value: "RGB, Warm White, Cool White" },
          { name: "Features", value: "Dimmable, Cuttable" }
        ]
      },
      {
        id: "smart-lighting",
        title: "Smart Lighting Control",
        description: "Control your lighting with your voice or smartphone. Set schedules, change colors, and create the perfect ambiance with ease.",
        image: SmartLightC,
        price: "Starting at ₹999 per bulb",
        specifications: [
          { name: "Connectivity", value: "Wi-Fi, Bluetooth" },
          { name: "Compatibility", value: "Alexa, Google Assistant" }
        ]
      }
    ]
  },
  {
    id: "home-living",
    category: "Home & Living",
    items: [
      {
        id: "home-appliances",
        title: "Smart Home Appliances",
        description: "Elevate your home with our curated collection of smart appliances, chosen for quality, durability, and modern convenience.",
        image: SmartHomeA,
        price: "Varies",
        specifications: [
          { name: "Products", value: "Smart Refrigerators, Washing Machines" },
          { name: "Features", value: "Energy Efficient, App Control" }
        ]
      },
      {
        id: "smart-thermostats",
        title: "Intelligent Thermostats",
        description: "Optimize your home's climate for comfort and energy savings with our learning thermostats.",
        image: IntelligentT,
        price: "₹15,000",
        specifications: [
          { name: "Learning", value: "Auto-Schedule, Home/Away Assist" },
          { name: "Control", value: "Remote via App" }
        ]
      },
      {
        id: "air-purifiers",
        title: "HEPA Air Purifiers",
        description: "Breathe cleaner, healthier air with our advanced air purifiers that remove allergens, dust, and pollutants.",
        image: HepaAirP,
        price: "₹12,500",
        specifications: [
          { name: "Filter", value: "True HEPA H13" },
          { name: "Coverage", value: "Up to 400 sq. ft." }
        ]
      },
      {
        id: "robot-vacuums",
        title: "Automated Robot Vacuums",
        description: "Keep your floors spotless with minimal effort using our smart, self-navigating robot vacuums.",
        image: AutomatedRobotV,
        price: "₹28,000",
        specifications: [
          { name: "Navigation", value: "LIDAR Mapping" },
          { name: "Features", value: "Self-charging, Mopping Function" }
        ]
      },
      {
        id: "smart-locks",
        title: "Secure Smart Locks",
        description: "Enhance your home security with keyless entry and remote access control through our reliable smart locks.",
        image: SmartSecureL,
        price: "₹18,000",
        specifications: [
          { name: "Access", value: "Fingerprint, PIN, App, Key" },
          { name: "Security", value: "Auto-lock, Tamper Alert" }
        ]
      }
    ]
  }
];