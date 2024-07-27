import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import PROJECTS from "../projects-array";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <section className="flex min-h-screen gap-20  justify-center pt-40 pb-20 flex-wrap">
      {PROJECTS.map((project, index) => (
        <Link
          to={`/projectDetails/${project.id}`}
          key={project.id}
          // className={`skill ${
          //   isVisible ? "fly-in" : ""
          // } flex flex-col flex-1 items-center`}
          // style={{ animationDelay: `${index * 0.2}s` }}
        >
          <ProjectCard
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            skills={project.skills}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        </Link>
      ))}
    </section>
  );
};

export default Projects;
