import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AppContext from "../store/app-context";
import { Moon, Sun, House, FolderOpenDot, SquareUserRound } from "lucide-react";

const Header = () => {
  const [shrinkHeader, setShrinkHeader] = useState(false);

  const appCtx = useContext(AppContext);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage <= 10) {
        setShrinkHeader(false);
      } else {
        setShrinkHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`${
        shrinkHeader && windowWidth > 1000
          ? "md:w-1/5 md:top-4"
          : "w-10/12 px-16  md:top-1"
      } z-[1000] w-10/12 p-4 fixed md:rounded-full md:border border-accent-color bg-gray-400/30 left-1/2 transform -translate-x-1/2 flex  backdrop-blur-md  transition-all duration-300`}
    >
      <button
        className="ml-auto text-white"
        onClick={() => appCtx.setDarkMode()}
      >
        {appCtx.darkMode ? (
          <Moon stroke="currentColor" size={24} />
        ) : (
          <Sun color="black" size={24} />
        )}
      </button>

      {windowWidth > 1200 ? (
        <nav className="flex  gap-8 flex-1 justify-end ">
          <Link to="/" className="flex gap-2 hover:text-accent-color ">
            <House size={"1.5rem"} />
            {shrinkHeader ? "" : "Home"}
          </Link>
          <Link to="/projects" className="flex gap-2 hover:text-accent-color ">
            <FolderOpenDot size={"1.5rem"} />
            {shrinkHeader ? "" : "Projects"}
          </Link>
          <Link to="/about" className="flex gap-2 hover:text-accent-color ">
            <SquareUserRound size={"1.5rem"} />
            {shrinkHeader ? "" : "About"}
          </Link>
        </nav>
      ) : (
        <button className="ml-auto ">Menu</button>
      )}
    </header>
  );
};

export default Header;
