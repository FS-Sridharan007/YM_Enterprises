import Battery1 from "../assets/products/Feston/Feston 3Kw.png";
import Battery2 from "../assets/products/Feston/Feston 5Kw.png";

export const festonCategories = [
  {
    id: "feston-products",
    category: "Feston Products",
    items: [
      {
        id: "3KW-String-Inverter",
        title: "3KW Solar On-Grid Inverters - Single Phase",
        subtitle: "FE- 1.5 / 2.2 / 2.7 / 3 / 3.3 / 3.6 / 4 -1P-OG",
        // tagline: "Low Voltage | Single Phase",
        description:
          "Compact Power. Smart Efficiency. Perfect balance of performance and simplicity for home solar systems. The Feston 3KW Enfield Series offers highly-efficient, compact, and grid-compatible solar conversion with smart monitoring and robust protection. Ideal for homes and small businesses.",
        price: 19990,
        originalPrice: 22990,
        stock: 20,
        images: [
          { src: Battery1, name: "Feston 3Kw" },
        ],
        specs: [
          "Up to 97.5% efficiency.",
          "1 MPPT tracker, wide range (70–500V)",
          "Low start-up voltage: 80V",
          "Zero export & VSG support",
          "Anti-PID function, IP65 protection",
          "Natural cooling",
          "10-year warranty",
        ],
        variants: [
          {
            id: "1.5 - 4 KW",
            label: "1.5 - 4 KW model",
            price: 19990,
            originalPrice: 22990,
            stock: 20,
            images: [
              { src: Battery1, name: "1.5 - 4 KW" },
            ],
          },
        ],
      },
      {
        id: "5KW-String-Inverter",
        title: "5KW Solar On-Grid Inverters - THREE Phase",
        subtitle: "FE- 3.6 / 4 / 4.6 / 5 / 5.2 / 6 / 6.2 -1P-OG",
        // tagline: "Low Voltage | Single Phase",
        description:
          "Empower Your Home with Smart Solar. Seamless grid connection with intelligent energy management. The Feston 5KW Enfield Series delivers efficient solar energy conversion with grid support. With wide voltage flexibility, low start-up thresholds, and optional smart monitoring, it's ideal for homes and businesses aiming for reliable, grid-tied solar power.",
        price: 33590,
        originalPrice: 37990,
        stock: 12,
        images: [
          { src: Battery2, name: "Feston 5kw" },
        ],
        specs: [
          "Up to 97.5% efficiency",
          "1 MPPT tracker, wide range (70–550V)",
          "Low start-up voltage: 80V",
          "Zero export & VSG support",
          "Anti-PID function, IP65 protection",
          "Natural cooling, ultra-quiet (≤35 dB)",
          "10-year warranty",
        ],
        variants: [
          {
            id: "4 - 8KW",
            label: "4 - 8KW Model",
            price: 33590,
            originalPrice: 37990,
            stock: 12,
            images: [
              { src: Battery2, name: "5KW Model" },
            ],
          },
        ],
      },
    ],
  },
];
