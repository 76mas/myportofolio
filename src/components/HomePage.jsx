import { useContext } from "react";
import "../css/home.css"
import { ChevronDown } from 'lucide-react';
import ShinyText from "../background/TextStyle"
import { ScrollContext } from "../context/ScrollContext";

export default function HomePage(){
  const { theme} = useContext(ScrollContext);
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const mode=theme==="dark"?{color:"#000",}
:{};


return (<div id="home" className="home-page">
    

<div style={mode} className="home-container">

    <div style={mode}  className="right-side">

        <div style={theme==="sun"? {}: {color:"#000",backgroundColor:"#dadada"}} className="hello">Hi, I'm </div>
        <ShinyText  text="Mahmoud" disabled={false} speed={5} className='custom-class' />
        <h2 style={mode} className="job-name" >Frontend Developer & Computer Engineer</h2>
        <h3  style={mode} className="discription">
        Focused on building clean, scalable, and user-friendly applications using modern web technologies.  
        With strong experience in frontend and some backend development, I’m committed to delivering high-performance solutions and meaningful digital experiences.
        </h3>
        <div  className="skills">
            <div    style={theme==="sun"? {}: {color:"#000",backgroundColor:"#dadada"}}>React</div>
            <div style={theme==="sun"? {}: {color:"#000",backgroundColor:"#dadada"}}>Node.js</div>
            <div style={theme==="sun"? {}: {color:"#000",backgroundColor:"#dadada"}}>C++</div>
        </div>

        <div className="buttons">
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </div>

    </div>    


    <div className="left-side">

        <div  className={theme==="sun"?"left-container":"left-container left-containe-dark"}>

            <img src="me.jpg" alt="no photo"/>


        </div>
    
    </div>    
</div>
    
    <div className="go">
    <ChevronDown style={theme==="sun"? {}: {color:"#000"}} className="go1" size={30}/>
    </div>
</div>)



}




