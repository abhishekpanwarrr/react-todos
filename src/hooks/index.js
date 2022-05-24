import { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { database } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let unsubscribe = query(
        collection(database, "tasks"),
        where("userId", "==", "GACMEFOtLWPiOahEvLo9MLLVbMp2")
      );

      unsubscribe =
        selectedProject && !collatedTasksExist(selectedProject)
          ? (unsubscribe = query(
              collection(database, "tasks"),
              where("projectId", "==", selectedProject)
            ))
          : selectedProject === "TODAY"
          ? (unsubscribe = query(
              collection(database, "tasks"),
              where("date", "==", moment().format("DD?MM/YYYY"))
            ))
          : selectedProject === "INBOX" || selectedProject === 0
          ? (unsubscribe = query(
              collection(database, "tasks"),
              where("date", "==", "")
            ))
          : unsubscribe;

      const querySnapshot = await getDocs(unsubscribe);
      // console.log(querySnapshot.docs.);
      const newTasks = querySnapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
      // console.log(task);
      setTasks(
        selectedProject === "NEXT_7_DAYS"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    };
    getData();
  }, [selectedProject]);
  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      let unsubscribe = query(
        collection(database, "projects"),
        where("userId", "==", "GACMEFOtLWPiOahEvLo9MLLVbMp2"),
        orderBy("projectId")
      );
      const querySnapshot = await getDocs(unsubscribe);
      const allProjects = querySnapshot.docs.map((project) => ({
        docId: project.id,
        ...project.data(),
      }));
      if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
        setProjects(allProjects);
      }
    };
    getProjects();
  }, [projects]);
  return { projects, setProjects };
};
