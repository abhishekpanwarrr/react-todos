import React, { useState } from "react";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
const App = () => {
  // const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [show, setShow] = useState(false);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className="">
          <Header setShow={setShow} show={show} />
          <Content show={show} setShow={setShow} />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
