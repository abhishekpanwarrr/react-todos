import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../firebase";

const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = async (docId) => {
    await deleteDoc(doc(database, "projects", docId));
    setProjects([...projects]);
    setSelectedProject("INBOX");
  };

  return (
    <>
      <span className="sidebar__dot">.</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
              </button>
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </div>
          </div>
        )}
      </span>
    </>
  );
};

export default IndividualProject;
