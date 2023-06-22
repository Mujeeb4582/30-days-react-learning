const PopulationList = ({ data }) => {
	const list = data.map((item) => (
		<li style={{ display: "flex" }} key={item.country}>
			<div
				style={{
					minWidth: "190px",
				}}
			>
				{item.country}
			</div>
			<div
				style={{
          position: "relative",
					display: "flex",
					justifyContent: "space-between",
					minWidth: "70%",
				}}
			>
				<div
					style={{
						backgroundColor: "orange",
						height: "20px",
						marginBottom: "5px",
						width: item.population / 10000000,
					}}
				></div>
				<div style={{ marginLeft: "10px" }}>
					{item.population.toLocaleString()}
				</div>
			</div>
		</li>
	));
	return <ul>{list}</ul>;
};

export default PopulationList;
