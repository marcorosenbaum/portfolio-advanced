import { Link } from "react-router-dom";
import { useEffect } from "react";

import PROJECTS from "../projects-array";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-32">
      <div className=" py-32">
        <h1 className="text-3xl font-bold  text-center">PROJECTS</h1>
      </div>
      <div className="flex min-h-screen gap-20  justify-center  pb-20 flex-wrap">
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
      </div>
    </section>
  );
};

export default Projects;
