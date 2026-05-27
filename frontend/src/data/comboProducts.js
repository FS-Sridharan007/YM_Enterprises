// Combo offer data — update images later
import Battery1 from "../assets/products/Combo/combo1.png";
import Battery2 from "../assets/products/Combo/combo2.png";

export const comboOffers = [
  {
    id: "microtek-enzolt-combo",
    title: "Microtek + Enzolt Combo",
    tagline: "Best Value Combo",
    description:
      "Get the Microtek 12V 900VA Pure Sine Wave Inverter paired with the Enzolt Lithium Battery 12V 90AH at an unbeatable combo price. Reliable backup power with long-lasting lithium technology — perfect for homes and small offices.",
    includedProducts: [
      { name: "Microtek 12V 900VA Pure Sine Wave Inverter", qty: 1 },
      { name: "Enzolt Lithium Battery 12V 90AH", qty: 1 },
    ],
    comboPrice: 28000,
    originalPrice: 35000,
    savings: 7000,
    stock: 10,
    badge: "Best Value",
    images: [
      { src: Battery1, name: "Microtek Inverter" },   // replace with Microtek image later
      { src: Battery2, name: "Enzolt Battery" },       // replace with Enzolt combo image later
    ],
  },
];
