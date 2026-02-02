import React, { useState } from "react";

function SearchBar({ onSetQuery, query }) {
	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => onSetQuery(e.target.value)}
		/>
	);
}

export default SearchBar;
