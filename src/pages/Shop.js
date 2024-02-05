import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AllProducts from "../components/All-Products/Shop-products";
import Filters from "../components/Filters/Filters";

const Shop = () => {
  return (
    <div className="Shop-container">
      <Navbar />
      <div className="filter-products-container">
        <Filters />
        <AllProducts />
      </div>
    </div>
  )
}

export default Shop;