import { useState } from "react";

function TextExpander({
	children,
	collapsedNumWords = 10,
	expandButtonText = "show more",
	collapseButtonText = "show less",
	buttonColor = "#227aff",
	className = "",
}) {
	const [expanded, setExpanded] = useState(false);

	const buttonStyle = {
		cursor: "pointer",
		color: buttonColor,
	};

	const collapsedText = children.slice(0, collapsedNumWords + 1);
	return (
		<div className={className}>
			{expanded ? <p>{children}</p> : <p>{collapsedText}...</p>}
			<span style={buttonStyle} onClick={() => setExpanded(!expanded)}>
				{expanded ? collapseButtonText : expandButtonText}
			</span>
		</div>
	);
}

export default TextExpander;
