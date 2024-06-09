import React, { useEffect, useState } from "react";
import Carousal from "./Carousal";

const PropertyDetails = (props) => {
  const [pdetails, setPdetails] = useState([]);
  const url = `${process.env.REACT_APP_BACKEND_URL}/property/query?id=${props.pid}`;

  const fetchPdetails = async () => {
    const responce = await fetch(url, {
      method: "GET",
      headers: {
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyYTA5MzcwNDU5ZTU4YmJhYjFlY2Y1In0sImlhdCI6MTcxNzgzNDQ0M30.NHln-Mp8qjfJROrPchwwq3O5rGdMgd1A1u1IfkE4mrE",
      },
    });

    // const parseddata = await responce.json();
    // console.log(parseddata);
    // await setPdetails(parseddata);
    setPdetails(await responce.json());
    console.log(pdetails);
  };

  useEffect(() => {
    fetchPdetails();
    // console.log(pdetails);
  }, [props.pid]);

  return (
    <div>
      <h1>Pdetails</h1>
      {/* {pdetails && (
        <div
          className="modal fade"
          id="propertyModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modelBox modal-content d-flex flex-column">
              <div className="projectModelHead d-flex align-iems-center">
                <div
                  className="projectModalLabel d-flex align-items-center justify-content-center"
                  style={{ width: "98%" }}
                >
                  <h3 className="" id="projectModalLabel">
                    Property Details
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="detailsBody">
                <Carousal
                  height="10rem"
                  // url1={pdetails.photos[0]}
                  // url2={pdetails.photos[1]}
                  // url3={pdetails.photos[2]}
                  // url4={pdetails.photos[3]}
                />
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default PropertyDetails;
