import React from "react";
import Tasks from "../Tasks";
import Sidebar from "./Sidebar";

const Content = ({ show, setShow }) => {
  return (
    <div className="content">
      <Sidebar setShow={setShow} show={show} />
      <Tasks />
    </div>
  );
};

export default Content;
