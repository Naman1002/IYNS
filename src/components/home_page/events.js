import React from 'react';
import eventData from "../../Data/Event_Data.json";

const EventPage = () => {
  const event = eventData;  // Use JSON directly
  return (
    <div className="event-container">
      <h1>{event.title}</h1>
      <img src={event.heroImage} alt="Hero" style={{ width: '100%' }} />
      <p>{event.description}</p>
      <div className="event-gallery">
        {event.eventImages.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`Detail ${index}`} style={{ width: '100%', marginTop: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
