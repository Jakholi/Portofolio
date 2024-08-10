import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Navbar from "../komponen/navbar"
import Footer from '../komponen/Footer'
import ScrollToTop from "../komponen/ScrollToTop"

function Education() {
  return (
    <>
    <Navbar/>
        <div className='wrapper'>
            <h1>Education</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                <h3 className="vertical-timeline-element-title">Bina Nusantara University</h3>
                <h4 className="vertical-timeline-element-subtitle">Undergraduate Student</h4>
                <p>
                Computer Science
                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 - 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                <h3 className="vertical-timeline-element-title">Budi Mulia</h3>
                <h4 className="vertical-timeline-element-subtitle">Senior Highschool</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                <h3 className="vertical-timeline-element-title">Budi Mulia</h3>
                <h4 className="vertical-timeline-element-subtitle">Junior Highschool</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default Education