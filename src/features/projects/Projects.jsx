import BackArrow from "../../ui/BackArrow";
// import ReduxIcon from "redux.svg";
// import TailwindIcon from "tailwindcss.svg";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
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
      { icon: faHtml5, color: "text-red-500" },
      { icon: faCss3Alt, color: "text-blue-500" },
      { icon: faJsSquare, color: "text-yellow-500" },
    ],
  },
  {
    name: "Fast React Pizza",
    subname: "Pizza Order",
    img: "pizza.png",
    imgsrc: "https://mapty-zhennilin.netlify.app/",
    date: "12-2023",
    skills: [
      { icon: "react.svg" },
      { icon: "vite.svg" },
      { icon: "redux.svg" },
      { icon: "tailwindcss.svg" },
      { icon: "react-router.svg" },
    ],
  },
  {
    name: "The Wild Oasis",
    subname: "Hotel system",
    img: "the-wild-oasis.png",
    imgsrc: "https://wild-oasis-zhennilin.netlify.app/login",
    date: "02-2024",
    skills: [
      { icon: "react.svg" },
      { icon: "vite.svg" },
      { icon: "react-query.svg" },
      { icon: "react-router.svg" },
      { icon: "styled-components.svg" },
      { icon: "supabase.svg" },
    ],
  },
  {
    name: "Boardy",
    subname: "Real-Time Board",
    img: "boardy.png",
    imgsrc: "https://board-clone.vercel.app/",
    date: "06-2024",
    skills: [
      { icon: "typescript.svg" },
      { icon: "nextjs.svg" },
      { icon: "tailwindcss.svg" },
      { icon: "clerk.svg" },
      { icon: "liveblocks.png" },
      { icon: "convex.png" },
      // { icon: "shadcn.svg" },
    ],
  },
  {
    name: "My Portfolio",
    subname: "Zhenni's Portfolio",
    img: "myportfolio.png",
    imgsrc: "https://zhennilin-portfolio.netlify.app/",
    date: "05-2024",
    skills: [
      { icon: "react.svg" },
      { icon: "vite.svg" },
      { icon: "tailwindcss.svg" },
      { icon: "react-router.svg" },
      { icon: "nextui.svg" },
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
