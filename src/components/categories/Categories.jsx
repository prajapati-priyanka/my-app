import "./Categories.css";
import { useCategory } from "../../context/categories-context";
import { CategoryCard } from "../category-card/CategoryCard";

const Categories = () => {
    const {categoryState} = useCategory();

    const {categoryItem} = categoryState;
    return (
        <section className="product-category">
            <h2 className="category-heading text-center">Categories To Bag</h2>
            <div className="category-display">
             { categoryItem.map(product => (
                 <CategoryCard products = {product} key={product.id} />
             ))  }

            </div>
    </section>
    )
}

export {Categories};
