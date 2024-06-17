import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const PropertyDetails = () => {
  const [pdetails, setPdetails] = useState({});
  const [loading, setLoading] = useState(true);

  const id = localStorage.getItem("id");

  const getProperty = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/property/query?propertyid=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          authtoken: localStorage.getItem("authtoken"),
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const parsedData = await response.json();
      setPdetails(parsedData[0]);
    } catch (error) {
      console.error("Error fetching property details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProperty();
    // eslint-disable-next-line
  }, []);

  const { photos = [], address, propertyArea, price, contactNumber } = pdetails;

  return (
    <>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div
            className="bg-custom-clr4"
            id="propertyDetail"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="">
              <div className="modelBox d-flex flex-column">
                <div className=" d-flex align-iems-center"></div>

                <div className="modelboxInner  d-flex flex-column align-items-center">
                  <div className="images d-flex flex-column">
                    <div className="imagesInner d-flex">
                      {photos.slice(0, 2).map((photo, index) => (
                        <div className="propertyImg" key={index}>
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/${photo}`}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <div className="imagesInner d-flex">
                      {photos.slice(2, 4).map((photo, index) => (
                        <div className="propertyImg" key={index}>
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/${photo}`}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="propertyDetailsOuter d-flex">
                    <div className="propertyDetailsInner details1">
                      {propertyArea && (
                        <p>
                          <b>Carpet Area:</b> {propertyArea} sqrft
                        </p>
                      )}
                      <p>
                        <b>Price:</b> {price} Rs
                      </p>
                      <p>
                        <b>Contact Number:</b> {contactNumber}
                      </p>
                    </div>
                    <div className="propertyDetailsInner">
                      <p>
                        <b>Address: </b>
                      </p>
                      <p>{address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyDetails;
