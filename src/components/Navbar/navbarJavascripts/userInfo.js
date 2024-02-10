import React, { useState } from "react";
import searchIcon from "../../../assets/images/search.svg";
import { Link } from "react-router-dom";
import cameras from "../../Data/cameras";
import Cart from "../../Cart/Cart";

const UserInfo = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const productsToCart = cameras.filter((product) => product.quantity > 0);

  const isProductsToCartEmpty = productsToCart.length === 0 ? true : false;

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="user-info">
      <div className="search-bar-container">
        <img src={searchIcon} alt="search icon" />
        <input type="text" id="search-bar" name="search-bar" placeholder="Search..." />
      </div>
      <h1 className="logo"><Link to="/">EES.</Link></h1>
      <div className="user-info-container">
        <div className="cart-container">
          <span style={{ fontWeight: isProductsToCartEmpty ? 500 : 700 }} onClick={handleClick}>
            Cart ({productsToCart.length})
          </span>
          <div style={{ display: isProductsToCartEmpty ? "none" : "inline" }} className="inline w-3 h-3 bg-red-600 rounded-full"></div>
          <Cart handleClick={handleClick} isOpen={isCartOpen} />
        </div>
      </div>
    </div>
  )
}

export default UserInfo;