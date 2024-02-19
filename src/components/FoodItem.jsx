import React from "react";
import Foodcard from "./FoodCard";
import FoodList from "../Data/FoodList.jsx";

const FoodItem = () => {
  return (
    <div className="item"> 
      {FoodList.map((food) => {
        return (
          <Foodcard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
          />
        );
      })}
    </div>
  );
};

export default FoodItem;
