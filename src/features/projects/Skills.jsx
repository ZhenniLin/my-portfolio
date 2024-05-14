import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills({ skills }) {
  return (
    <div className="mb-4 flex flex-wrap gap-[1rem] opacity-85">
      {skills.map((skill, index) => {
        if (typeof skill.icon === "object") {
          return (
            <FontAwesomeIcon
              key={index}
              icon={skill.icon}
              size="2x"
              className={`text-${skill.color}-500`}
            />
          );
        } else if (typeof skill.icon === "string") {
          return (
            <img key={index} src={skill.icon} alt="icon" className="h-8 w-7" />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Skills;
