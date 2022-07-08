import React, { useState, useEffect } from "react";
import axios from "axios";
import photo from "../i.jpg";
import Item from "./Item";
import Detail from "../components/Detail";
import Homepage from "../components/Homepage";

const Home = () => {
  const url = "http://localhost:8000/api/home/";
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
      <div className="image-container">
        <img src={photo}></img>
      </div>
      <Detail />
      <div className="">
        <h1 className="underline">Our Solutions</h1>
        <main className="item-list">
          {items. slice(0, 3).map((item) => {
            const { get_image, name, description } = item;
            return (
              <div>
                <Item item={item}></Item>
              </div>
            );
          })}
        </main>
      </div>
      <Homepage />
    </React.Fragment>
  );
};

export default Home;
