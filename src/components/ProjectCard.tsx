import { Link } from "react-router-dom";
import { useState } from "react";

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

  return (
    <Link
      to={`/projectDetails/${id}`}
      className="hover:scale-[102%] duration-300 card rounded-xl border border-accent-color/50  shadow-2xl  w-80 flex animate-fadeIn "
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <div className="card-content ">
        <img src={image} alt={title} className="rounded-t-xl p-1 border-b" />
        <div className=" p-4 flex flex-col gap-2 justify-between">
          <h1 className="text-3xl">{title}</h1>
          <p className="h-32">{description}</p>
          <ul className="flex  gap-2">
            {skills.map((skill) => (
              <li
                className={`${
                  ishovered ? "bg-white text-black" : "bg-accent-color/70"
                } rounded-full px-2 border duration-300`}
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="flex justify-center"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
