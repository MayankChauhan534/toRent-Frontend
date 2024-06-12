import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropertyDetails from "./PropertyDetails";

const Propertyitem = (props) => {
  const [clicked, setClicked] = useState(false);
  // const [pdetails, setPdetails] = useState([]);
  // const [data, setData] = useState([]);

  // const url = `${process.env.REACT_APP_BACKEND_URL}/property/query?id=${props.pid}`;

  const handleclick = () => {
    setClicked(true);
  };
  const data = props.data;
  const { photos, address, propertyArea, price } = props.data;

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
                to=""
                onMouseDown={handleclick}
                data-bs-toggle="modal"
                data-bs-target="#propertyModal"
                role="button"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
        {clicked && <PropertyDetails data={data} />}
      </div>
    </>
  );
};

export default Propertyitem;
