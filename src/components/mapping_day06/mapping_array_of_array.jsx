const Skill = ({ skill: [tech, level] }) => (
	<li>
		{tech} : {level}
	</li>
);

const Skills = ({ skills }) => {
	const skillList = skills.map((skill) => <Skill skill={skill} />);
	return <ul>{skillList}</ul>;
};

export default Skills;
