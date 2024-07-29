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
    <div className="flex flex-col  rounded-xl p-32 gap-4">
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

      <div className="flex justify-between mt-8">
        <div className="w-1/3 gap-4 flex flex-col">
          <h2 className=" underline text-4xl ">{project?.title}</h2>
          <div className="">{project?.descriptionLong}</div>
        </div>

        <div>
          <h3 className="text-2xl pb-4">Skills</h3>
          <ul className="flex flex-col gap-4">
            {project?.skills.map((skill) => (
              <li
                className="px-2 border rounded-full border-current"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl pb-4 ">Learnings</h3>
          <ul className=" flex flex-col gap-4">
            {project?.learnings?.map((learning) => (
              <li className="px-2 list-disc " key={learning}>
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
