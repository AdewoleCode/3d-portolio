import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import NavigationBar from "./components/navigationBar/NavigationBar";
import ProjectDetails from "./pages/projectDetails/projectDetails";
// import Footer from "./components/footer/Footer";

function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        {/* <Route path="/project/:id" element={<PortfolioDes />} /> */}
      </Routes>
    </BrowserRouter>
  );

}

export default App
