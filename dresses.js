// ============================================================
//  KEMAYU RENTS – SETTINGS & DRESS CATALOG
//  This is the only file you need to edit to update the site.
// ============================================================

// 1) YOUR WHATSAPP NUMBER
//    Country code + number, digits only, no "+", no spaces, no leading 0.
//    Example: 0812-3456-7890  ->  "6281234567890"
//    ⚠️ PLACEHOLDER – replace with your real number!
const WHATSAPP_NUMBER = "6281234567890";

// 2) YOUR DRESS COLLECTION
//    Copy one { ... } block to add a dress. Delete a block to remove one.
//    - category: "Kebaya" or "Dress" (used by the filter buttons)
//    - price:    rental price in Rupiah, numbers only (250000 = Rp 250.000)
//    - image:    put a photo in the "images" folder and write its name,
//                e.g. "images/kebaya-kartini.jpg". Leave "" to show a
//                colored placeholder instead.
//    - color:    placeholder color (only used when there is no image)
//    ⚠️ These are SAMPLE dresses – replace them with your real collection.
const DRESSES = [
  {
    name: "Kebaya Kartini Putih",
    category: "Kebaya",
    occasion: "Akad / Wedding",
    sizes: "S, M, L",
    price: 350000,
    image: "",
    color: "#e9e2d6",
  },
  {
    name: "Kebaya Kutubaru Sage",
    category: "Kebaya",
    occasion: "Wisuda / Graduation",
    sizes: "M, L",
    price: 250000,
    image: "",
    color: "#a8b89a",
  },
  {
    name: "Kebaya Encim Bordir",
    category: "Kebaya",
    occasion: "Lamaran / Engagement",
    sizes: "S, M",
    price: 275000,
    image: "",
    color: "#d9a5a0",
  },
  {
    name: "Kebaya Modern Maroon",
    category: "Kebaya",
    occasion: "Kondangan / Wedding guest",
    sizes: "M, L, XL",
    price: 300000,
    image: "",
    color: "#7a2e3a",
  },
  {
    name: "Dusty Pink Evening Gown",
    category: "Dress",
    occasion: "Prom / Gala",
    sizes: "S, M",
    price: 400000,
    image: "",
    color: "#d8a7a7",
  },
  {
    name: "Batik Midi Dress",
    category: "Dress",
    occasion: "Formal / Office event",
    sizes: "S, M, L",
    price: 200000,
    image: "",
    color: "#8a6a4a",
  },
  {
    name: "Emerald Satin Dress",
    category: "Dress",
    occasion: "Party / Dinner",
    sizes: "M, L",
    price: 275000,
    image: "",
    color: "#2f6b57",
  },
  {
    name: "Navy Lace Bridesmaid Dress",
    category: "Dress",
    occasion: "Bridesmaid",
    sizes: "S, M, L, XL",
    price: 225000,
    image: "",
    color: "#2c3a5c",
  },
];
