import Battery1 from "../assets/products/Battery/Battery1.png";
import Battery2 from "../assets/products/Battery/Battery2.png";

export const enzoltCategories = [
  {
    id: "enzolt-products",
    category: "Enzolt Products",
    items: [
      {
        id: "enzolt-Lifepo4",
        title: "Enzolt Energy (LiFePO4)",
        description: "High-performance LiFePO4 backup battery for home & solar.",

        // DEFAULT product values (used only if variants missing)
        price: 23769,
        originalPrice: 28990,
        stock: 15,
        images: [
          { src: Battery1, name: "Enzolt LiFePO4 Front" },
          { src: Battery2, name: "Enzolt LiFePO4 Side" },
        ],

        // ✅ VARIANTS ADDED HERE (12W & 24W)
        variants: [
          {
            id: "12W",
            label: "12W Model",
            price: 18990,               // sample price – update later
            originalPrice: 21990,
            stock: 25,
            images: [
              { src: Battery1, name: "12W Front" },
              { src: Battery2, name: "12W Side" },
            ],
          },
          {
            id: "24W",
            label: "24W Model",
            price: 23769,               // your existing price
            originalPrice: 28990,
            stock: 15,
            images: [
              { src: Battery1, name: "24W Front" },
              { src: Battery2, name: "24W Side" },
            ],
          }
        ]
      },
    ],
  },
];
