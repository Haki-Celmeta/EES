import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AllProducts from "../components/All-Products/Shop-products";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";

const Shop = () => {
  return (
    <div className="Shop-container">
      <Navbar />
      <div className="filter-products-container">
        <Filters />
        <AllProducts />
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Shop;