import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropertyDetails from "./PropertyDetails";

const Propertyitem = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleclick = () => {
    setClicked(true);
  };

  return (
    <div>
      <Link
        to=""
        onClick={handleclick}
        data-bs-toggle="modal"
        data-bs-target="#propertyModal"
      >
        <div className="propertyItem bg-custom-clr4 d-flex justify-content-evenly">
          <div className="img d-flex justify-content-center align-items-center">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}/${props.img[0]}`}
              alt="Can't load the image"
            />
          </div>
          <div className="details d-flex flex-column justify-content-evenly">
            <div>
              <p>
                <b>Address: </b>
              </p>
              <p>{props.address}</p>
            </div>
            {props.area && (
              <p>
                <b>Carpet Area:</b> {props.area} sqrft
              </p>
            )}
            <p>
              <b>Price:</b> {props.price} Rs
            </p>
          </div>
        </div>
        {/* <PropertyDetails pid={props.pid} /> */}
        {clicked && <PropertyDetails pid={props.pid} />}
      </Link>
    </div>
  );
};

export default Propertyitem;
