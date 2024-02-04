import React, { useEffect, useState } from "react";
import cameras from "../Data/cameras";
import ProductCard from "./Product-card";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/images/arrow-chevron-right.svg";
import arrowLeft from "../../assets/images/arrow-chevron-left.svg";
import "./_best-selling.scss";

const BestSelling = () => {
  const [lastIndex, setLastIndex] = useState(3);
  const [firstIndex, setFirstIndex] = useState(0);

  const breakpoint = 800;

  useEffect(() => {
    function handleWindowResize() {
      const windowWidth = window.innerWidth;
      const cardsPerRow = windowWidth < breakpoint ? 1 : 4;
      setLastIndex(firstIndex + cardsPerRow - 1);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [firstIndex, breakpoint])

  function handleIncreaseIndex() {
    if (cameras.length - 1 > lastIndex) {
      setFirstIndex((prevFirstIndex) => prevFirstIndex + 1);
      setLastIndex((prevLastIndex) => prevLastIndex + 1);
    }
  }

  function handleDecreaseIndex() {
    if (firstIndex > 0) {
      setFirstIndex((prevFirstIndex) => prevFirstIndex - 1);
      setLastIndex((prevLastIndex) => prevLastIndex - 1);
    }
  }

  return (
    <div className="best-selling-container">
      <h2>Best Selling Cameras</h2>
      <div className="line w-8 h-1 bg-black mb-16"></div>
      <div className="best-selling cameras-container">
        <button className="move-buttons decrease-button" onClick={handleDecreaseIndex} disabled={firstIndex === 0 ? true : false}>
          <img src={arrowLeft} alt="arrow right" />
        </button>
        {cameras
          .filter((product, index) => index >= firstIndex && index <= lastIndex)
          .map(({ id, name, price, megapixel, imageSrc }) => (
            <ProductCard key={id} name={name} price={price} megapixel={megapixel} imagesSrc={imageSrc} />
          ))
        }
        <button className="move-buttons increase-button" onClick={handleIncreaseIndex} disabled={lastIndex === cameras.length - 1 ? true : false}>
          <img src={arrowRight} alt="arrow left" />
        </button>
      </div>
      <Link to="/shop">Shop All Cameras</Link>
    </div>
  )
}

export default BestSelling;