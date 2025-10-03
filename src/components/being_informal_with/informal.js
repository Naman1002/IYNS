import React from 'react'
import "./informal.css"
import Navbar from '../home_page/navbar';
import Footer from '../home_page/footer';
import InternshipsSection from './informal_plus_internships/informal_plus_internships';
import EventHost1 from "../../Data/Assets/images/event_host_1.png";
import EventHost2 from "../../Data/Assets/images/event_host_2.png";
function Informal() {
  return (
    <div className='container-fluid'>
        <Navbar></Navbar>
            <div className='container-fluid content-container'>
                <div className='col' id = "page_title">
                    Being Informal With...
                </div>
                <div className='col' id = "page_content">
                    We have started a new chat show with eminent and experienced scientists.
                    We will strive to conduct a show every month and bring to you the great scientists from our proud country. 
                    Currently the show will be hosted by Nitendra Singh. 
                    As the name of the chat show suggests, the talk will be informal and very casual. 
                    Through this show, we will bring to you their non scientific/technical side along with their experiences, life lessons and their advice.
                </div>
            </div>
            <div className='container-fluid content-container'>
                <div className='col'>
                    <p id = "event-host">
                        Event Host
                    </p>
                </div>
            <div className='row'>
                <div className='host-section'>
                    <div className='row' style = {{display:"flex"}}>
                        <div id = "host1">
                            <img className = "host-image" alt = "hostImage" src = {EventHost1}></img>
                            <div className='col' id = "host1-info">
                                <p className = "host-name">Dr. Nitendra Singh</p>
                                <p className = "host-position">Founder and President of IYNS</p>
                            </div>
                        </div>
                        <div id = "host-1-intro">
                            <p>
                                Dr. Nitendra Singh is the Founder and President of IYNS, Nuclear engineer by profession, 
                                he's fond of traveling, photography & hiking. Also, he is passionate about cooking. 
                                His research interests includes nuclear safety & design, reactor thermal hydraulics, 
                                Nuclear severe accidents. In addition, he's an avid speaker on Nuclear4Climate, 
                                advanced technologies and public awareness.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='host-section'>
                    <div className='row'>
                        <div id = "host2">
                            <img className = "host-image" alt = "hostImage" src = {EventHost2}></img>
                            <div className='col' id = "host-2-info">
                                <p className = "host-name">Prof. J. B. Joshi</p>
                             <p className = "host-position">Emeritus Professor, HBNI</p>
                            </div>
                        </div>
                        <div id = "host-2-intro">
                            <p>
                                From being born in a small town in Maharashtra to getting a Padma Bhushan in 2014, come learn how 
                                Dr. Joshi's passion for teaching drove him to success. 
                                Prof. J. B. Joshi is an Indian chemical engineer, nuclear scientist, consultant and professor, 
                                widely known for his innovations in reactor designs and generally regarded as a respected teacher. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <InternshipsSection></InternshipsSection>
            </div>
            <Footer></Footer>
    </div>
  )
}

export default Informal