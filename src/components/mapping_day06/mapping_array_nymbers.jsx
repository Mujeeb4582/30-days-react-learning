const Numbers = ({ numbers }) => {
	const list = numbers.map((number) => <li key={number}>{number}</li>);
	return list;
};

export default Numbers;
