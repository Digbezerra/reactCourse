import React from "react";
import { pizzaData } from "./data";
import "./index.css";

function Pizza() {
  const pizzas = pizzaData;
  console.log(pizzas);
  return (
    <>
      <h2>Pizza</h2>
      {pizzas.map((item) => {
        return (
          <div>
            <img src={item.photoName} alt={item.name} />

            <h2>{item.name}</h2>
            <p>{item.ingredients}</p>
            <p>{item.price}</p>
            <p>{`${item.soldOut}`}</p>
          </div>
        );
      })}
    </>
  );
}

export default Pizza;
