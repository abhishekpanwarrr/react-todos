import React from "react";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
const App = () => {
  // const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className="">
          <Header />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
