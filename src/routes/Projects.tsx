import { Link } from "react-router-dom";
import { useEffect } from "react";

import PROJECTS from "../projects-array";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex min-h-screen gap-20  justify-center pt-40 pb-20 flex-wrap">
      {PROJECTS.map((project) => (
        <Link to={`/projectDetails/${project.id}`} key={project.id}>
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
