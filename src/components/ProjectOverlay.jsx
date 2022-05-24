import React from "react";
import { useProjectsValue } from "../context";

const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjetOverlay,
}) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li
              key={project.projectId}
              onClick={() => {
                setProject(project.projectId);
                setShowProjetOverlay(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ProjectOverlay;
