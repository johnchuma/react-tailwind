import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArchivesPage from "./pages/archivesPage";
import ProjectsPage from "./pages/projectsPage";
import TrashPage from "./pages/trashPage";
import UpcomingPage from "./pages/upcomingPage";
import OverviewPage from "./pages/overviewPage";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/archives" element={<ArchivesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
