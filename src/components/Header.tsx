import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AppContext from "../store/app-context";
import { Moon, Sun, House, FolderOpenDot, SquareUserRound } from "lucide-react";
import MenuModal from "./MenuModal";

const Header = () => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);

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

  const handleMenuClick = () => {
    setShowMenuModal((prevState) => !prevState);
  };

  return (
    <header
      id="main-header"
      className={`${
        shrinkHeader && windowWidth > 640 ? "sm:w-6/12 xl:w-3/12 sm:top-4" : " "
      } px-16 w-full sm:w-10/12 gap-8 sm:top-1 z-[100] p-4 fixed sm:rounded-full sm:border border-accent-color  ${
        appCtx.darkMode ? "bg-gray-400/30" : "bg-gray-400/50"
      } left-1/2 transform -translate-x-1/2 flex  backdrop-blur-md  transition-all duration-300`}
    >
      <button className=" text-white" onClick={() => appCtx.setDarkMode()}>
        {appCtx.darkMode ? (
          <Moon stroke="currentColor" size="1.5rem" />
        ) : (
          <Sun color="black" size="1.5rem" />
        )}
      </button>

      {windowWidth > 640 ? (
        <nav className="flex  gap-8 flex-1 justify-end ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex gap-2 hover:text-accent-color ${
                isActive ? "text-accent-color" : ""
              }`
            }
          >
            <House size={"1.5rem"} />
            {shrinkHeader ? "" : "Home"}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex gap-2 hover:text-accent-color ${
                isActive ? "text-accent-color" : ""
              }`
            }
          >
            <FolderOpenDot size={"1.5rem"} />
            {shrinkHeader ? "" : "Projects"}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex gap-2 hover:text-accent-color ${
                isActive ? "text-accent-color" : ""
              }`
            }
          >
            <SquareUserRound size={"1.5rem"} />
            {shrinkHeader ? "" : "About"}
          </NavLink>
        </nav>
      ) : (
        <button className="ml-auto " onClick={handleMenuClick}>
          Menu
        </button>
      )}
      {showMenuModal && <MenuModal closeMenu={handleMenuClick} />}
    </header>
  );
};

export default Header;
