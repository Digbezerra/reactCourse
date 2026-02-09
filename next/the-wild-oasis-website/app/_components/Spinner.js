function Spinner({ pageName = "" }) {
	return (
		<div className="grid items-center justify-center">
			<span className="spinner"></span>
			<p className="text-xl text-primary-200">Loading {pageName} data...</p>
		</div>
	);
}

export default Spinner;
