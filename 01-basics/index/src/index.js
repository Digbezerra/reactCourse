import React from "react";
import ReactDOM from "react-dom/client";

// import PizzaMenu from "./projects/pizza-menu/index.jsx";

import Profile from "./projects/profileCard/index.jsx";

function App() {
	return (
		<>
			<Profile />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

export default App;
