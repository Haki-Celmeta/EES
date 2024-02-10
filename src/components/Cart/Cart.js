import React from "react";
import closeIcon from "../../assets/images/close-icon-white.svg";
import cameras from "../Data/cameras";
import "./_cart.scss"
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Cart = ({ handleClick, isOpen }) => {
  const cartVariant = {
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeIn' }, x: 0 },
    hidden: { opacity: 0, x: '50px' },
  }

  const control = useAnimation();
  const [ref, inView] = useInView();

  const productsToCart = cameras.filter((product) => product.quantity > 0);

  const totalPrice = productsToCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
    0,
  );

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={cartVariant}
      initial="hidden"
      animate={control}
      className={`cart-card-container`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="cart-title-container">
        <h2>Cart</h2>
        <img src={closeIcon} alt="close button" aria-label="close button" onClick={handleClick} />
      </div>
      <div className="cart-products-container">
        {productsToCart.map((product) => (
          <div className="product-cart">
            <img src={product.imageSrc} alt="camera" />
            <div>
              {product.name}
              <div>Quantity: {product.quantity}</div>
            </div>
          </div>
        ))}
      </div>
      <Link className="view-cart-link" to="/cart">View Cart</Link>
      <div className="cart-total-container">
        <h3>Total</h3>
        <div>{totalPrice}.00 ALL</div>
      </div>
    </motion.div>
  )
}

export default Cart;