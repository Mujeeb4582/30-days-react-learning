import Numbers from "./mapping_array_numbers";
import Skills from "./mapping_array_of_array";
import Countries from "./mapping_array_of_object";
import { randomNumberArray } from "../../utils/numberGenerator";
import NumberArray from "./mapping_odd_even_prime_numbers";
import HexaArray from "./mapping_of_hexadecimal_array";
import { hexaDecimalColorArray } from "../../utils/hexa_decimal_color_array";

const listStyles = {
	display: "grid",
	gridTemplateColumns: "repeat(8, 1fr)",
	gap: "2px",
	marginBottom: "20px",
};

const headingStyles = {
	textAlign: "center",
	fontSize: "40px",
	paddingBottom: "20px",
};

const Mapping = () => {
	// Simple number array
	const numbersArray = [1, 2, 3, 4, 5];
	// Array of arrays
	const skills = [
		["HTML", 10],
		["CSS", 7],
		["JavaScript", 9],
		["React", 8],
	];
	// Array of objects
	const countries = [
		{ name: "Finland", city: "Helsinki" },
		{ name: "Sweden", city: "Stockholm" },
		{ name: "Denmark", city: "Copenhagen" },
		{ name: "Norway", city: "Oslo" },
		{ name: "Iceland", city: "Reykjavík" },
		{ name: "Pakistan", city: "Islamabad" },
	];
	// randomNumber
	const numbers = randomNumberArray();
	const hexaDecimalColor = hexaDecimalColorArray();
	console.log(hexaDecimalColor)

	return (
		<div className="container">
			<div>
				<h2>Mapping and Rendering Array</h2>
				<h3>Numbers List</h3>
				<ul style={{ display: "flex" }}>
					<Numbers numbers={numbersArray} />
				</ul>
				<h3>Skills Level</h3>
				<Skills skills={skills} />
				<h3>Countries List</h3>
				<Countries countries={countries} />
			</div>
			<h3 style={headingStyles}>Number Generator</h3>
			<ul style={listStyles}>
				<NumberArray numberArray={numbers} />
			</ul>
			<h3 style={headingStyles}>HexaDecimal Colors</h3>
			<ul style={listStyles}>
				<HexaArray hexaDecimalColor={hexaDecimalColor} />
			</ul>
		</div>
	);
};

export default Mapping;
