import { Link } from "react-router-dom";
import classes from "./RouteButton.module.css";
import TypewriterText from "./TypewriterText";
import AppContext from "../store/app-context";
import { useContext } from "react";

const RouteButton: React.FC<{
  route: string;
  heading: string;
  text: string[];
  image: string;
}> = ({ route, heading, text, image }) => {
  const { darkMode } = useContext(AppContext);
  return (
    <Link
      to={route}
      className={`${classes["route-button"]} hover:scale-[102%] ${
        darkMode ? "bg-[#18334e]" : "bg-white"
      }  border border-accent-color shadow-xl rounded-lg  w-80 active:scale-105 duration-100 `}
    >
      <div className="">
        <img
          src={image}
          alt={heading}
          className=" rounded-t-lg h-[12rem] w-full object-cover p-1"
          loading="lazy"
        />
      </div>
      <div
        className={`${classes["route-button-content"]} p-4 flex flex-col gap-4 items-center`}
      >
        <h2 className="text-3xl">{heading}</h2>
        {/* <p>{text}</p> */}
        {/* <TypewriterText words={text} /> */}
        {text.length > 1 ? <TypewriterText words={text} /> : <p>{text}</p>}
      </div>
    </Link>
  );
};

export default RouteButton;
