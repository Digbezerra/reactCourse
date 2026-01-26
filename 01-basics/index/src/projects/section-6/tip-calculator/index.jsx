import React, { useState } from "react";

import Question from "./Question";
import Total from "./Total";

function TipCalculator() {
	const [billValue, setBillValue] = useState(0);
	const [personalValue, setPersonalValue] = useState(0);
	const [friendsValue, setFriendsValue] = useState(0);

	const billPercentage =
		(billValue * (personalValue + friendsValue)) / 100 || 0;
	const totalBillValue = (billValue + billPercentage).toFixed(2);

	return (
		<>
			<Question billValue={billValue} onSetBillValue={setBillValue}>
				How much was the bill?
			</Question>
			<Question
				onSetPersonalPercentage={setPersonalValue}
				personalValue={personalValue}
			>
				How did you like the service?
			</Question>
			<Question
				onSetFriendsPercentage={setFriendsValue}
				friendsValue={friendsValue}
			>
				How did your friend like the service?
			</Question>
			<Total
				tip={billPercentage}
				totalPrice={totalBillValue}
				bill={billValue}
			/>
		</>
	);
}

export default TipCalculator;
