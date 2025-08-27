import "./testimonials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCircleArrowLeft, 
    faCircleArrowRight, 
    faCircleUser,
    faQuoteLeft 
} from '@fortawesome/free-solid-svg-icons';
function Testimonials() {
  return (
    <div className="col" id = "testimonial-section">
        <div className="row" id = "section-container">
            <div className="col" id = "testimonial-section-1">
                <div className="col" id = "from-community">
                    <p id = "from-community-caption">
                        From our community.
                    </p>
                    <p id = "people-saying">
                        Here's what people are saying about Indian Youth Nuclear Society.
                    </p>
                </div>
                <div className="col" id = "left-right-butttons">
                    <FontAwesomeIcon icon={faCircleArrowLeft} id = "left-arrow" />
                    <FontAwesomeIcon icon={faCircleArrowRight} id = "right-arrow" />
                </div>
            </div>
            <div className = "col" id = "testimonial-section-2">
                 <div className="col" id = "testimonial-statements">
                    <div className="col">
                        <FontAwesomeIcon icon = {faQuoteLeft} id = "quotes" />
                    </div>
                    <div className="col" id ="statement">
                        <p>
                            IYNS is a great platform to learn about nuclear science and be part of India's clean energy future."
                        </p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col" id = "user-icon">
                            <FontAwesomeIcon icon={faCircleUser} id = "user" />
                            </div>
                            <div className="col" id= "name">
                                <p style = {{margin:0}} id = "kyle">
                                    Kyle
                                </p>
                                <p style = {{margin:0}} id = "advisor">
                                    Advisor
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials