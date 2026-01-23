import React, { useState } from "react";
import Button from "./Button";

import "./style.css";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

function Steps() {
	const [step, setStep] = useState(1);

	const handleNext = () => {
		step < 3 && setStep((prevStep) => prevStep + 1);
	};

	const handlePrevious = () => {
		step > 1 && setStep((prevStep) => prevStep - 1);
	};

	const alerta = () => {
		alert("aiii porra");
	};

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
					<Button
						className={`previous ${step === 1 ? "inactive" : ""}`}
						styles={{ backgroundColor: "#7950f2", color: "#fff" }}
						action={handlePrevious}
					>
						Previous
					</Button>
					<Button
						className={`next ${step === 3 ? "inactive" : ""}`}
						styles={{ backgroundColor: "#7950f2", color: "#fff" }}
						action={handleNext}
					>
						Next
					</Button>
				</div>
			</div>
		</>
	);
}

export default Steps;
