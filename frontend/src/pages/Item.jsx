import { Link } from "react-router-dom";
import React, { useState } from "react";


const Item=(props) =>{
  const { get_image, name, description } = props.item;
    const [readMore, setReadMore] = useState(false);
    return (
      <div className="items">
        <div className="img-contain">
          <h4>{name}</h4>
          <img src={get_image} alt={name} />
        </div>
        <div className="cocktail-footer">
          <p>
            {readMore ? description : `${description.substring(0, 200)}...`}
          </p>
          <Link to="/services/">
            <button
              className="btn btn-primary btn-details"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "  read more"}
            </button>
          </Link>
        </div>
      </div>
    );
}

export default Item;