import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResults from "./NumResults";

function NavBar() {
	const [query, setQuery] = useState("");

	return (
		<nav className="nav-bar">
			<Logo />
			<SearchBar query={query} setQuery={setQuery} />
			<NumResults />
		</nav>
	);
}

export default NavBar;
