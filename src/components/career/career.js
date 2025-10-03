import React from 'react'
import "./career.css";
import SampleImg from "../../Data/Assets/images/sample_img.png"
import Navbar from '../home_page/navbar';
import Footer from '../home_page/footer';
import InternshipCards from './internship_cards';

function Career() {
  return (
    <div className='container-fluid'>
        <Navbar></Navbar>
            <div className='container-fluid content-container'>
                <div className='col' id = "page_title">
                    Join India’s next-gen Nuclear Movement!
                </div>
                <div className='col' id = "page_content">
                    At the Indian Youth Nuclear Society (IYNS), we empower students and professionals to 
                    explore careers in nuclear science, policy, and innovation.
                </div>
                <div className = "row" id = "image_display">
                    <div className='iyns-career'> 
                        <img src = {SampleImg} alt = "IYNS"></img>
                    </div>
                    <div className='iyns-career'> 
                        <img src = {SampleImg} alt = "IYNS"></img>
                    </div>
                    <div className='iyns-career'> 
                        <img src = {SampleImg} alt = "IYNS"></img>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='what-we-offer'>
                    <p style = {{width: "49.43rem",height: "7.5rem"}}>
                        Internships with leading global orgs like ITER, France.
                    </p>
                    <p style = {{width: "49.43rem",height: "7.5rem"}}>
                        Research & Outreach Roles in science communication and nuclear advocacy.
                    </p>
                    <p style = {{width: "49.43rem",height: "7.5rem"}}>
                        Event & Project Opportunities across India.
                    </p>
                </div>
                <InternshipCards></InternshipCards>
            </div>
            <Footer></Footer>
    </div>
  )
}

export default Career