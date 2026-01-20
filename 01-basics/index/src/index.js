import React from "react";
import ReactDOM from "react-dom/client";

// SECTION-5
// import PizzaMenu from "./projects/section-5/pizza-menu/index.jsx";
// import Profile from "./projects/section-5/profileCard/index.jsx";

// SECTION-6
// import Steps from "./projects/section-6/steps/index.jsx";
import TravelList from "./projects/section-6/travel-list";

function App() {
	return (
		<>
			<TravelList />
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
