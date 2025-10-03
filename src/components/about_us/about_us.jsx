import React from 'react' 
import "./about_us.css"
import Navbar from '../home_page/navbar';
import Footer from '../home_page/footer';
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
              The IYNS Research Foundation, also known as the Indian Youth Nuclear Society (IYNS), 
              is a non-profit organization founded in 2014 to promote awareness of nuclear energy as a reliable, 
              clean, carbon-free source of power and its applications in medicine, 
              agriculture, and other fields. Over the years, 
              IYNS has played an active role in national and international nuclear advocacy, 
              being a founding signatory of the Nuclear4Climate declaration in 2015 and the Nuclear 
              Innovation in Clean Energy (NICE) Declaration in 2019. 
              The foundation emphasizes education and youth engagement through initiatives like its 
              flagship Education Boot Camp and the ITER International Fusion Education initiative (InFusEd). 
              Since 2021, IYNS has focused on advancing India’s nuclear energy policy under 
              its “Indian Nuclear Program 2.0: Youth Led, Industry Driven” strategy, 
              highlighting the role of youth and industry in driving progress. 
              To lead by example, it established IYNS TechSolutions LLP in 2024, 
              which is developing India’s first micro modular nuclear reactor, SUK-M. In alignment with 
              India’s Nuclear Energy Mission 2047, aiming for 100 GW of nuclear capacity, 
              IYNS is committed to supporting this goal while also championing gender equality, 
              having co-founded the Association of Women in Nuclear (2020) and Women in Fusion (2021).
            </div>
          </div>
          <div  id="about-us-hero-image">
            <div id="about-us-image"></div>
          </div>
        </div>
        <div class = "col" id = "history">
            <p id = "history-title">
              History
            </p>
            <p className='history-text'>
              IYNS Research Foundation, also known as Indian Youth Nuclear Society (IYNS), 
              is a non-profit organization based in India. It was established in 2014 by a group of young nuclear experts 
              and enthusiasts with a vision towards Nuclear Independent India through awareness about nuclear energy as the most reliable, carbon free, clean source of energy, 
              along with nuclear technologies used in non-power applications like medical, agricultural, etc. 
              One of the major challenges in the expansion of nuclear energy to its full scale is the lack of its awareness both in India and abroad. 
              IYNS is committed to bridge this gap. </p>
              <p className='history-text'>
              In 2015, nuclear professionals and scientists from over 150 societies and associations gathered, 
              with the goal of opening a dialogue with policymakers and the public about the necessity of including nuclear energy among the carbon-free solutions to climate change. 
              IYNS was one of the founding signatories of the Nuclear4Climate declaration signed in Paris, France for COP21. IYNS understands the importance of educating students so that 
              they have sound knowledge of advanced technologies and iSTEAM approach.  IYNS started its flagship Education Boot Camp along with conducts various activities like campaigns, 
              seminar, workshops, bootcamps, etc.  IYNS is also the founding entity of the ITER International Fusion Education initiative (InFusEd) launch in 2021. 
              </p>
            <p className='history-text'>
              In 2019, global nuclear societies gathered to highlight the importance of Innovation for the expansion of nuclear energy across the globe. Nuclear Innovation in Clean Energy (NICE) Declaration under Clean Energy Ministerial (CEM) was signed by the 49 nuclear associations in Juan-les-Pin in France. IYNS was one of its founding signatories. 
              2021 onwards, IYNS realized that nuclear is the only energy source which can fuel India’s development while achieving the decarbonization goals. Hence, it started nuclear advocacy and contributing towards nuclear energy policy. IYNS is working towards its vision through its strategy of Indian Nuclear Program 2.0 Youth Led, Industry Driven. This time the focus is on youth and the industry as today’s youth are tomorrow’s decision makers and industry are going to drive the expansion of nuclear at a faster pace. 
              To lead by example IYNS Research Foundation established another institution, IYNS TechSolutions LLP In 2024. It is designing India’s first micro modular nuclear reactor, SUK-M.  
              In 2025, India announced the Nuclear Energy Mission 2047 to achieve 100 GW energy goals through nuclear with an emphasis on Small Modular Reactors (SMRs) and Micro Modular Reactors (MMRs). IYNS Research Foundation supports and is fully committed to contribute to this milestone. 
              IYNS recognises the importance and equality of women in the workforce. IYNS was one of the founding members of Association of Women in Nuclear (Previously known as Women in Nuclear India or WiN-India) in 2020 and Women in Fusion in 2021.
              IYNS believes that “Together we can, together we shall”
            </p>
            <p className='history-text'>
              2021 onwards, IYNS realized that nuclear is the only energy source which can fuel India’s development while achieving the decarbonization goals. Hence, it started nuclear advocacy and contributing towards nuclear energy policy.
              IYNS is working towards its vision through its strategy of Indian Nuclear Program 2.0 Youth Led, Industry Driven. 
              This time the focus is on youth and the industry as today’s youth are tomorrow’s decision makers and industry are going
              to drive the expansion of nuclear at a faster pace. 
            </p>
            <p className = "history-text">
              To lead by example IYNS Research Foundation established another institution, IYNS TechSolutions LLP In 2024. 
              It is designing India’s first micro modular nuclear reactor, SUK-M.  
            </p>
            <p className= 'history-text'>
              In 2025, India announced the Nuclear Energy Mission 2047 to achieve 100 GW energy goals through nuclear with an emphasis on Small Modular Reactors (SMRs) and Micro Modular Reactors (MMRs). 
              IYNS Research Foundation supports and is fully committed to contribute to this milestone. 
            </p>
            <p className= 'history-text'>
              IYNS recognises the importance and equality of women in the workforce. IYNS was one of the founding members of
              Association of Women in Nuclear (Previously known as Women in Nuclear India or WiN-India) in 2020 and Women in Fusion in 2021.
            </p>
            <p className= 'history-text'>
              IYNS believes that “Together we can, together we shall”
            </p>
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
                Dr. Nitendra Singh is the Founder and President of Indian Youth Nuclear Society and a prominent 
                young professional in nuclear known for his leadership and advocacy in advancing nuclear awareness 
                and education among youth. He is a Nuclear Engineer at the ITER Organization in France, 
                specializing in nuclear safety, tritium breeding systems, and severe accident management 
                of advanced reactors. Dr. Nitendra Singh represents a forward-thinking blend of scientific expertise 
                and youth-led advocacy—working to bring nuclear technology into education, policy, and public discourse 
                in India and beyond.
              </p>
            </div>
            <div className='col' style = {{display:"flex"}}>
              <div id="team-member-img-1"></div>
            </div>
          </div>

          <div className='row team-info' id = "team-member-2">
            <div className='col' style = {{display:"flex"}}>
              <div id="team-member-img-2"></div>
            </div>
            <div className='col'>
              <p className='member-designation'>
                Vice President
              </p>
              <p className='member-name'>
                Samyak
                Munot
              </p>
              <p className='member-description'>
                Co-founder & Media Manager. 
                Dr. Samyak Munot is a nuclear engineer and energy policy advocate with a PhD from Homi Bhabha National Institute. 
                As Vice-President of the Indian Youth Nuclear Society, he champions nuclear power’s role in India’s clean 
                energy transition, combining technical expertise in reactor safety with global advocacy at platforms 
                like COP-28 and the G20.
              </p>
            </div>
          </div>

          

          <div className='row team-info' id = "team-member-3" >
            <div className='col' style = {{display:"flex"}}>
              <div id="team-member-img-3" ></div>
            </div>
            <div className='col'>
              <p className='member-designation'>
                Co-Founder & Media Manager
              </p>
              <p className='member-name'>
                Dr. Sapna Singh
              </p>
              <p className='member-description'>
                Co-Founder & Media Manager
                Dr. Sapna Singh is the Co-Founder and Media Manager of Indian Youth Nuclear Society. 
                She is a PhD in nuclear reactor thermal-hydraulics and neutronics from Homi Bhabha National Institute 
                and has been a lecturer in Lajpat Rai College. With a diverse background spanning research, 
                academia, and media, she builds essential bridges between society, scientists, 
                and policymakers—an urgent imperative for advancing safe, innovative nuclear solutions.
              </p>
            </div> 
          </div>

          <div className='row team-info' id = "team-member-4">
            <div className='col'>
              <p className='member-designation'>
                Senior Policy Fellow
              </p>
              <p className='member-name'>
                Mr. Gaurav U. Gullaiya
              </p>
              <p className='member-description'>
                Gaurav Gullaiya is a Senior Policy Fellow at the Indian Youth Nuclear Society, specializing in nuclear energy advocacy 
                and strategy.He works at the intersection of clean energy policy, technology, and global cooperation, 
                with a focus on advancing India’s nuclear ecosystem through youth engagement, partnerships, and sustainable
                development initiatives.
              </p>
            </div>
            <div className='col' style = {{display:"flex"}}>
              <div id="team-member-img-4" ></div>
            </div>
          </div>

          <div className='row team-info' id = "team-member-5">
            <div className='col'>
              <p className='member-designation'>
                Education Consultant
              </p>
              <p className='member-name'>
                Ms. Vinita Sharat
              </p>
              <p className='member-description'>
                Ms. Vinita Sharat is the Education Consultant at Indian Youth Nuclear Society.
                With over 25 years of experience in the education sector, 
                she brings a nuanced understanding of the evolving needs of education in schools and 
                universities and organizations. Presently, 
                she is Head of STEAM- Shiv Nadar School. Her leadership role at various 
                organizations acts as a nexus of education and nuclear advocacy.

              </p>
            </div>
            <div className='col' style = {{display:"flex"}}>
              <div id="team-member-img-5" ></div>
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