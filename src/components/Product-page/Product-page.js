import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cameras from "../Data/cameras";
import "./_product-page.scss";

const ProductPage = () => {
  const { name } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = cameras.find((product) => product.name === name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleCartClick = () => {
    for (let product of cameras) {
      if (product.name === name) {
        product.quantity += Number(quantity);
        console.log(product.name, product.quantity);
      }
    }
  }

  return (
    <article className="product-page-container">
      <div className="image-description-container">
        <img src={product.imageSrc} alt="camera" />
        <p>{product.description}</p>
      </div>
      <div className="product-info-detail-container">
        <h1>{product.name}</h1>
        <div className="product-id">Id: {product.id}</div>
        <div className="product-price">{product.price}.00 ALL</div>
        <div className="quantity-container">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" min="1" name="quantity" id="quantity" value={quantity} onChange={handleChange} />
        </div>
        <button className="add-to-cart-btn" onClick={handleCartClick}>Add to Cart</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </article>
  )
}

export default ProductPage;