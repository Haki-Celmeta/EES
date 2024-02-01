import React from "react";

const ProductCard = ({ name, price, megapixel, imagesSrc }) => {
  return (
    <div className="product-card">
      <img src={imagesSrc} alt="product" />
      <div className="product-info">
        <h2>{name} {megapixel}MP</h2>
        <h3>{price} ALL</h3>
      </div>
      <button type="button">READ MORE</button>
    </div>
  )
}

export default ProductCard;