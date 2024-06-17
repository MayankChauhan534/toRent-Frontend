import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Propertyitem = (props) => {
  const { _id, photos, address, propertyArea, price } = props.data;

  const handleclick = () => {
    localStorage.setItem("id", _id);
  };

  return (
    <>
      <div>
        <div className="propertyItem bg-custom-clr4 d-flex justify-content-evenly">
          <div className="img d-flex justify-content-center align-items-center">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/${photos[0]}`}
              alt="Can't load the"
            />
          </div>
          <div className="details d-flex flex-column justify-content-evenly">
            <div>
              <p className="contentheading">Address:</p>
              <p>{address}</p>
            </div>
            <div>
              {propertyArea && (
                <p>
                  <span className="contentheading">Carpet Area:</span>{" "}
                  {propertyArea} sqrft
                </p>
              )}
              <p>
                <span className="contentheading">Price:</span> {price} Rs
              </p>
            </div>
            <div>
              <Link
                className="btn bg-custom-clr1 text-custom-clr4"
                onMouseDown={handleclick}
                to="/propertydetail"
                target="_blank"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Propertyitem;
