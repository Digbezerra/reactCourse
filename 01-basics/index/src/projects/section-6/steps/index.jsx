import React from "react";
import "./styles.css";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

function Steps() {
	const step = 1;

	return (
		<>
			<div className="steps">
				<div className="numbers">
					<div className={step >= 1 ? "active" : ""}>1</div>
					<div className={step >= 2 ? "active" : ""}>2</div>
					<div className={step >= 3 ? "active" : ""}>3</div>
				</div>
				<div className="message">
					<span>
						Step {step}: {messages[step - 1]}
					</span>
				</div>
				<div className="buttons">
					<button
						className="previous"
						style={{ backgroundColor: "#7950f2", color: "#fff" }}
					>
						Previous
					</button>
					<button
						className="next"
						style={{ backgroundColor: "#7950f2", color: "#fff" }}
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
}

export default Steps;
