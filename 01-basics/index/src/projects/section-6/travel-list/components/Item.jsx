import React from "react";

function Item({ itemData }) {
	return (
		<li>
			<span style={itemData.packed ? { textDecoration: "line-through" } : {}}>
				{itemData.quantity} {itemData.description}
			</span>
			<button>❌</button>
		</li>
	);
}

export default Item;
