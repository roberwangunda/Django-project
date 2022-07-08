import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutList from "../components/AboutList";
import photo from "../i.jpg";

const About = () => {
  const url = "http://localhost:8000/api/about/";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <>
      <div className="image-container">
        <img src={photo}></img>
      </div>
      <main className="">
        <div class="container">
          <h2 className="text-center m-3">About Us</h2>
        </div>
        <div class="col-11 p-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem magni
            dicta, saepe, labore iste recusandae, non eum unde qui sequi quos
            nam expedita voluptatibus et distinctio perferendis eligendi
            voluptates culpa? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolorem, exercitationem. Quae autem unde,
            accusamus pariatur vero placeat molestias nemo eveniet doloremque
            labore dolores modi rem asperiores non doloribus est earum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime dolore repellendus commodi laboriosam hic fuga, repellat labore aspernatur explicabo accusamus sequi harum nisi quas? Aspernatur optio laborum perferendis mollitia?
          </p>
        </div>
      </main>
      <h2 className="underline">why choose Strudas Technologies Limited:</h2>
      <main className="about-list">
        {product.map((products) => {
          const { name, description, get_image } = products;
          return (
            <div>
              <AboutList products={products}></AboutList>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default About;
