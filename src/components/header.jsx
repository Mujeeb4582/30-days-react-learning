const welcome = "Welcome to 30 Days of React";
const title = "Getting started React";
const subtitle = "JavaScript Library";
export const student = {
  firstName: "Mujeeb",
  lastName: "Ur Rahman",
};
const date = "May 3, 2023";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Student: {student.firstName} {student.lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  );
};

export default Header;
