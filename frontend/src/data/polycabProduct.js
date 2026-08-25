import polycab3kw from "../assets/products/Polycab/Polycab3kw.webp";
import polycab5kw from "../assets/products/Polycab/Polycab5kw.webp";
import polycab6kw from "../assets/products/Polycab/Polycab6kw.webp";

export const polycabCategories = [
  {
    id: "polycab-products",
    category: "Polycab Products",
    items: [
      {
        id: "polycab-3kw-solar-inverter",
        title: "3 kW, Single Phase, Single MPPT Grid‑Tie Inverter",
        subtitle: "Single Phase On-Grid Inverter",
        tagline: "High Efficiency | Single Phase",
        description:
          "The Polycab 3KW Single Phase On-Grid Solar Inverter is engineered for high reliability, optimal power extraction, and intelligent monitoring. Built for residential and small enterprise solar setups, it delivers high conversion efficiency, low start-up voltage, and robust weather resistance.",
        images: [{ src: polycab3kw, name: "Polycab 3KW Solar Inverter" }],
        specs: [
          "3KW Rated Power Output",
          "Single Phase On-Grid Operation",
          "High Efficiency power conversion up to 97.8%",
          "IP65 protection rating for reliable outdoor installation",
          "Built-in WiFi / RS485 intelligent monitoring support",
          "Low start-up voltage & wide MPPT operational range",
        ],
        variants: [
          {
            id: "3KW",
            label: "3 KW",
            images: [{ src: polycab3kw, name: "Polycab 3KW Model" }],
          },
          {
            id: "5KW",
            label: "5 KW",
            images: [{ src: polycab5kw, name: "Polycab 5KW Model" }],
          },
          {
            id: "6KW",
            label: "6 KW",
            images: [{ src: polycab6kw, name: "Polycab 6KW Model" }],
          },
        ],
      },
      {
        id: "polycab-5kw-solar-inverter",
        title: "5 kW, Single Phase, Dual MPPT, Grid‑Tie Inverter",
        subtitle: "Single Phase On-Grid Inverter",
        tagline: "Heavy Duty | High Performance",
        description:
          "The Polycab 5KW Solar Inverter is designed for modern home and commercial solar setups. Featuring dual MPPT trackers, advanced thermal management, high efficiency conversion, and comprehensive grid protection for maximum energy yield.",
        images: [{ src: polycab5kw, name: "Polycab 5KW Solar Inverter" }],
        specs: [
          "5KW Rated Power Output",
          "Dual MPPT trackers for maximum solar energy harvest",
          "Maximum efficiency up to 98.2%",
          "Compact, lightweight & IP65 weatherproof enclosure",
          "Real-time mobile app and web portal monitoring",
          "Advanced surge, over-voltage, and short-circuit protection",
        ],
        variants: [
          {
            id: "3KW",
            label: "3 KW",
            images: [{ src: polycab3kw, name: "Polycab 3KW Model" }],
          },
          {
            id: "5KW",
            label: "5 KW",
            images: [{ src: polycab5kw, name: "Polycab 5KW Model" }],
          },
          {
            id: "6KW",
            label: "6 KW",
            images: [{ src: polycab6kw, name: "Polycab 6KW Model" }],
          },
        ],
      },
      {
        id: "polycab-6kw-solar-inverter",
        title: "6 kW, Single Phase, Single MPPT, Grid‑Tie Inverter",
        subtitle: "High Capacity On-Grid Inverter",
        tagline: "Commercial & Industrial Grade",
        description:
          "The Polycab 6KW Solar Inverter offers high power capacity with smooth grid synchronization, intelligent energy management, and ultra-quiet silent operation for heavy-duty residential and commercial applications.",
        images: [{ src: polycab6kw, name: "Polycab 6KW Solar Inverter" }],
        specs: [
          "6KW Max Continuous Power Output",
          "Dual MPPT with high tracking accuracy",
          "Maximum efficiency up to 98.4%",
          "Zero Export capability support",
          "Natural convection cooling design for silent operation",
          "IP65 enclosure with multi-layered safety protections",
        ],
        variants: [
          {
            id: "3KW",
            label: "3 KW",
            images: [{ src: polycab3kw, name: "Polycab 3KW Model" }],
          },
          {
            id: "5KW",
            label: "5 KW",
            images: [{ src: polycab5kw, name: "Polycab 5KW Model" }],
          },
          {
            id: "6KW",
            label: "6 KW",
            images: [{ src: polycab6kw, name: "Polycab 6KW Model" }],
          },
        ],
      },
    ],
  },
];
