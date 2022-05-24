import React from "react";
import Tasks from "../Tasks";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Content;
