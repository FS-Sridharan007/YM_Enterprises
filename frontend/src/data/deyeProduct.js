// DEYE product data — update images later
import DeyeInverter1 from "../assets/products/Deye/Deye.png";
import DeyeInverter2 from "../assets/products/Deye/Deye.png";

export const deyeCategories = [
  {
    id: "deye-products",
    category: "DEYE Products",
    items: [
      {
        id: "SUN-3.6-6.2K-G05P1-EU-AM2",
        title: "SUN-3.6/4/4.2/4.6/5/5.2/6/6.2K-G05P1-EU-AM2",
        subtitle: "Single Phase String Inverter",
        tagline: "Inverter | Single Phase",
        description:
          "The DEYE SUN G05P1-EU-AM2 series single phase string inverter delivers industry-leading performance with 2 MPP trackers and up to 97.5% maximum efficiency. Engineered for residential and small commercial solar installations, it features zero export and VSG application support, optional string intelligent monitoring, wide output voltage range, optional Anti-PID function, and a low start-up voltage of just 80V — ensuring early morning and late evening energy harvesting.",
        images: [
          { src: DeyeInverter1, name: "DEYE SUN G05P1 Inverter" }, // replace later
        ],
        specs: [
          "2 MPP trackers, Max. efficiency up to 97.5%",
          "Zero export application, VSG application",
          "String intelligent monitoring (optional)",
          "Wide output voltage range",
          "Anti-PID function (Optional)",
          "Low start-up voltage of 80V",
        ],
        variants: [
          {
            id: "3.6KW",
            label: "3.6 KW",
            images: [{ src: DeyeInverter1, name: "3.6KW Model" }],
          },
          {
            id: "4KW",
            label: "4 KW",
            images: [{ src: DeyeInverter1, name: "4KW Model" }],
          },
          {
            id: "4.2KW",
            label: "4.2 KW",
            images: [{ src: DeyeInverter1, name: "4.2KW Model" }],
          },
          {
            id: "4.6KW",
            label: "4.6 KW",
            images: [{ src: DeyeInverter1, name: "4.6KW Model" }],
          },
          {
            id: "5KW",
            label: "5 KW",
            images: [{ src: DeyeInverter2, name: "5KW Model" }],
          },
          {
            id: "5.2KW",
            label: "5.2 KW",
            images: [{ src: DeyeInverter2, name: "5.2KW Model" }],
          },
          {
            id: "6KW",
            label: "6 KW",
            images: [{ src: DeyeInverter2, name: "6KW Model" }],
          },
          {
            id: "6.2KW",
            label: "6.2 KW",
            images: [{ src: DeyeInverter2, name: "6.2KW Model" }],
          },
        ],
      },
    ],
  },
];
