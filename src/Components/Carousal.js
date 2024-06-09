import React from "react";

const Carousal = (props) => {
  return (
    <div>
      <div
        id="carouselAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: props.height }}>
          <div className="carousel-item active">
            <img src={props.url1} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={props.url2} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={props.url3} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={props.url4} className="d-block w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
