import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { FaFigma } from "react-icons/fa"
import "../style/Familiar.css"

function Familiar() {
  return (
    <section id="Familiar">
        <div className="wrapper">
            <h4>Familiar with tools</h4>
            <div className="skills">
                <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> <GrMysql />
                <FaFigma />
            </div>
        </div>
    </section>
  )
}

export default Familiar