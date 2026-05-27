// Waaree product data — update images later
import Waree3Kw from "../assets/products/Waree/Waree.webp"; // placeholder — replace with Waaree image
import Waree5Kw from "../assets/products/Waree/Waree.webp"; // placeholder — replace with Waaree image

export const wareeCategories = [
  {
    id: "waree-products",
    category: "Waaree Products",
    items: [
      {
        id: "waree-radiance-lite-3kw",
        title: "Waaree Radiance Lite 3kW On-Grid Solar Kit",
        subtitle: "6 Modules (1-Phase) | 560–580Wp Panels",
        tagline: "Complete Rooftop Solution",
        description:
          "The Waaree Radiance Lite 3kW On-Grid Solar Kit is a complete rooftop solar solution designed for residential and small commercial installations. Featuring 6 high-efficiency 560–580Wp monocrystalline panels with a single-phase grid-tied inverter, this kit delivers reliable, clean energy with maximum performance. The package includes solar panels, inverter, mounting structure, earthing kit, and all necessary accessories — everything you need for a hassle-free solar installation.",
        images: [
          { src: Waree3Kw, name: "Waaree 3kW Solar Kit" }, // replace later
        ],
        specs: [
          "6 × 560–580Wp monocrystalline solar panels",
          "3kW single-phase on-grid inverter",
          "Complete mounting structure included",
          "Earthing kit & DC/AC cables included",
          "High-efficiency module technology",
          "25-year panel performance warranty",
          "Weather-resistant and durable design",
          "Easy rooftop installation",
        ],
      },
      {
        id: "waree-radiance-lite-5kw",
        title: "Waaree Radiance Lite 5kW On-Grid Solar Kit",
        subtitle: "10 Modules (1-Phase) | 560–580Wp Panels",
        tagline: "Complete Rooftop Solution",
        description:
          "Power up your home or business with the Waaree Radiance Lite 5kW On-Grid Solar Kit. Equipped with 10 high-efficiency 560–580Wp monocrystalline panels and a robust single-phase grid-tied inverter, this kit delivers superior energy output for larger installations. Includes all mounting hardware, earthing, cabling, and accessories for a turnkey solar rooftop setup — built to perform for decades.",
        images: [
          { src: Waree5Kw, name: "Waaree 5kW Solar Kit" }, // replace later
        ],
        specs: [
          "10 × 560–580Wp monocrystalline solar panels",
          "5kW single-phase on-grid inverter",
          "Complete mounting structure included",
          "Earthing kit & DC/AC cables included",
          "High-efficiency module technology",
          "25-year panel performance warranty",
          "Weather-resistant and durable design",
          "Ideal for larger homes & commercial setups",
        ],
      },
    ],
  },
];
