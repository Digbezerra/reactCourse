import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import WatchedSummary from "./WatchedSummary";
import WatchedList from "./WatchedList";

const tempWatchedData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: "tt0088763",
		Title: "Back to the Future",
		Year: "1985",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

function WatchedBox() {
	const [watched, setWatched] = useState(tempWatchedData);
	const [isOpen2, setIsOpen2] = useState(true);

	return (
		<div className="box">
			<ToggleButton setIsOpen={setIsOpen2} isOpen={isOpen2} />
			{isOpen2 && (
				<>
					<WatchedSummary watched={watched} />
					<WatchedList watched={watched} />
				</>
			)}
		</div>
	);
}

export default WatchedBox;
