import Numbers from "./mapping_array_nymbers";
import Skills from "./mapping_array_of_array";

const Mapping = () => {
	const numbersArray = [1, 2, 3, 4, 5];
	const skills = [
		["HTML", 10],
		["CSS", 7],
		["JavaScript", 9],
		["React", 8],
	];

	return (
		<div className="container">
			<div>
				<h2>Mapping and Rendring Array</h2>
				<h3>Numbers List</h3>
				<ul style={{ display: "flex" }}>
					<Numbers numbers={numbersArray} />
				</ul>
				<h3>Skills Level</h3>
				<Skills skills={skills} />
			</div>
		</div>
	);
};

export default Mapping;
