import React from 'react'
import './hero_section.css'
function HeroSection() {
  return (
    <section>
        <div className='container-fluid' id = "hero-section-container">
            <div className = "container-fluid" id = "hero-section-content">
                <div className = "row">
                    <p id = "hero-section-title">Indian Youth Nuclear Society</p>
                    <p id = "hero-section-text">
                        Indian Youth Nuclear Society, abbreviated as IYNS, 
                        is a non-profit organization based in India. 
                        The main objective of this organization is to spread awareness about the benefits of nuclear technologies among general public 
                        and encourage Indian youth to learn and contribute to Indian Nuclear Program.
                    </p>
                </div>
                <div className = "container" id = "feature-rows">
                    <div className = "row" id = "feature-row-1">
                        <div className = "col">
                            <div className = "row" id = "feature-1">
                                    <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                    </div>
                                    <div className = "col feature container-fluid">
                                        Life Under Water
                                    </div>
                                </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-2">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Partnerships
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-3">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Education Activities
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-4">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Gender Equality
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-5">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Clean Energy
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "row" id = "feature-row-2">
                        <div className = "col">
                            <div className = "row" id = "feature-6">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Economic Growth
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-7">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Industry & Innovation
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-8">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Sustainable Cities
                                </div>
                            </div>
                        </div>
                        <div className = "col">
                            <div className = "row" id = "feature-9">
                                <div id = "radio-lookalike">
                                    <div className = "radio-lookalike-dot"></div>
                                </div>
                                <div className = "col feature container-fluid">
                                    Climate Actions
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> 
    </section>
  )
}

export default HeroSection