import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Services from "./pages/services/Services";
import ProjectsDashboard from "./pages/dashboard/projects/ProjectsDashboard";
import Contact from "./pages/contact/Contact";
import Clients from "./pages/clients/Clients";
import Whatsapp from "./components/Whatsapp";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {localStorage.getItem("token") ? (
            <>
              <Route
                path="/dashboard/projects"
                element={<ProjectsDashboard />}
              />
              <Route
                path="/"
                element={
                  <>
                    <Home /> <Whatsapp />
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  <>
                    <Home /> <Whatsapp />
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
