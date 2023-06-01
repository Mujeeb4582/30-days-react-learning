import logohtml from "../images/html_logo.png";
import logocss from "../images/css_logo.png";
import logojs from "../images/js_logo.png";
import logoreact from "../images/react_logo.png";

// import Button from "./button";
import UserCard from "./card";
import { student } from "./header";
import HexaColor from "./hexColorGenerator";
import LanguageCard from "./lunguageCard";
import SubscribeForm from "./subscribeForm";
import { hexaColor } from "../utils/hexColorGenerattor";
import { skillsArray } from "../utils/skills";
import Mapping from "./mapping_day06/mappingAndRendringArray";

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
      <UserCard skillsArray={skillsArray}/>
      <LanguageCard logohtml={logohtml} logocss={logocss} logojs={logojs} logoreact={logoreact}/>
      <SubscribeForm />
      {/* <Button /> */}
      <HexaColor hexaColor={hexaColor}/>
      <Mapping />
    </div>
  </main>
);

export default Main;
