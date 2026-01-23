import React from "react";

function Stats({ items }) {
	if (!items.length)
		return (
			<p className="stats">
				<em>Star adding items to your packing list</em>
			</p>
		);

	const totalItems = items.length;
	const itemsPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((itemsPacked / totalItems) * 100);

	return (
		<footer className="stats">
			{percentage < 100 ? (
				<em>
					💼 You have {totalItems} items on your list, and you already packed{" "}
					{itemsPacked}({percentage}%)
				</em>
			) : (
				<em>You got everything! Ready to Go! 🛫</em>
			)}
		</footer>
	);
}

export default Stats;
