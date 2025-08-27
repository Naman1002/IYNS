import React from 'react'
import "./informal.css"
import Navbar from '../home_page/navbar';
import Footer from '../home_page/footer';
function Informal() {
  return (
    <div className='container-fluid' style = {{padding:0}}>
        <Navbar></Navbar>
            <div className='container-fluid'>
                <div className='col'>
                    Being Informal With...
                </div>
                <div className='col'>
                    We have started a new chat show with eminent and experienced scientists.
                    We will strive to conduct a show every month and bring to you the great scientists from our proud country. 
                    Currently the show will be hosted by Nitendra Singh. 
                    As the name of the chat show suggests, the talk will be informal and very casual. 
                    Through this show, we will bring to you their non scientific/technical side along with their experiences, life lessons and their advice.
                </div>
            </div>
            <div className='container-fluid'>
                <div className='col'>
                    <p>
                        Event Host
                    </p>
                </div>
                <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col'>
                            <img></img>
                            <div className='col'>
                                <p>Dr. Nitendra Singh</p>
                                <p>Founder and President of IYNS</p>
                            </div>
                        </div>
                        <div className='col'>
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
                <div className='col'>
                    <div className='row'>
                        <div className='col'>
                            <img></img>
                            <div className='col'>
                                <p>Prof. J. B. Joshi</p>
                             <p>Emeritus Professor, HBNI</p>
                            </div>
                        </div>
                        <div className='col'>
                            <p>
                                From being born in a small town in Maharashtra to getting a Padma Bhushan in 2014, come learn how 
                                Dr. Joshi's passion for teaching drove him to success. 
                                Prof. J. B. Joshi is an Indian chemical engineer, nuclear scientist, consultant and professor, 
                                widely known for his innovations in reactor designs and generally regarded as a respected teacher. 
                                He is the DAE-Homi Bhabha Chair Professor, Homi Bhabha National Institute, Mumbai, and is the recipient of Shantiswarup 
                                Bhatnagar Prize for Engineering Sciences and many other awards and recognitions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        <Footer></Footer>
    </div>
  )
}

export default Informal