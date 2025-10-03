import "./all_events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"; 
export default function AllEvents() {
  return(
        <div className="container" id = "events-section">
            <h1 id = "events-title">Events</h1>
            <div className="row" id = "row-1">
                <div id = "card">
                    <div className="row">
                        <div id="event-left-side">
                          <p id = "overlay-text">
                            How Indian youth can build a career in Nuclear energy
                          </p>
                        </div>
                        {/* Right side: Content */}
                        <div id = "event-right-side">
                        <h2 className = "event-title">
                            How Indian youth can build a career in Nuclear energy
                        </h2>
                        <p id="event-card-text">
                            From AI to forensics, India's nuclear sector opens exciting
                            multidisciplinary career paths for students, as explained by ITER
                            France's Nuclear Engineer Nitendra Singh.
                        </p>
                        <button 
                              style={{ 
                                background: "transparent", 
                                border: "none", 
                                cursor: "pointer" 
                              }}
                              onClick={() => window.open(
                              "https://www.indiatoday.in/amp/education-today/featurephilia/story/fission-to-future-meet-young-indians-shaping-the-nuclear-story-2718043-2025-05-01",
                              "_blank"
                            )}
                        >
                              <FontAwesomeIcon 
                                icon={faArrowAltCircleRight}  
                                style={{ color: "white", fontSize: "2.25rem" }}  
                              />
                          </button>
                      </div>
                  </div>
                </div> 
                <div id = "second-event">
                    <p class = "event-title" style={{color:"#000000"}}>
                      India's Nuclear Push: Private Sector Steps In, But Full Liberalisation Still Distant
                    </p>
                     <button 
                              style={{ 
                                background: "transparent", 
                                border: "none", 
                                cursor: "pointer" 
                              }}
                              onClick={() => window.open(
                              "https://www.outlookbusiness.com/in-depth/indias-nuclear-push-private-sector-steps-in-but-full-liberalisation-still-distant "
                            )}
                        >
                              <FontAwesomeIcon 
                                icon={faArrowAltCircleRight}  
                                style={{ color: "black", fontSize: "2.25rem" }}  
                              />
                          </button>
                </div>     
            </div>
          </div>
    )
        
}
