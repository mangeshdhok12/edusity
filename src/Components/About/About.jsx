import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="div about-left">
       <img src={about_img} alt='' className='about-img'/>
       <img src={play_icon} alt='' className='play-icon'/>
      </div>
      <div className="div about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Transformative educational kjourney with our university's comprehensive education programs. </p>
        <p>Transformative educational kjourney with our university's comprehensive education programs. </p>
        <p>Transformative educational kjourney with our university's comprehensive education programs. </p>
      </div>
    </div>
  )
}

export default About
