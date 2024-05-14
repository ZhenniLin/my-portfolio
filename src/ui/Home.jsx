import { Link } from "react-router-dom";
import avatar from "/avatar-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonDemo from "./ButtonDemo";

function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center  p-6">
      <div className="mb-4 h-24 w-24 rounded-full border-[2.5px] border-stone-700  opacity-75">
        <img src={avatar} alt="Profile" className="pl-2" />
      </div>
      <h1 className="mb-2 text-2xl font-bold">Zhenni Lin</h1>
      <p className="mb-4 text-lg">Hello World Printer</p>
      <div className="mb-4 flex space-x-4">
        <a
          href="https://www.github.com/zhennilin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/zhenni-lin-0691ab257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
        </a>
        <a href="mailto:zhennilin1115@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
        </a>
      </div>
      <div className="mt-4 flex space-x-4">
        <ButtonDemo>
          <Link to="/about">About</Link>
        </ButtonDemo>
        <ButtonDemo>
          <Link to="/projects">Projects</Link>
        </ButtonDemo>
        <ButtonDemo>
          <a href="/CV_2024.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </ButtonDemo>
      </div>
    </div>
  );
}

export default Home;
