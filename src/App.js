import "./App.css";
import Squares from "./background/BackgroundPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Aboutsec from "./components/Aboutsec";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollContext } from "./context/ScrollContext";
import { useContext } from "react";
function App() {
  const { theme } = useContext(ScrollContext);
  return (
    <div className="app-container">
      {/* الخلفية */}
      <Squares
        speed={0.5}
        squareSize={50}
        direction="diagonal"
        borderColor={theme === "sun" ? "#ffffff11" : "#00000011"}
        hoverFillColor="transparent"
        className="canvas-bg"
      />

      {/* المحتوى */}
      <div className="content">
        <Header />
        <HomePage />
        <Aboutsec />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
