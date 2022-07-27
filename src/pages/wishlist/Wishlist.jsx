import { Nav, WishlistCard, Footer } from "../../components";
import { useWishList } from "../../context";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishListState } = useWishList();

  const { wishListItem} = wishListState;

  return (
    <div className="wishlist-page">
      <Nav />
      <main>
        <h3 className="page-title text-center lg-text">
          My Wishlist({wishListItem.length})
        </h3>
        <div className="wishlist-container" >
          {wishListItem.length === 0 ? (
            <h2 className="no-product-text text-center">
              No item wishlisted.<Link to="/product" className="go-to-product">Let's Shop.</Link>
            </h2>
          ) : (
            wishListItem.map((product) => (
              <WishlistCard products={product} key={product._id} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export { Wishlist };
