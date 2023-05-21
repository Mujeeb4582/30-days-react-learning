import mujeebimage from "../images/Mujeeb Profile Picture.jpg";
import { student } from "./header";

const UserCard = () => (
  <div className="user-card">
    <img src={mujeebimage} alt="mujeeb" />
    <h2>
      {student.firstName} {student.lastName}
    </h2>
  </div>
);

export default UserCard;
