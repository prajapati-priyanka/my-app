import axios from "axios";
import { useProduct } from "../../context/product-context";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ products }) => {
  const navigate = useNavigate();
  const { filterDispatch } = useProduct();

  const getCategory = async (products) => {
    try {
      const response = await axios.get(`/api/categories/${products._id}`);
      if (response.status === 200) {
        filterDispatch({
          type: "SORT_BY_CATEGORY",
          payload: response.data.category.categoryName,
        });
      } else {
        throw new Error("Can't process the request");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const { categoryName, image } = products;

  return (
    <>
      <div
        className="card ecommerce-card"
        onClick={() => {
          navigate("/product");
          getCategory(products);
        }}
      >
        <div className="card-with-text-overlay">
          <figure className="card-header">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="text-overlay lg-text">{categoryName}</div>
      </div>
    </>
  );
};

export { CategoryCard };
