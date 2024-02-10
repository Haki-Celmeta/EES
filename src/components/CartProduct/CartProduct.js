import React from "react";
import cameras from "../Data/cameras";
import closeIcon from "../../assets/images/close-icon.svg";
import "./_cartProduct.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [productsToCart, setProductsToCart] = useState(cameras.filter((product) => product.quantity > 0));

  const totalPrice = productsToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
    0,
  );

  const deleteProduct = (e) => {
    for (let product of cameras) {
      if (product.name === e.target.className) {
        product.quantity = 0;
        setProductsToCart(cameras.filter((product) => product.quantity > 0));
      }
    }
  }

  return (
    <div className="all-cart-products-container">
      <div className="my-cart-container">
        <h2>My Cart</h2>
        <div className="my-cart-products-container">
          {productsToCart.map((product) => (
            <article key={product.id} className="my-cart-product">
              <div className="my-cart-image-name">
                <img src={product.imageSrc} alt="product" />
                <div className="name-price">
                  <h3>{product.name}</h3>
                  <h4>{product.price}.00 ALL</h4>
                </div>
              </div>
              <div className="quantity-price-container">
                <div>Quantity: {product.quantity}</div>
                <div>{product.quantity * product.price}.00 ALL</div>
              </div>
              <img className={product.name} src={closeIcon} alt="delete product" aria-label="delete product" onClick={deleteProduct} />
            </article>
          ))}
        </div>
      </div>
      <div className="order-summary-container">
        <h2>Order Summary</h2>
        <div className="subtotal-container">
          <div>Subtotal</div>
          <div>{totalPrice}.00 ALL</div>
        </div>
        <div className="total-container">
          <div>Total</div>
          <div>{totalPrice}.00 ALL</div>
        </div>
        <Link to="/contact">Contact the Order</Link>
      </div>
    </div>
  )
}

export default Cart;