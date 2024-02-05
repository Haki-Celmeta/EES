import React from "react";
import cameras from "../Data/cameras";
import Product from "./Single-product";
import "./_all-products.scss";

const AllProducts = () => {
  return (
    <div className="all-products-container">
      <h1>All Products</h1>
      <div className="counter-sort-container">
        <div className="counter">{cameras.length} Products</div>
        <div className="sort-container">
          Sort by: Recommended
        </div>
      </div>
      <div className="products-container">
        {cameras.map(({ name, price, megapixel, imageSrc }) => (
          <Product name={name} price={price} megapixel={megapixel} imageSrc={imageSrc} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts;