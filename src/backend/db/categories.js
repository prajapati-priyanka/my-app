import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Top",
    image:"/assets/categories/top.jpg"
   
  },
  {
    _id: uuid(),
    categoryName: "Jeans",
    image:"/assets/categories/jeans.jpg"
    
  },
  {
    _id: uuid(),
    categoryName: "Dresses",
    image:"/assets/categories/dresses.jpg"
   
  },
  {
    _id: uuid(),
    categoryName: "Kurta Set",
    image:"/assets/categories/kurta.jpg"
    
  },
  {
    _id: uuid(),
    categoryName: "Sarees",
    image:"/assets/categories/saree.jpg"
   
  },
];
