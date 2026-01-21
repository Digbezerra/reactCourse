import React from "react";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import "./style.css";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Charger", quantity: 1, packed: true },
];

function TravelList() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList initialItems={initialItems} />
			<Stats />
		</div>
	);
}

export default TravelList;
