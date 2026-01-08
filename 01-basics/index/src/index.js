import React from "react";
import ReactDOM from "react-dom/client";

import Pizza from "./projects/pizza-menu";

function App() {
  return (
    <>
      <h1>Hello React!!</h1>
      <Pizza />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
