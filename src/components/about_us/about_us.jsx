import React from 'react' 
import "./about_us.css"
import Navbar from '../home_page/navbar';
import Footer from '../home_page/footer';
import IYNS from "./IYNS_declaration.png";
import IYNSTeam from "./IYNS_declaration_team.png";
import IYNSPartnerships from "./IYNS_declaration_partnerships.png";
import collaborators from "../../Data/partnerships.json";

function AboutUs() {
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>

      <div className='container-fluid' id="about-us-page">
        <div className='col' id="about-us-title">
          <p>
            Indian Youth<br />
            Nuclear Society
          </p>
        </div>
        <div className='row' id = "about-us-hero-section">
          <div id="about-us-hero-text">
            <div id="line-plus-circle">
              <div id="vertical-line"></div>
              <div id="outer-circle">
                <div id="inner-circle"></div>
              </div>
            </div>
            <div className='col' id = "hero-section-text">
              The Indian Youth Nuclear Society (IYNS) 
              is a non-profit organization dedicated to spreading awareness about the benefits of
              nuclear technology and encouraging Indian youth to contribute to the nation's nuclear program. 
              As part of the fight against climate change, IYNS also serves as a platform for discussing nuclear energy 
              and other renewable energy sources.
            </div>
          </div>
          <div id="about-us-hero-image">
            <div id="about-us-image"></div>
          </div>
        </div>

        <div className='container' style = {{margin:0,padding:0}} id = "executive-board-section">
            <div className='container-fluid' style= {{padding:0}}>
                <div className='col' id = "executive-board">
                    <p id = "executive-board-title">Executive Board</p>
                    <p id = "executive-board-text">
                        The Indian Youth Nuclear Society (IYNS) is a non-profit organization dedicated to 
                        spreading awareness about the benefits of nuclear technology and 
                        encouraging Indian youth to contribute.
                    </p>
                </div>
            </div>
          <div className='row team-info' id = "team-member-1">
            <div className='col'>
              <p className='member-designation'>
                Founder & President
              </p>
              <p className='member-name'>
                Nitendra
                Singh
              </p>
              <p className='member-description'>
                Founder & President. A nuclear engineer (now at ITER, France), 
                 apaixonate about nuclear safety, reactor thermal hydraulics, and severe-accident research.
                He's also a motivational speaker, traveler, photographer, hiker, and cooking enthusiast.
              </p>
            </div>
            <div className='col'>
              <div id="team-member-img"></div>
            </div>
          </div>

          <div className='row team-info' id = "team-member-2">
            <div className='col'>
              <div id="team-member-img"></div>
            </div>
            <div className='col'>
              <p className='member-designation'>
                Co-Founder
              </p>
              <p className='member-name'>
                Samyak
                Munot
              </p>
              <p className='member-description'>
                Co-founder & Media Manager. 
                Currently a PhD researcher in nuclear physics at CEA-Cadarache (France), 
                studying fission-product spin via isomeric ratio measurement. 
                Also VP of CEA-PhD association ASTHEC. He's keen on demystifying radiation myths and loves cooking, travel, 
                film, and food.
              </p>
            </div>
          </div>

          <div className='row team-info' id = "team-member-3">
            <div className='col'>
              <p className='member-designation'>
                Co-Founder
              </p>
              <p className='member-name'>
                Jehaan
                Nicholson
              </p>
              <p className='member-description'>
                Co-founder & Media Manager. 
                Currently a PhD researcher in nuclear physics at CEA-Cadarache (France), studying fission-product spin via isomeric ratio measurement. 
                Also VP of CEA-PhD association ASTHEC.
                He's keen on demystifying radiation myths and loves cooking, travel, film, and food.
              </p>
            </div>
            <div className='col'>
              <div id="team-member-img"></div>
            </div>
          </div>

          <div className='row team-info' id = "team-member-4" >
            <div className='col'>
              <div id="team-member-img"></div>
            </div>
            <div className='col'>
              <p className='member-designation'>
                Co-Founder
              </p>
              <p className='member-name'>
                Sunaina
                Kundrat
              </p>
              <p className='member-description'>
                Co-founder & General Manager. 
                A postgraduate in Nuclear Science & Technology (University of Delhi), she handles admin, communications, 
                and coordination. Advocates environmental sustainability and enjoys dancing, swimming, travel, and creative pursuits.
              </p>
            </div> 
          </div>

          <div className='row team-info' id = "team-member-5">
            <div className='col'>
              <p className='member-designation'>
                Co-Founder
              </p>
              <p className='member-name'>
                Vaishnvi
                Tiwari
              </p>
              <p className='member-description'>
                Co-founder & Editor-in-Chief. Holds a PhD in Physics (Ecole Polytechnique, France), 
                focusing on simulation of severe-accident behavior in light-water reactors. 
                Active writer with â€œNuclear Energy - The Better Energyâ€, she's also fond of books, art, music, and baking.
              </p>
            </div>
            <div className='col'>
              <div id="team-member-img"></div>
            </div>
          </div>
        </div>

        
      <div className='container' id = "declaration-section">
        <div className='col' id = "declarations">
          Declarations
        </div>
        <div className='row' id = "declaration-images">
            <div className='col'>
                <img src={IYNS} alt="declarations" id = "declarations-img"></img>
            </div>
            <div className='col'>
                <img src = {IYNSTeam} alt = "team" id = "team-img"></img>
                <img src = {IYNSPartnerships} alt = "partnership" id = "partnership-img"></img>
            </div>
        </div>
        
      </div>

      <div className='container' id = "cooperation-and-collaboration">
            <div className='col'>
            <p id = "cooperation-title">Cooperation & Collaboration</p>
            </div>
            <div className='col' id = "cooperation-text">
            The Indian Youth Nuclear Society (IYNS) is a non-profit organization dedicated to spreading awareness about the benefits of nuclear technology and encouraging Indian youth to contribute.
            </div>
            <div className='row'>  
            {collaborators.map((item) =>{
                const imgSrc = require(`../../Data/${item.image}`)
                return(
                    <div className='col'>
                        <img src = {imgSrc} className = "collaborators-img" alt = "colloaborators-logo"></img>
                        <p className='collaborators-name'>{item.title}</p>
                    </div>
                )
            })} 
            </div>
        </div>
      </div>  

      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default AboutUs;