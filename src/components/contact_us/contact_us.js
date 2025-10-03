import "./contact_us.css";
import Navbar from "../home_page/navbar";
import Footer from "../home_page/footer";
import PageBG from "../../Data/Assets/images/iyns_bg.png"
function ContactUs() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <div className="col" id = "first-section" style = {{backgroundImage:`url(${PageBG})`}}>
      <div className="col" id = "section -start">
        <div className="col">
          <p id = "first-section-title">Get in Touch<br></br> with IYNS</p>
        </div>
        <div className="col" >
          <p id = "first-section-content">
            The Indian Youth Nuclear Society (IYNS) is always eager to connect
            with students, researchers, and nuclear-energy enthusiasts across
            India. Whether you’re interested in membership, events, internships,
            or simply curious about nuclear technology, here’s how to reach out:
          </p>
        </div>
      </div>

      <div className="row" id = "form-section">
        <div className="col">
          <h2 style={{ fontSize: "3rem" }}>Support Nuclear</h2>
          <p style={{ fontSize: "1.25rem", fontWeight: 500 }}>
            Nuclear Energy Program 2.0: Youth led, Industry Driven
          </p>

          {/* Phone */}
          <div className="row" id = "address-row">
            <div className="emoji-col">📞</div>
            <div className="col">
              <div>
                Phone Number
              </div>
              <div
                style={{
                  color: "#4C4C4C",
                  fontWeight: 500,
                  fontSize: "22px",
                }}
              >
                +91 886 057 9769
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="row" id = "email-row">
            <div className="emoji-col">✉️</div>
            <div className="col">
              <div>Email</div>
              <div
                style={{
                  color: "#4C4C4C",
                  fontWeight: 500,
                  fontSize: "22px",
                }}
              >
                contact.iyns@gmail.com
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="row" id = "address-row">
            <div className="emoji-col">📍</div>
            <div className="col">
              <div>Address</div>
              <div
                style={{
                  color: "#4C4C4C",
                  fontWeight: 500,
                  fontSize: "22px",
                }}
              >
                11 A, Ganpati Society, Gujarat Colony, Kothrud, Pune,
                Maharashtra - 411038
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col" id = "form">
          <div
          >
            <div className="row">
              <div className="col">
                <label>Name</label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "4px",
                  }}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Subject</label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "4px",
                  }}
                  placeholder="Subject of message"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Email</label>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "4px",
                  }}
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Message</label>
                <textarea
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "4px",
                  }}
                  rows="5"
                  placeholder="Type your message"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "rgba(90, 45, 124, 1)",
                    color: "white",
                    borderRadius: "8px",
                    padding: "10px 16px",
                    border: "none",
                    marginTop: "12px",
                    width:"12.5rem",
                    height:"2.8125rem"
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id = "map-parent">
            <div id = "map"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ContactUs;
