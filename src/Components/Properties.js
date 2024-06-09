import React, { useEffect, useState } from "react";
import Propertyitem from "./Propertyitem";
import Spinner from "./Spinner";

const Properties = (props) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateProperties = async () => {
    try {
      setLoading(true);
      let url = `${process.env.REACT_APP_BACKEND_URL}/property/query?purpose=${
        props.purpose || "PG"
      }`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyYTA5MzcwNDU5ZTU4YmJhYjFlY2Y1In0sImlhdCI6MTcxNzgzNDQ0M30.NHln-Mp8qjfJROrPchwwq3O5rGdMgd1A1u1IfkE4mrE",
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
  }, [props.purpose]);

  return (
    <div className="properties bg-custom-clr5 d-flex flex-column align-items-center">
      <h2>Properties {props.purpose}</h2>
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
                <Propertyitem
                  img={element.photos}
                  address={element.address}
                  area={element.propertyArea}
                  price={element.price}
                  pid={element._id}
                />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Properties;
