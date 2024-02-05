import React from "react";

const Product = ({ name, price, megapixel, imageSrc }) => {
  return (
    <div className="single-product">
      <img src={imageSrc} alt="camera" />
      <div className="product-name-price-container">
        <h3 className="product-name">{name} {megapixel}MP</h3>
        <h3 className="product-price">{price} ALL</h3>
      </div>
    </div>
  )
}

export default Product;