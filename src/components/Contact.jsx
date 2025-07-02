import { FiLinkedin, FiGithub } from "react-icons/fi";          // Feather Icons
import { MdOutlineMail } from "react-icons/md";                 // Material Design Icons
import { FaWhatsapp } from "react-icons/fa";                    // Font Awesome
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

import "../css/contect.css"


export default function Contact(){
 const { theme} = useContext(ScrollContext);
    return(
    
    <div id="contact" className="contact">

        <div className="contact-container">

            <div  style={theme==="sun"?{}:{color:"#000",backgroundColor: "#c1c1c191",
   border: "1px solid #ffffff3d",
   backdropFilter: "blur(4px)",
   boxShadow: "0 0 10px #ffffff33", }}  className="contact-card">

               <div  className={theme==="sun"?"contact-hello":"contact-hello-dark"} >
                    <h2>Contact Me</h2>
                    <p>If you have any questions or project ideas, feel free to reach out. I'm always open to collaboration!</p>
                </div>

                <div className={theme==="sun"?"contact-links":"contact-links contact-links-dark"}>

                    <a   target="_blank"  href="https://www.linkedin.com/in/mahmoud-abaas-104ab9257/"><FiLinkedin/></a>

                    <a   target="_blank"  href="https://github.com/76mas"><FiGithub/></a>
                    
                    <a  href="https://wa.me/07727488537" target="_blank" rel="noreferrer noopener"><FaWhatsapp /></a>

                    <a  href="mailto:mhmwdbas310@gmail.com" target="_blank" rel="noreferrer noopener">
  <MdOutlineMail />
</a>


                </div>

            </div>

        </div>  


    </div>)



}