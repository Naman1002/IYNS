import "./videos.css";
import videoImage from "./videos_img.png";
function Videos() {
  return (
    <div className="container-fluid" id = "videos-section">
      <div className="col" id="title">
        <p>Latest Videos & Media</p>
      </div>
      <div className="row" id = "card-row">
        <div className="col" id = "card-1">
          <div className="card" id = "card-content-1">
            <img src={videoImage} alt = "videos_img"></img>
            
            <p id = "card-1-title">
              S02 Episode 1 (July 31 2022)
              <b> Dr. J. B. Joshi</b>
            </p>
            <p id = "card-1-content">
              From being born in a small town in Maharashtra to getting a Padma Bhushan in 2014, come learn how Dr.
              Joshi's passion for teaching drove him to success.
            </p>
            </div>
          </div>
          <div className="col" id = "card-2">
          <div className="card" id = "card-content-2">
            <img src={videoImage} alt = "videos_img"></img>
            <p id = "card-2-title">
              S02 Episode 2 (August 7 2022)
              <b> Dr. J. B. Joshi</b>
            </p>
            <p id = "card-2-content">
              In this follow-up, Dr. Joshi discusses the future of chemical engineering and shares insights from his teaching career.
            </p>
          </div>
        </div>


        <div className="col" id = "card-3">
          <div className="card" id = "card-content-3">
            <img src={videoImage} alt = "videos_img"></img>
            <p id = "card-3-title">
              S02 Episode 3 (August 14 2022)
              <b> Dr. J. B. Joshi</b>
            </p>
            <p id = "card-3-content">
              Learn how his innovative thinking helped transform engineering education across India.
            </p>
          </div>
        </div>
        </div>
        <div className="col" id = "view-all-col" >
          <div className="row" id = "view-all" >
            <div className="col-auto" id = "view-all-text" >
                View All
            </div>
            <div className="col-auto" id = "img-col">
                <img id = "view-all-img" src="https://img.icons8.com/ios/50/circled-right.png" alt="circled-right"/>
            </div>
          </div>
        </div>
        

        
      </div>
  );
}

export default Videos;
