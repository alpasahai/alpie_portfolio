import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";
import KeySkillsAboutMe from "./pages/key_skills_abt_me";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact_me";

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