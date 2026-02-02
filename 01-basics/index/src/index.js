import React from "react";
import ReactDOM from "react-dom/client";

// SECTION-5
// import PizzaMenu from "./projects/section-5/pizza-menu/index.jsx";
// import Profile from "./projects/section-5/profileCard/index.jsx";

// SECTION-6
// import Steps from "./projects/section-6/steps/index.jsx";
// import TravelList from "./projects/section-6/travel-list";
// import FlashCards from "./projects/section-6/flash-cards";
// import DateCounter from "./projects/section-6/date-counter";
// import Accordion from "./projects/section-6/accordion";
// import TipCalculator from "./projects/section-6/tip-calculator";

//SECTION-8
import UsePopCorn from "./projects/section-8/use-pop-corn";
// import TextExpanderApp from "./projects/section-8/text-expander";

//SECTION-9
//import Tabs from "./projects/section-8/tabs";

function App() {
	return (
		<>
			<UsePopCorn />
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
