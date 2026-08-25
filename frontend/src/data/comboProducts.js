// Combo offer data — update images later
// import Battery1 from "../assets/products/Combo/combo1.png"; // Microtek image — removed
import Battery2 from "../assets/products/Combo/combo2.png";
import exide1 from "../assets/products/Exide/Exide1.jpg";
import exideinverter from "../assets/products/Combo/exideinverter.webp";
import exide2 from "../assets/products/Exide/Exide2.jpg";
import exide3 from "../assets/products/Exide/Exide3.jpg";
import exide4 from "../assets/products/Exide/Exide4.jpg";
import exide5 from "../assets/products/Exide/Exide5.jpg";
import exide6 from "../assets/products/Exide/Exide6.jpg";
import exide7 from "../assets/products/Exide/Exide7.jpg";

export const comboOffers = [
  {
    id: "microtek-enzolt-combo",
    title: "Exide + Enzolt Combo",
    tagline: "Best Value Combo",
    description:
      "Get the Exide inverter paired with the Enzolt Lithium Battery 12V 90AH at an unbeatable combo price. Reliable backup power with long-lasting lithium technology — perfect for homes and small offices.",
    includedProducts: [
      { name: "Exide Inverter", qty: 1 },
      { name: "Enzolt Lithium Battery 12V 90AH", qty: 1 },
    ],
    comboPrice: 28000,
    originalPrice: 35000,
    savings: 7000,
    stock: 10,
    badge: "Best Value",
    showAllOnCard: true,       // show both images side-by-side on the card
    images: [
      { src: exideinverter, name: "Exide Inverter & Battery Combo" },
      { src: Battery2, name: "Enzolt Battery" },
    ],
  },
  {
    id: "exide-inverter-battery-combo",
    title: "Exide Star 900VA + IMTT1500 150Ah Combo",
    tagline: "42M Inverter & 60M Battery Warranty",
    description:
      "Exide STAR12V900 900VA/12V Pure Sine Wave Inverter paired with the INVA Master IMTT1500 150Ah 12V Tall Tubular Battery. Pure Sine Wave technology ensures noise-free operation and appliance safety, while heavy-duty tubular plates deliver prolonged battery backup with low maintenance.",
    includedProducts: [
      { name: "Exide STAR12V900 900VA/12V Pure Sine Wave Inverter", qty: 1 },
      { name: "INVA Master IMTT1500 150Ah 12V Tall Tubular Battery", qty: 1 },
    ],
    comboPrice: 21094,
    originalPrice: 29896,
    savings: 8802,
    stock: 12,
    badge: "Popular",
    images: [
      { src: exide1, name: "Exide Inverter & Battery Combo" },
      { src: exide2, name: "Exide STAR12V900 Front View" },
      { src: exide3, name: "INVA Master IMTT1500 Battery" },
      { src: exide4, name: "IMTT1500 Side View" },
      { src: exide5, name: "Exide Inverter Display Panel" },
      { src: exide6, name: "Product Specifications & Terminals" },
      { src: exide7, name: "Complete Package & Accessories" },
    ],
  },
];
