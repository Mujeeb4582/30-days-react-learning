const Skill = ({ skill: [tech, level] }) => (
	<li>
		{tech} : {level}
	</li>
);

const Skills = ({ skills }) => {
	const skillList = skills.map((skill) => <Skill key={skill} skill={skill} />);
	return <ul>{skillList}</ul>;
};

export default Skills;
