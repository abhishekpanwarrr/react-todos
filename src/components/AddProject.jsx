import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { database } from "../firebase";
import { useProjectsValue } from "../context";
import { doc, setDoc } from "firebase/firestore";

const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");
  const projectId = uuidV4();
  const { projects, setProjects } = useProjectsValue();

  const addProject = async () => {
    if (projectName) {
      await setDoc(doc(database, "projects", projectId), {
        projectId,
        name: projectName,
        userId: "GACMEFOtLWPiOahEvLo9MLLVbMp2",
      });
      setProjects([...projects]);
      setProjectName("");
      setShow(false);
    }
  };
  return (
    <div className="add-project">
      {show && (
        <div className="add-project__input">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span className="add-project__cancel" onClick={() => setShow(false)}>
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span className="add-project__text" onClick={() => setShow(!show)}>
        Add Project
      </span>
    </div>
  );
};

export default AddProject;
