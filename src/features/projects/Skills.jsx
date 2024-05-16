import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills({ skills }) {
  return (
    <div className="mb-4 flex max-w-[17rem] flex-wrap gap-[1rem] opacity-85">
      {skills.map((skill, index) => {
        if (typeof skill.icon === "object") {
          return (
            <FontAwesomeIcon
              key={index}
              icon={skill.icon}
              size="2x"
              className={`${skill.color}`}
            />
          );
        } else if (typeof skill.icon === "string") {
          return (
            <img
              key={index}
              src={skill.icon}
              alt="icon"
              className={`${skill.color} h-8 w-7 `}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default Skills;
