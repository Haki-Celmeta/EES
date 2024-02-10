import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/CartProduct/CartProduct";
import Footer from "../components/Footer/Footer";

const ViewCart = () => {
  return (
    <div className="view-cart-container">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  )
}

export default ViewCart;