import { Nav, WishlistCard, Footer } from "../../components";
import { useProduct, useWishList } from "../../context";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import { filterSearch } from "../../utilities/utils";

const Wishlist = () => {
  const { wishListState } = useWishList();
  const {filterState} = useProduct()

  const { wishListItem} = wishListState;


  const filteredWishlistData = () =>{
    return filterState.searchByValue ? filterSearch(wishListItem, filterState) : wishListItem
  }

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
            filteredWishlistData().map((product) => (
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
