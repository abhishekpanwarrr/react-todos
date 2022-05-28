import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import IndividualProject from "./IndividualProject";

const Projects = ({ activeNull = true, show, setShow }) => {
  const [active, setActive] = useState(activeNull);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const width = window.innerWidth;
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
          width < 600 && setShow((show) => !show);
        }}
      >
        <IndividualProject project={project} />
      </li>
    ))
  );
};

export default Projects;
