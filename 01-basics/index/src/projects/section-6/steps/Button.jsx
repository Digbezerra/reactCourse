import React from "react";

function Button({ children, action, className, styles }) {
	return (
		<button className={className} style={styles} onClick={() => action()}>
			{children}
		</button>
	);
}

export default Button;
