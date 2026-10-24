import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/layout/SiteLayout";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetail from "@/pages/ProjectDetail";
import ExperiencePage from "@/pages/ExperiencePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
