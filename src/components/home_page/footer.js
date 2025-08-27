import "./footer.css";
import footerLogo from "./IYNS_lgo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,      
  faFacebookF,      
  faXTwitter,       
  faLinkedinIn,     
  faYoutube         
} from '@fortawesome/free-brands-svg-icons';  

function Footer() {
  return (
    <div className="container" id = "footer">
      <div className="col" id="footer-items">
        <div className="row">
          <div className="col" id = "footer-logo-col">
            <img src={footerLogo} alt="footer-logo" id = "footer-logo"></img>
          </div>
          <div className="col" id = "page-title">
            Indian Youth
            <br />Nuclear Society 
          </div>
        </div>
        <div className="row" id = "footer-menu">
          <div className="col footer-menu-item">Join Us</div>
          <div className="col footer-menu-item">About Us</div>
          <div className="col footer-menu-item">Newsletter</div>
          <div className="col footer-menu-item">Events</div>
          <div className="col footer-menu-item">Contact</div>
        </div>
        <div className="col" id = "stay-in-touch-col">
          <p>Stay In Touch</p>
        </div>
        <div className="col" id = "icons-col">
          <div className="col icons">
              <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="col icons">
              <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="col icons">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div className="col icons">
              <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div className="col icons">
              <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
      <div className="col" id = "line">
        <hr></hr>
      </div>
      <div className="col">
        <p>
            @ 2024 Copyright Indian Youth Nuclear Society (IYNS)
        </p>
      </div>
    </div>
  );
}

export default Footer;