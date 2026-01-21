import React, { useState } from "react";
import "./style.css";

function DateCounter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const handleReset = () => {
		setStep(1);
		setCount(0);
	};

	const date = new Date("January 21 2026");
	date.setDate(date.getDate() + count);

	return (
		<div className="App">
			<h1>Date Counter 🏝️</h1>
			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					onChange={(e) => setStep(Number(e.target.value))}
				/>
				<span>Step: {step}</span>
			</div>
			<div>
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<input
					type="number"
					value={count}
					onChange={(e) => setCount(Number(e.target.value))}
				/>
				<button onClick={() => setCount((c) => c + step)}>+</button>
			</div>
			<div>
				<p>
					<span>
						{count === 0
							? "Today is "
							: count > 0
								? `${count} days from today is `
								: `${Math.abs(count)} days ago was`}
					</span>
					<span>{date.toDateString()}</span>
				</p>
			</div>
			{count !== 0 || step !== 1 ? (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : null}
		</div>
	);
}

export default DateCounter;
