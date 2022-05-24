import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../firebase";

const Checkbox = ({ id }) => {
  const archiveTask = async () => {
    const docRef = doc(database, "tasks", id);
    const data = await updateDoc(docRef, {
      archived: true,
    });
    return data;
  };
  return (
    <div className="checkbox-holder" onClick={() => archiveTask()}>
      <span className="checkbox" />
    </div>
  );
};

export default Checkbox;
