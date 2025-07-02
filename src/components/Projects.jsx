import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";
import "../css/project.css"
const mycardinfo = [
  {
    id: 1,
    projectName: "AI Video Translation Platform",
    imgsrc:"imgs/AIvideo.jpg", 
    description:
      "Graduation project for building a web platform that translates videos from any language into Arabic using AI technologies like WhisperX and Gemini.",
   tech:["HTML","CSS","JavaScript","Python"],
  
    },
  {
    id: 2,
    projectName: "PDF Generator – Nova Competition Winner",
    imgsrc: "imgs/pdfgen.jpg", 
    description:
      "A document generation system built for a programming competition organized by Nova. Our team won 3rd place and was honored by the Minister of Youth.",
    tech:["React","node","Python"],
    },
  {
    id: 3,
    projectName: "Academic Student Portal",
    imgsrc: "imgs/univer.png",
    description:
      "A full system built for college students to view results, register, and access lectures. Built with React and designed to simulate real academic platforms.",
     tech:["React"],

    },
  {
    id: 4,
    projectName: "Weather App",
    imgsrc: "imgs/wather.jpg",
    description:
      "A responsive weather application using external APIs to fetch real-time weather data for any city. Built with JavaScript and React.",
     tech:["React"],
    },
  {
    id: 5,
    projectName: "Prayer Times Web App",
    imgsrc:"imgs/image.png",
    description:
      "An Islamic web app that displays daily prayer times using the Aladhan API, designed with a clean user interface and smooth user experience.",
   tech:["HTML","CSS","JavaScript"],
    },
  {
    id: 6,
    projectName: "Custom Portfolio Websites",
    imgsrc: "imgs/pro.png",
    description:
      "Designed and developed multiple personal portfolio websites for colleagues and friends, focused on modern UI/UX and mobile responsiveness.",
     tech:["HTML","CSS","JavaScript"],
    },
];





export default function Projects(){
  const { theme} = useContext(ScrollContext);
     const  card=mycardinfo.map(e=>{

        return(<>
        
        <div style={theme==="sun"?{}:{color:"#000",backgroundColor: "#c1c1c191",
   border: "1px solid #ffffff3d",
   backdropFilter: "blur(4px)",
   boxShadow: "0 0 10px #ffffff33", }} className="card" key={e.id}>
            <div className="card-container">

                <div className="card-img">
                    <img src={e.imgsrc} alt="" />
                </div>

                <div className="card-info">
                    <h3>{e.projectName}</h3>
                    <p>{e.description}</p> 
                    
                    {e.tech.map(g=>{
                        return(<>
                        <div style={theme==="sun"?{}:{backgroundColor: "#01010121",fontWeight:500}} className="tech">{g}</div>
                        </>)
                    })}
                </div>


            </div>
        </div>
        

        
        </>)



     })



    return ( <div id="projects" className="projects">
    
    <div className="projects-container">

        <div className="grid-cards">
            {card}
        </div>


    </div>

    
    
    
    </div>)



}