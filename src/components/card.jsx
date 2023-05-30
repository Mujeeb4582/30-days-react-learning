import mujeebimage from "../images/Mujeeb Profile Picture.jpg";
import { student } from "./header";

const UserCard = ({ skillsArray }) => {
	const skillsFormated = skillsArray.map((skill) => (
		<li
			key={skill}
			style={{
				padding: "0.3rem 0.4rem",
				backgroundColor: "#6cf",
				color: "#fff",
				wordWrap: "normal",
				borderRadius: "10px",
			}}
		>
			{skill}
		</li>
	));
	return (
		<div className="user-card">
			<img src={mujeebimage} alt="mujeeb" />
			<h2>
				{student.firstName} {student.lastName}{" "}
				<span
					style={{
						backgroundColor: "#6cf",
						color: "#fff",
						borderRadius: "50%",
					}}
				>
					&#x2713;
				</span>
			</h2>
			<p style={{ lineHeight: "80px" }}>
				Student Full-Stack-Developer, Pakistan
			</p>
			<h2 style={{ marginBottom: "30px" }}>Skills</h2>
			<ul
				style={{
					display: "flex",
					gap: "10px",
					alignItems: "center",
					flexWrap: "wrap",
					marginBottom: "30px",
				}}
			>
				{skillsFormated}
			</ul>
			<div>&#128337; Joined on May 22, 2023</div>
		</div>
	);
};
export default UserCard;
