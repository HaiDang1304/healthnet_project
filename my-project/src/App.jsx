import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header, Footer } from "./components";
import {
  HomePage,
  FeaturesPage,
  DoctorsPage,
  AIConsultPage,
  ContactPage,
  LoginPage,
  RegisterPage,
} from "./pages";
import SideBar from "./components/layout/SideBar.jsx";
import DashBoardLayout from "./components/layout/DashBoardLayout.jsx";
import DashBoardHome from "./pages/dashboard/DashBoardHome.jsx";

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const hideLayoutRoutes = ["/dashboard", "/login", "/register"];
  const shouldHideLayout = hideLayoutRoutes.some((route) =>
    location.pathname.startsWith(route),
  );

  return (
    <div
      className={`bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-50 font-display transition-colors duration-200`}
    >
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        {!shouldHideLayout && (
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/ai-consult" element={<AIConsultPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="*" element={<HomePage />} />

          <Route path="/dashboard" element={<DashBoardLayout />}>
            <Route index element={<DashBoardHome />} />
            <Route path="records" element={<div>Records Page</div>} />
            <Route path="doctors" element={<div>Doctors Page</div>} />
            <Route path="ai-chat" element={<div>AI Chat Page</div>} />
            <Route path="appointments" element={<div>Appointments Page</div>} />
          </Route>
        </Routes>

        {!shouldHideLayout && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
