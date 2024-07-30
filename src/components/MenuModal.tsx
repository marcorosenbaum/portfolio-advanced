import { NavLink } from "react-router-dom";
import { House, FolderOpenDot, SquareUserRound } from "lucide-react";

const MenuModal: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const handleCloseMenu = () => {
    closeMenu();
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black text-white flex justify-center items-center ">
      <nav className="flex flex-col text-xl  gap-10  ">
        <button onClick={handleCloseMenu} className="p-4 text-lg">
          close menu
        </button>
        <NavLink
          onClick={handleCloseMenu}
          to="/"
          className={({ isActive }) =>
            `flex gap-6 items-center ${isActive ? "text-accent-color" : ""}`
          }
        >
          <House size={"2.5rem"} />
          <span>Home</span>
        </NavLink>
        <NavLink
          onClick={handleCloseMenu}
          to="/projects"
          className={({ isActive }) =>
            `flex gap-6 items-center ${isActive ? "text-accent-color" : ""}`
          }
        >
          <FolderOpenDot size={"2.5rem"} />
          <span>Projects</span>
        </NavLink>
        <NavLink
          onClick={handleCloseMenu}
          to="/about"
          className={({ isActive }) =>
            `flex gap-6 items-center ${isActive ? "text-accent-color" : ""}`
          }
        >
          <SquareUserRound size={"2.5rem"} />
          <span>About</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default MenuModal;
