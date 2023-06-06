const HexaArray = ({ hexaDecimalColor }) => {
	const hexaDecimal = hexaDecimalColor.map((hexa) => (
		<li className="hexaColor" style={{ backgroundColor: hexa }} key={hexa}>
			{hexa}
		</li>
	));
	return hexaDecimal;
};

export default HexaArray;
