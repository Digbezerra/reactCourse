import React from "react";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";
import "./styles.css";

const userData = {
	name: "John Doe",
	role: "Frontend Developer",
	bio: "Passionate about creating interactive applications and experiences on the web.",
	avatar: "./projects/profile-card/45051.png",
};

const data = [
	{
		skill: "JavaScript",
		level: "Advanced",
		color: "#f0db4f",
	},
	{
		skill: "React",
		level: "Intermediate",
		color: "#61dbfb",
	},
	{
		skill: "CSS",
		level: "Advanced",
		color: "#264de4",
	},
	{
		skill: "Node.js",
		level: "Beginner",
		color: "#68a063",
	},
];

function Profile() {
	return (
		<div className="card">
			<Avatar userData={userData} />
			<div className="data">
				<Intro userData={userData} />
				<SkillList data={data} />
			</div>
		</div>
	);
}

export default Profile;
