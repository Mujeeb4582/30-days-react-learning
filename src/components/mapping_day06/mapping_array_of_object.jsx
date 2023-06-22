const Country = ({ country: { name, city }}) => (
  <div>
    <h4>{name}</h4>
    <small>{city}</small>
  </div>
);

const Countries = ({ countries }) => {
	const countriesList = countries.map((country) => <Country key={country.name} country={country} />);
	return <div>{countriesList}</div>;
};

export default Countries;
