import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between pt-[2rem] text-base">
      <Link to="/">
        <img src="" alt="" />
        <span>Zhenni&apos;s Portfolio</span>
      </Link>
      <div className="hidden sm:flex sm:gap-10">
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/projects">Projects</Link>
        <a href="/Resume_2024.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
