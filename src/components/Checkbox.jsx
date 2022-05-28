import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../firebase";
import { useSelectedProjectValue } from "../context";
const Checkbox = ({ id }) => {
  const { setSelectedProject } = useSelectedProjectValue();
  const archiveTask = async () => {
    const docRef = doc(database, "tasks", id);
    const data = await updateDoc(docRef, {
      archived: true,
    });
    setSelectedProject("INBOX");
    return data;
  };
  return (
    <div className="checkbox-holder" onClick={() => archiveTask()}>
      <span className="checkbox" />
    </div>
  );
};

export default Checkbox;
