import React from 'react'
import mission from "./Our Mission.png";
import vision from "./vision.png"
import "./vision_and_mission.css"

function VisionMission() {
  return (
    <div id='Intro-container'>
        <div className = "row" id = "vision-section">
            <div className = "col" id = "vision-img">
                <img alt = "vision" src = {vision}></img>
            </div>
            <div className = "col"id = "our-vision-content">
                <p id = "our-vision-title">
                    Our Vision
                </p>
                <p id = "our-vision-text">
                    To create a Nuclear self-sufficient India where clean, reliable, 
                    and innovative nuclear energy powers sustainable development, 
                    strengthens energy security, and leads our nation towards a carbon-free future — 
                    by reshaping the Indian nuclear journey into 
                    Indian Nuclear Programme 2.0 model that is Youth Led and Industry Driven.
                </p>
            </div>
        </div>
        <div className = "row" id = "mission-section">
            <div className = "col" id = "our-mission-content">
                <p id = "our-mission-title">
                    Our Mission
                </p>
                <p id = "our-mission-text">
                     IYNS Research Foundation strives to empower youth through education and capacity building, 
                     advocate for nuclear energy in policy and society, 
                     and drive innovation in fission as well as the fusion sector. 
                     We are dedicated to global collaboration and inclusive participation, 
                     ensuring that young professionals and women play a vital role in shaping the future of nuclear 
                     science and technology
                </p>
            </div>
            <div className = "col" id = "mission-img">
                <img alt ="mission" src ={mission}></img>
            </div>
        </div>
    </div>
  )
}

export default VisionMission