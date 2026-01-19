import React from "react";

function Intro({ userData }) {
	return (
		<div className="intro">
			<h1>{userData.name}</h1>
			<p>{userData.bio}</p>
		</div>
	);
}

export default Intro;
