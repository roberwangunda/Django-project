import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceList from "../components/ServiceList";

const Services = () => {
  const url = "http://localhost:8000/api/services/";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="">
        <h1 className="underline">we offer solutions to:</h1>
        <main className="item-list">
          {items.map((item) => {
            const { get_image, name, description } = item;
            return (
              <div>
                <ServiceList item={item}></ServiceList>
              </div>
            );
          })}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Services;
