import React, { useState, useEffect } from "react";
import filterIcon from "../../assets/images/filter-icon.svg";
import "./_filters.scss";

const Filters = () => {
  const [minRangeValue, setMinRangeValue] = useState(60);
  const [maxRangeValue, setMaxRangeValue] = useState(800);

  const [areFiltersOpen, setAreFiltersOpen] = useState(false);

  const [position, setPosition] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  }, [])

  function handleChangeMin(e) {
    setMinRangeValue(e.target.value);
  }

  function handleChangeMax(e) {
    setMaxRangeValue(e.target.value)
  }

  const convertToALL = [
    minRangeValue * 100,
    maxRangeValue * 100
  ]

  function handleFilterClick() {
    setAreFiltersOpen(!areFiltersOpen);
  }

  return (
    <div className="all-products-filter">
      <h2>Filter By</h2>
      <img onClick={handleFilterClick} id="filter-icon" className="w-14 cursor-pointer border border-gray-500 rounded-lg bg-gray-100" src={filterIcon} alt="filter icon" />
      <div className="mobile-filter-container">
        <div class="slide-container" style={{ display: position < 600 ? areFiltersOpen ? "block" : "none" : "block" }}>
          <h4 className="text-lg text-gray-700 mb-1">Price:</h4>
          <input type="range" min="60" max="400" value={minRangeValue} class="slider" id="myRange" onChange={handleChangeMin} />
          <input type="range" min="401" max="800" value={maxRangeValue} class="slider" id="myRange" onChange={handleChangeMax} />
        </div>
        <div className="price-slide-container" style={{ display: position < 600 ? areFiltersOpen ? "flex" : "none" : "flex" }}>
          <h3 className="min-price price-display">{convertToALL[0]} ALL</h3>
          <h3 className="max-price price-display">{convertToALL[1]} ALL</h3>
        </div>
        <div className="filter-products" style={{ display: position < 600 ? areFiltersOpen ? "flex" : "none" : "flex" }}>
          <h4 className="text-lg text-gray-700">Products:</h4>
          <div className="check-camera-container check-container">
            <input type="checkbox" className="checkbox" id="check-camera" />
            <label htmlFor="check-camera">Cameras</label>
          </div>
          <div className="check-routers-container check-container">
            <input type="checkbox" className="checkbox" id="check-routers" />
            <label htmlFor="check-routers">Routers</label>
          </div>
          <div className="check-data-storage-container check-container">
            <input type="checkbox" className="checkbox" id="check-storage" />
            <label htmlFor="check-storage">Data Storage</label>
          </div>
          <div className="check-cables-container check-container">
            <input type="checkbox" className="checkbox" id="check-cables" />
            <label htmlFor="check-cables">Cables</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters