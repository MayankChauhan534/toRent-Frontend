import React, { useEffect, useState } from "react";
import Propertyitem from "./Propertyitem";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Carousal from "./Carousal";

const Properties = (props) => {
  const authtoken = localStorage.getItem("authtoken");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateProperties = async () => {
    try {
      if (!authtoken) {
        window.location.href = "/login";
      }
      setLoading(true);
      let url = `${process.env.REACT_APP_BACKEND_URL}/property/query?purpose=${
        props.purpose || "PG"
      }`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          authtoken: authtoken,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      let parsedData = await response.json();
      setProperties(parsedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateProperties();
    // eslint-disable-next-line
  }, [props.purpose]);

  return (
    <>
      <header>
        <Navbar username="name" />
      </header>
      <Carousal
        url1={`${process.env.PUBLIC_URL}/Images/Image1.jpg`}
        url2={`${process.env.PUBLIC_URL}/Images/Image2.jpg`}
        url3={`${process.env.PUBLIC_URL}/Images/Image3.jpg`}
        url4={`${process.env.PUBLIC_URL}/Images/Image4.png`}
      />
      <div className="properties bg-custom-clr5 d-flex flex-column align-items-center">
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="propertyouter d-flex flex-column">
            {properties.length === 0 ? (
              <p>No properties found.</p>
            ) : (
              properties.map((element) => (
                <div className="propertyinner " key={element._id}>
                  <Propertyitem data={element} />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Properties;
