import React from "react";

function AccordionItem({ item, num, curOpen, onOpen, children }) {
	const isOpen = num === curOpen;

	const handleToggle = () => {
		onOpen(curOpen ? null : num);
	};

	return (
		<div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
			<p className={`number`}>{num + 1}</p>
			<p className={`title`}>{item.title}</p>
			<p className={`icon`}>{isOpen ? "-" : "+"}</p>
			{isOpen && <div className="content-box">{children}</div>}
		</div>
	);
}

export default AccordionItem;
