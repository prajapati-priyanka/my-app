import "./Categories.css";
import { CategoryCard } from "../category-card/CategoryCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");

        if (response.status === 200) {
          setCategories([...response.data.categories]);
        } else {
          throw new Error("Couldn't process the request ");
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <section className="product-category">
      <h2 className="category-heading text-center">Categories To Bag</h2>
      <div className="category-display">
        {categories.map((product) => (
          <CategoryCard products={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export { Categories };
