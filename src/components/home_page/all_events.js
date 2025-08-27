import eventData from '../../Data/Event_Data.json';
import "./all_events.css";
export default function AllEvents() {
  return(
        <div className="container">
            <h1>Events</h1>
            <div className="row">
                {eventData.map((event) => (
                <div className="col" key={event.id}>
                    <div className="card">
                    <img src={event.heroImage} className="card-img-top" alt={event.title} />
                    <div className="card-body">
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
    )
        
}
