import "../css/heder.css";
import { useState, useEffect, useContext } from "react";
import { Sun } from "lucide-react";
import { MdDarkMode } from "react-icons/md";
import { ScrollContext } from "../context/ScrollContext";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const { headerWidth , theme ,setTheme} = useContext(ScrollContext);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);

  // راقب تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "projects", "contact"];

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();

        // نتحقق إذا الجزء العلوي من السكشن داخل الشاشة
        if (rect.top <=300 && rect.bottom >= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // حتى يتفعل أول مرة
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // إعدادات الستايل الديناميكي
  const scrollY = window.scrollY;
  const dynamicStyle =
    isWideScreen && scrollY !== 0
      ? {
          width: headerWidth,
          backgroundColor: "#4a4a4a73",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 10px #ffffff33",
        }
      : {
          width: headerWidth,
        };

  return (
    <div className="header">
      <div
        style={
          isWideScreen
            ? dynamicStyle
            : {
                backgroundColor: "#ffffff18",
                border: "1px solid #ffffff3d",
                backdropFilter: "blur(4px)",
                boxShadow: "0 0 10px #ffffff33",
              }
        }

     
        className="header-contianer"
      >
        <div className="icon-mas">
          <img src="Logo.jpg" alt="no photo" />
        </div>

        <div  className="navigate">
          <div className={activeSection === "home" ? "activ" : ""}>
            <a href="#home">
              <span    style={theme==="sun"? {}: {color:"#000"}}>Home</span>
            </a>
          </div>

          <div className={activeSection === "about" ? "activ" : ""}>
            <a href="#about">
              <span    style={theme==="sun"? {}: {color:"#000"}}>About</span>
            </a>
          </div>

          <div className={activeSection === "projects" ? "activ" : ""}>
            <a href="#projects">
              <span    style={theme==="sun"? {}: {color:"#000"}}>Projects</span>
            </a>
          </div>

          <div className={activeSection === "contact" ? "activ" : ""}>
            <a href="#contact">
              <span    style={theme==="sun"? {}: {color:"#000"}}>Contact</span>
            </a>
          </div>
        </div>

        <div className="theme-mode" onClick={()=>{
                if(theme==="sun")
                setTheme("dark")
                else
                setTheme("sun");
        }}>
          { theme ==="sun"?  <Sun className="sun-icon" />: <MdDarkMode style={{color:"#000"}} className="dark-icon" />}
        
        </div>
      </div>
    </div>
  );
}
