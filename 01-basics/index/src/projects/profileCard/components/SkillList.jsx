import React from "react";

function SkillList({ data }) {
	const emotes = {
		Beginner: "😟",
		Intermediate: "🙂",
		Advanced: "😎",
	};

	return (
		<div>
			<ul className="skill-list">
				{data.map((skill, index) => (
					<li
						key={index}
						className="skill"
						style={{ backgroundColor: skill.color }}
					>
						{skill.skill} {emotes[skill.level]}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SkillList;
