import { useParams } from "react-router-dom"
import '../style/DetailPortfolio.css'
import { portfolioList } from "../data/DataProject"
import Navbar from "../komponen/navbar"
import Footer from "../komponen/Footer"
import ScrollToTop from "../komponen/ScrollToTop"

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item)=>item.id === id)

  return (
    <> 
    <Navbar/>
    <section id="detail-portfolio">
      <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image}/>
          <p className="skill"><b>Skills</b> : {data.skill}</p>
      </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default DetailPortfolio