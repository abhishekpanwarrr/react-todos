import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import AddProject from "../AddProject";
import Projects from "../Projects";

const Sidebar = ({ show, setShow }) => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);
  const width = window.innerWidth;
  return (
    <div className={show ? "show" : "sidebar"}>
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
            width < 600 && setShow((show) => !show);
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
            width < 600 && setShow((show) => !show);
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7_DAYS");
            width < 600 && setShow((show) => !show);
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">
        {showProjects && <Projects setShow={setShow} show={show} />}
      </ul>
      {showProjects && <AddProject />}
    </div>
  );
};

export default Sidebar;
