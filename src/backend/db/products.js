import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:"/assets/products/prod-1.jpg",
    title: "Sangria",
    subtitle: "Full Sleeve Padded Jacket",
    priceAfterDiscount: 989,
    priceBeforeDiscount:3299,
    discount: 70,
    categoryName: "Top",
    isSoldOut: true,
    rating: 3.6
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-2.jpg",
    title: "Sangria",
    subtitle: "Pink Georgette Ruffled Saree",
    priceAfterDiscount: 1399,
    priceBeforeDiscount:3499,
    discount: 60,
    categoryName: "Sarees",
    isSoldOut:true,
    rating: 4
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-3.jpg",
    title: "Ahalyaa",
    subtitle: "Women Burgundy & Golden Printed Kurta with Trousers",
    priceAfterDiscount: 1540,
    priceBeforeDiscount:5500,
    discount: 72,
    categoryName: "Kurta Set",
    isSoldOut:false,
    rating: 3.1
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-4.jpg",
    title: "Ira Soleil",
    subtitle: "Pink & Gold-Coloured Ethnic Motifs Peplum Top",
    priceAfterDiscount: 1499,
    priceBeforeDiscount:2998,
    discount: 50,
    categoryName: "Top",
    isSoldOut: false,
    rating: 4.8,
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-5.jpg",
    title: "Marie Claire",
    subtitle: "Women Pink Printed Top",
    priceAfterDiscount: 299,
    priceBeforeDiscount:499,
    discount: 40,
    categoryName: "Top",
    isSoldOut:true,
    rating: 2.4
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-6.jpg",
    title: "STREET 9",
    subtitle: "Women Blue Flared Mid-Rise Slash Knee Stretchable Jeans",
    priceAfterDiscount: 1299,
    priceBeforeDiscount:2599,
    discount: 50,
    categoryName: "Jeans",
    isSoldOut: true,
    rating: 2.5
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-7.jpg",
    title: "SASSAFRAS",
    subtitle: "Women Fuchsia Relaxed Fit High-Rise Jeans",
    priceAfterDiscount: 839,
    priceBeforeDiscount:2099,
    discount: 60,
    categoryName: "Jeans",
    isSoldOut:false,
    rating: 1.5
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-8.jpg",
    title: "Sangria",
    subtitle: "Women Purple Solid Georgette Saree with Embellished Belt ",
    priceAfterDiscount: 4074,
    priceBeforeDiscount:9074,
    discount: 45,
    categoryName: "Sarees",
    isSoldOut:true,
    rating: 4.3
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-9.jpg",
    title: "Suta",
    subtitle: "Pink & Golden Solid Zari Pure Linen Saree",
    priceAfterDiscount: 5099,
    priceBeforeDiscount:6799,
    discount: 25,
    categoryName: "Sarees",
    isSoldOut: false,
    rating: 2.5,
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-10.jpg",
    title: "INDYA",
    subtitle: "Indya Navy Sequin Embroidered Panel Kurta ",
    priceAfterDiscount: 849,
    priceBeforeDiscount:1699,
    discount: 50,
    categoryName: "Kurta Set",
    isSoldOut:false,
    rating: 2.9
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-11.jpg",
    title: "Anouk",
    subtitle: "Navy Blue Printed Peplum Top",
    priceAfterDiscount: 599,
    priceBeforeDiscount:1499,
    discount: 60,
    categoryName: "Top",
    isSoldOut:true,
    rating: 1.9
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-12.jpg",
    title: "La Zoire",
    subtitle: "Lime Green Mini A-Line Dress",
    priceAfterDiscount: 2249,
    priceBeforeDiscount:2999,
    discount: 25,
    categoryName: "Dresses",
    isSoldOut:false,
    rating: 3.9
  },
];
