import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import '../style/Header.css'


function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h2>Jakholius</h2>
            <p>I'm Jakholius, a Computer Science student at BINUS University, 
                currently in my 6th semester. With an interest in front-end and web development, 
                I've some of the fundamental and basic skills that needed to create a websites. 
                I'm excited to know more how to build and understanding a responsive and visually good web applications, 
                i'm always eager to learn and grow.</p>
            <div className='socialMedia'>
                <a href="https://www.instagram.com/jek_lius22/"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100006810049219"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/jakho-lius-b29b72234/"><FaLinkedin /></a>
            </div>
        </div>
    </header>
  )
}

export default Header