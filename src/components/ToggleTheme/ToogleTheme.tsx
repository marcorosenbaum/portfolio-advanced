import classes from "./ToggleTheme.module.css";
import { useContext } from "react";
import AppContext from "../../store/app-context";

import day from "../../assets/images/toggle-theme/toggle-day.png";
import night from "../../assets/images/toggle-theme/toggle-night.png";
import sun from "../../assets/images/toggle-theme/sun.png";
import moon from "../../assets/images/toggle-theme/moon.png";

export default function Toggle() {
  const { darkMode, setDarkMode } = useContext(AppContext);

  const handleClick = () => {
    setDarkMode();
  };
  return (
    <div onClick={handleClick} className={classes.wrapper}>
      <img
        className={`${classes.night} ${
          darkMode ? classes["night-appear"] : ""
        }`}
        src={night}
        alt="Night"
      />
      <img className={classes.day} src={day} alt="Day" />

      <div
        className={`${classes.toggle} ${classes["inner-wrapper"]} ${
          darkMode ? classes["toggle-right"] : ""
        }`}
      >
        <img className={classes.toggle} src={moon} alt="Moon" />
        <img
          className={`${classes.toggle} ${darkMode ? classes.sun : ""} `}
          src={sun}
          alt="Sun"
        />
      </div>
    </div>
  );
}
