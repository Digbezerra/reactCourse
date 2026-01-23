import React, { useState } from "react";

import Item from "./Item";

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: false },
// 	{ id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function PackingList({ items, onDeleteItem, onToggleItem }) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));

	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	if (sortedItems.length) console.log(Number(items[0].packed));
	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						itemData={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
			</div>
		</div>
	);
}

export default PackingList;
