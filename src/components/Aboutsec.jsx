import "../css/AboutSec.css";
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

export default function Aboutsec(){

  const { theme} = useContext(ScrollContext);

    return(
    <div id="about" className="About-section">
        
        <div className="About-container">

<h1>About Me</h1>

<div className="boxs">
            <div style={theme==="sun"?{}:{color:"#000",backgroundColor: "#c1c1c191",
   border: "1px solid #ffffff3d",
   backdropFilter: "blur(4px)",
   boxShadow: "0 0 10px #ffffff33", }} className="left-box box">
                <h1>Professional Background</h1>
                <p>
                    I’m a Frontend Developer with a strong interest in building interactive and responsive web applications using modern technologies like HTML, CSS, JavaScript, and React. I focus on creating clean user interfaces and delivering smooth user experiences.
                    Currently, I’m learning backend development using Node.js and Express, aiming to become a full-stack developer capable of building complete web solutions. I have also worked with API integration and basic state management in React applications.
                    I'm passionate about building practical, user-focused products and continuously improving my skills through real-world projects and challenges.
                </p>
            </div>

            <div 
            style={theme==="sun"?{}:{color:"#000",backgroundColor: "#c1c1c191",
                border: "1px solid #ffffff3d",
                backdropFilter: "blur(4px)",
                boxShadow: "0 0 10px #ffffff33", }}

                className="right-box box">
                <h1>Experience</h1>
         
                  <div className="experience-container">

                    <div className="ex">
                        <h2  style={theme==="sun"?{}:{color:"#00000083"}}>Frontend Development with React</h2>
                        <div className={theme==="sun"? "bar bar-65":"bar bar-65 bardark1"}  ></div>
                    </div>

                    <div className="ex">
                        <h2 style={theme==="sun"?{}:{color:"#00000083"}}>Building Real Projects with API Integration</h2>
                        <div className={theme==="sun"? "bar bar-70":"bar bar-70 bardark2"} ></div>
                    </div>

                    <div className="ex">
                        <h2 style={theme==="sun"?{}:{color:"#00000083"}}>UI/UX Design & Responsive Web Interfaces</h2>
                        <div className={theme==="sun"? "bar bar-80":"bar bar-80 bardark3"}  ></div>
                    </div>

                </div>  


            </div>
</div>


        </div>
        




    
    </div>)




}




