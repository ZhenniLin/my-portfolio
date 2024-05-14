import BackArrow from "../../ui/BackArrow";
import CodeBlock from "./CodeBlock";
import CodeBlockV1 from "./CodeBlock-1";

function About() {
  return (
    <>
      <BackArrow />
      <div className="flex flex-col items-center ">
        <h1 className="mb-2  mt-[5rem] text-base font-bold sm:text-2xl">
          About me
        </h1>
        <p className="mb-4 text-sm opacity-75 sm:text-base">
          2024-05-13 • 1 min • Zhenni
        </p>
        <CodeBlockV1 />
      </div>
    </>
  );
}

export default About;
