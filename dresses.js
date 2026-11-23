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
    color: "#FBB2C2",
  },
  {
    name: "Kebaya Kutubaru Sage",
    category: "Kebaya",
    occasion: "Wisuda / Graduation",
    sizes: "M, L",
    price: 250000,
    image: "",
    color: "#F5869D",
  },
  {
    name: "Kebaya Encim Bordir",
    category: "Kebaya",
    occasion: "Lamaran / Engagement",
    sizes: "S, M",
    price: 275000,
    image: "",
    color: "#FBABB3",
  },
  {
    name: "Kebaya Modern Maroon",
    category: "Kebaya",
    occasion: "Kondangan / Wedding guest",
    sizes: "M, L, XL",
    price: 300000,
    image: "",
    color: "#AC3C5C",
  },
  {
    name: "Dusty Pink Evening Gown",
    category: "Dress",
    occasion: "Prom / Gala",
    sizes: "S, M",
    price: 400000,
    image: "",
    color: "#F598AB",
  },
  {
    name: "Batik Midi Dress",
    category: "Dress",
    occasion: "Formal / Office event",
    sizes: "S, M, L",
    price: 200000,
    image: "",
    color: "#EC6289",
  },
  {
    name: "Emerald Satin Dress",
    category: "Dress",
    occasion: "Party / Dinner",
    sizes: "M, L",
    price: 275000,
    image: "",
    color: "#E33872",
  },
  {
    name: "Navy Lace Bridesmaid Dress",
    category: "Dress",
    occasion: "Bridesmaid",
    sizes: "S, M, L, XL",
    price: 225000,
    image: "",
    color: "#AC3C5C",
  },
];
