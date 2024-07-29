import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AppContext from "../store/app-context";

const ProjectCard: React.FC<{
  id: string;
  title: string;
  image: string;
  description: string;
  skills: string[];
  githubLink: string;
  websiteLink: string;
}> = ({ id, title, image, description, skills }) => {
  const [ishovered, setIshovered] = useState(false);
  const { darkMode } = useContext(AppContext);

  return (
    <Link
      to={`/projectDetails/${id}`}
      className={`${
        darkMode ? "bg-custom-dark" : "bg-white"
      } hover:scale-[102%] hover:text-black duration-300 card rounded-xl border border-accent-color/50  shadow-2xl  w-80 flex animate-fadeIn`}
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <div className="card-content ">
        <img
          src={image}
          alt={title}
          className="rounded-t-xl p-1 border-b"
          loading="lazy"
        />
        <div className=" p-4 flex flex-col gap-2 justify-between">
          <h1 className="text-3xl">{title}</h1>
          <p className="h-32">{description}</p>
          <ul className="flex  gap-2">
            {skills.map((skill, index) => {
              if (index < 3) {
                return (
                  <li
                    className={`${
                      ishovered
                        ? "bg-custom-dark/70 text-white"
                        : "bg-accent-color/70 "
                    } rounded-full px-2  duration-300 text-black`}
                    key={skill}
                  >
                    {skill}
                  </li>
                );
              }
            })}
          </ul>

          <div className="flex justify-center"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
