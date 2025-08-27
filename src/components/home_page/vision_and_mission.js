import React from 'react'
import mission from "./Our Mission.png";
import vision from "./Our Vision.png"
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
                    To foster an informed, science-driven society in India where nuclear technologies are understood, 
                    accepted, and responsibly deployed—empowering youth to actively participate in the 
                    country's nuclear advancement and contribute meaningfully to a clean-energy future.
                </p>
            </div>
        </div>
        <div className = "row" id = "mission-section">
            <div className = "col" id = "our-mission-content">
                <p id = "our-mission-title">
                    Our Mission
                </p>
                <p id = "our-mission-text">
                    To spread awareness of nuclear science and its benefits among the general public, build capacity among youth through education, 
                    advocacy,
                    community engagement, and to cultivate ethical communication and policy discourse that supports India's nuclear goals.
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