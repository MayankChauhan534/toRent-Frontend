import React from "react";

const Carousal = (props) => {
  return (
    <div
      id="carouselAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ height: props.height }}
    >
      <div className="carousel-item active">
        <img src={props.url1} className="d-block" alt="" />
      </div>
      <div className="carousel-item">
        <img src={props.url2} className="d-block " alt="" />
      </div>
      <div className="carousel-item">
        <img src={props.url3} className="d-block " alt="" />
      </div>
      <div className="carousel-item">
        <img src={props.url4} className="d-block " alt="" />
      </div>
    </div>
  );
};

export default Carousal;
