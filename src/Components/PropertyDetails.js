import Carousal from "./Carousal";

const PropertyDetails = (props) => {
  const {
    photos = [],
    address,
    propertyArea,
    price,
    contactNumber,
  } = props.data;

  return (
    <>
      <div>
        {!photos ? (
          <p>
            <b>No data avilable</b>
          </p>
        ) : (
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

                <div className="detailsBody d-flex flex-column align-items-center">
                  {/* <Carousal
                    height="30rem"
                    url1={
                      photos[0]
                        ? `${process.env.REACT_APP_BACKEND_URL}/${photos[0]}`
                        : ""
                    }
                    url2={
                      photos[1]
                        ? `${process.env.REACT_APP_BACKEND_URL}/${photos[1]}`
                        : ""
                    }
                    url3={
                      photos[2]
                        ? `${process.env.REACT_APP_BACKEND_URL}/${photos[2]}`
                        : ""
                    }
                    url4={
                      photos[3]
                        ? `${process.env.REACT_APP_BACKEND_URL}/${photos[3]}`
                        : ""
                    }
                  /> */}

                  <div className="images d-flex flex-column">
                    <div className="imagesInner d-flex">
                      <div className="propertyImg">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/${photos[0]}`}
                          alt=""
                        />
                      </div>
                      <div className="propertyImg">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/${photos[1]}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="imagesInner d-flex">
                      <div className="propertyImg">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/${photos[2]}`}
                          alt=""
                        />
                      </div>
                      <div className="propertyImg">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/${photos[3]}`}
                          alt=""
                        />
                      </div>
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
                    <div className="propertyDetailsInner ">
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
