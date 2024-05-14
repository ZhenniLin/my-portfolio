import BackArrow from "../../ui/BackArrow";
// import ReduxIcon from "redux.svg";
// import TailwindIcon from "tailwindcss.svg";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import CardItem from "./CardItem";

const projects = [
  {
    name: "Mapty",
    subname: "Frontend Map",
    img: "mapty.png",
    imgsrc: "https://mapty-zhennilin.netlify.app/",
    date: "10-2023",

    skills: [
      { icon: faHtml5, color: "red" },
      { icon: faCss3Alt, color: "blue" },
      { icon: faJsSquare, color: "yellow" },
    ],
  },
  {
    name: "Fast React Pizza",
    subname: "Pizza Order",
    img: "pizza.png",
    imgsrc: "https://mapty-zhennilin.netlify.app/",
    date: "12-2023",
    skills: [
      { icon: faReact, color: "blue" },
      { icon: "redux.svg", color: "orange" },
      { icon: "tailwindcss.svg", color: "teal" },
    ],
  },
  {
    name: "The Wild Oasis",
    subname: "Hotel system",
    img: "the-wild-oasis.png",
    imgsrc: "https://wild-oasis-zhennilin.netlify.app/login",
    date: "02-2024",
    skills: [
      { icon: faHtml5, color: "red" },
      { icon: faCss3Alt, color: "blue" },
    ],
  },
];

function Projects() {
  return (
    <>
      <BackArrow />
      <div className="mt-[2rem] flex flex-wrap items-center justify-center gap-[3rem] ">
        {projects.map((project, index) => (
          <CardItem
            key={index}
            name={project.name}
            subname={project.subname}
            img={project.img}
            imgsrc={project.imgsrc}
            date={project.date}
            skills={project.skills}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
