import { useParams } from "react-router-dom";
import PROJECTS from "../projects-array";
import { useEffect } from "react";

import GithubLink from "../components/GithubLink";
import WebsiteLink from "../components/WebsiteLink";

const fetchProject = (projectId: string) => {
  return PROJECTS.find((project) => project.id === projectId);
};

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? fetchProject(projectId) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col  rounded-xl p-32">
      <img
        src={project?.image}
        alt={project?.title}
        className=" border rounded-xl shadow-xl"
      />
      <div className="flex p-4 gap-10 justify-center">
        {project?.websiteLink && project.websiteLink.length > 0 && (
          <WebsiteLink url={project.websiteLink} />
        )}

        {project?.githubLink && project.githubLink.length > 0 && (
          <GithubLink url={project.githubLink} />
        )}
      </div>

      <h2 className=" underline text-4xl py-4">{project?.title}</h2>
      <div>{project?.descriptionLong}</div>
      <h3 className="text-2xl">Skills</h3>
      <ul className="flex">
        {project?.skills.map((skill) => (
          <li className="px-2 border rounded-full " key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <a href={project?.githubLink} target="_blank" rel="noreferrer"></a>
      <a href={project?.websiteLink} target="_blank" rel="noreferrer"></a>
      <h3 className="text-2xl">Learnings</h3>

      <ul className="list-disc">
        {project?.learnings?.map((learning) => (
          <li key={learning}>{learning}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
