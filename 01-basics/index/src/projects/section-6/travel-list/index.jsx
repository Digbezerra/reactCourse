import React from "react";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import "./style.css";

function TravelList() {
	return (
		<>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</>
	);
}

export default TravelList;
