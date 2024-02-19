import React from "react";
import { FaStar } from "react-icons/fa";

const Foodcard = ({ id, name, price, desc, rating, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>

      <div className="card-text">
        <p>{desc.slice(0, 50)}...</p>
      </div>

      <div className="rating">
        <span style={{ margin: "18px" }}>
          <FaStar className="star" />
          {rating}
        </span>
      </div>

      <div className="footer">
        <span style={{ color: "red", fontFamily: "fantasy", margin: "20px" }}>
          Rs.{price}
        </span>

        <a href="#" className="btn btn-primary cart">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Foodcard;
