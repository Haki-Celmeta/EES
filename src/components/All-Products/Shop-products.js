import React from "react";
import cameras from "../Data/cameras";
import Product from "./Single-product";
import "./_all-products.scss";
import { Link } from "react-router-dom";

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
        {cameras.map(({ id, name, price, megapixel, imageSrc }) => (
          <Link to={`/shop/${name}`}><Product key={id} name={name} price={price} megapixel={megapixel} imageSrc={imageSrc} /></Link>
        ))}
      </div>
    </div>
  )
}

export default AllProducts;