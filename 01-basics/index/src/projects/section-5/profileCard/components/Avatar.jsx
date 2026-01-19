import React from "react";

function Avatar({ userData }) {
	return (
		<div className="avatar">
			<img src={userData.avatar} alt={userData.name} />
		</div>
	);
}

export default Avatar;
