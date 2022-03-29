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
    price: 1227,
    categoryName: "Top",
    isSoldOut: true,
    rating: 3.6
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-2.jpg",
    title: "Sangria",
    subtitle: "Pink Georgette Ruffled Saree",
    price: 1349,
    categoryName: "Sarees",
    isSoldOut:true,
    rating: 4
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-3.jpg",
    title: "Ahalyaa",
    subtitle: "Women Burgundy & Golden Printed Kurta with Trousers",
    price: 1500,
    categoryName: "Kurta Set",
    isSoldOut:false,
    rating: 3.1
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-4.jpg",
    title: "Ira Soleil",
    subtitle: "Pink & Gold-Coloured Ethnic Motifs Peplum Top",
    price: 1199,
    categoryName: "Top",
    isSoldOut: false,
    rating: 4.8,
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-5.jpg",
    title: "Marie Claire",
    subtitle: "Women Pink Printed Top",
    price: 545,
    categoryName: "Top",
    isSoldOut:true,
    rating: 2.4
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-6.jpg",
    title: "STREET 9",
    subtitle: "Women Blue Flared Mid-Rise Slash Knee Stretchable Jeans",
    price: 4000,
    categoryName: "Jeans",
    isSoldOut: true,
    rating: 2.5
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-7.jpg",
    title: "SASSAFRAS",
    subtitle: "Women Fuchsia Relaxed Fit High-Rise Jeans",
    price: 999,
    categoryName: "Jeans",
    isSoldOut:false,
    rating: 1.5
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-8.jpg",
    title: "Sangria",
    subtitle: "Women Purple Solid Georgette Saree with Embellished Belt ",
    price: 3500,
    categoryName: "Sarees",
    isSoldOut:true,
    rating: 4.3
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-9.jpg",
    title: "Suta",
    subtitle: "Pink & Golden Solid Zari Pure Linen Saree",
    price: 5500,
    categoryName: "Sarees",
    isSoldOut: false,
    rating: 2.5,
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-10.jpg",
    title: "INDYA",
    subtitle: "Indya Navy Sequin Embroidered Panel Kurta ",
    price: 1500,
    categoryName: "Kurta Set",
    isSoldOut:false,
    rating: 2.9
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-11.jpg",
    title: "Anouk",
    subtitle: "Navy Blue Printed Peplum Top",
    price: 700,
    categoryName: "Top",
    isSoldOut:true,
    rating: 1.9
  },
  {
    _id: uuid(),
    image:"/assets/products/prod-12.jpg",
    title: "La Zoire",
    subtitle: "Lime Green Mini A-Line Dress",
    price: 15000,
    categoryName: "Dresses",
    isSoldOut:false,
    rating: 3.9
  },
];
