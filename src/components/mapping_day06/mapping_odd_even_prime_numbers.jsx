import "./mapping.css";

const isPrime = (number) => {
  if(number < 2) return false;
  for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) return false;
  }
  return true;
}

const NumberArray = ({ numberArray }) => {
	const number = numberArray.map((number) => {
		if (isPrime(number)) {
			return (
				<li className="prime" key={number}>
					{number}
				</li>
			);
		} else if (number % 2 === 0) {
			return (
				<li className="even" key={number}>
					{number}
				</li>
			);
		} else {
			return (
				<li className="odd" key={number}>
					{number}
				</li>
			);
		}
	});
	return number;
};

export default NumberArray;
