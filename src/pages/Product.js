import React from "react";
import ProductPage from "../components/Product-page/Product-page";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";


const Product = () => {
  return (
    <div className="single-product-page">
      <Navbar />
      <ProductPage />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Product;