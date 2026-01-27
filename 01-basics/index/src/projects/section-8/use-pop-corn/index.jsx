import "./style.css";

import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import MovieListBox from "./components/MovieListBox";
import WatchedBox from "./components/WatchedBox";

function UsePopCorn() {
	return (
		<>
			<NavBar />
			<MainContainer>
				<MovieListBox />
				<WatchedBox />
			</MainContainer>
		</>
	);
}

export default UsePopCorn;
