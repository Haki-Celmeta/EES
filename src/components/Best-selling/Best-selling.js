import React from "react";
import cameras from "../Data/cameras";
import ProductCard from "./Product-card";
import { Link } from "react-router-dom";
import "./_best-selling.scss";

const BestSelling = () => {
  return (
    <div className="best-selling-container">
      <h2>Best Selling Cameras</h2>
      <div className="line w-8 h-1 bg-black mb-16"></div>
      <div className="best-selling cameras-container">
        {cameras.map(({ id, name, price, megapixel, imageSrc }) => (
          <ProductCard key={id} name={name} price={price} megapixel={megapixel} imagesSrc={imageSrc} />
        ))}
      </div>
      <Link to="/shop">Shop All Cameras</Link>
    </div>
  )
}

export default BestSelling;