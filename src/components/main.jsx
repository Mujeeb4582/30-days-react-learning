import UserCard from "./card";
import { student } from "./header";

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1998;
const currentYear = 2023;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {student.firstName} {student.lastName} is {age} years old.
  </p>
);

const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

const Main = () => (
  <main>
    <div className="main-wrapper">
      <div>
        <p>
          Prequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {result}
        {personAge}
      </div>
      <UserCard />
    </div>
  </main>
);

export default Main;
