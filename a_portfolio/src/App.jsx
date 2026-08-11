import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import KeySkillsAboutMe from "./pages/KeySkillsAboutMe";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<KeySkillsAboutMe />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;