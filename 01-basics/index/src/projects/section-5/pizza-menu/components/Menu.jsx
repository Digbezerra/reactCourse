import React from "react";

import Pizza from "./Pizza";

function Menu(props) {
  const { pizzas } = props;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzas.map((item) => {
          return <Pizza data={item} key={item.name} />;
        })}
      </ul>
    </main>
  );
}

export default Menu;
