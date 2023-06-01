import Numbers from "./mapping_array_nymbers";

const Mapping = () => {
  const numbersArray = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <div>
        <h2>Mapping and Rendring Array</h2>
        <h3>Numbers List</h3>
        <ul>
          <Numbers numbers={numbersArray} />
        </ul>
      </div>
    </div>
  );
}

export default Mapping;