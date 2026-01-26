function Question({
	billValue,
	onSetBillValue,
	onSetFriendsPercentage,
	onSetPersonalPercentage,
	friendsValue,
	personalValue,
	children,
}) {
	const options = [
		{
			opinion: "It was bad",
			tip_value: 0,
		},
		{
			opinion: "It was good",
			tip_value: 10,
		},
		{
			opinion: "It was superb",
			tip_value: 20,
		},
		{
			opinion: "It was a perfect service!",
			tip_value: 30,
		},
	];

	return (
		<>
			<p>{children}</p>
			{onSetBillValue && (
				<input
					type="number"
					value={billValue}
					onChange={(e) => onSetBillValue(Number(e.target.value))}
				/>
			)}
			{onSetPersonalPercentage && (
				<select
					value={personalValue}
					onChange={(e) => onSetPersonalPercentage(Number(e.target.value))}
				>
					{options.map((item) => {
						return (
							<option value={item.tip_value}>
								{item.opinion} {item.tip_value}%
							</option>
						);
					})}
				</select>
			)}
			{onSetFriendsPercentage && (
				<select
					value={friendsValue}
					onChange={(e) => onSetFriendsPercentage(Number(e.target.value))}
				>
					{options.map((item) => {
						return (
							<option value={item.tip_value}>
								{item.opinion} {item.tip_value}%
							</option>
						);
					})}
				</select>
			)}
		</>
	);
}

export default Question;
