import "../css/footer.css"
import { FaChevronUp } from "react-icons/fa";
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";


export default function Footer(){
 const { theme} = useContext(ScrollContext);
return(<footer>

        <div  className={theme==="sun"?"footer-container":"footer-container-dark"}>

            <h2>© 2025 Designed By MAS</h2>

                <div className="icon-home">

                     <a rel="noreferrer" href="#home"><FaChevronUp className={theme==="sun"?"up":"up-dark"}/></a>
                     
                </div>
        </div>


</footer>)

}



