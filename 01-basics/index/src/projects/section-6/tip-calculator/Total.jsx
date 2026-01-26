import React from "react";

function Total({ tip, totalPrice, bill }) {
	return (
		<>
			<h3>
				You pay ${totalPrice} (${bill} + ${tip} tip)
			</h3>
		</>
	);
}

export default Total;
