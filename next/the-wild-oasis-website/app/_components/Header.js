import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header({ children }) {
	return (
		<header className="border-b border-primary-900 px-8 py-5">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				{children}
			</div>
		</header>
	);
}

export default Header;
