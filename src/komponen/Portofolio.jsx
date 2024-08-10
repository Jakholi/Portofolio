import { portfolioList } from "../data/DataProject"
import { Link } from "react-router-dom"
import "../style/Portofolio.css"  

function Portofolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>Projects</h3>
            <div className="grid">
              {
                  portfolioList.map((item)=>{
                    return(
                      <div className="item" key={item.id}>
                          <Link to={`/portfolio/${item.id}`}><img src={item.image}/></Link>
                      </div>
                    )
                  })
              }    
            </div>
        </div>
    </section>
  )
}

export default Portofolio