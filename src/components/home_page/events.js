// src/components/EventPage.jsx
import React from 'react';

const EventPage = ({ event }) => {
  return (
    <div className="event-container">
      <h1>{event.title}</h1>
      <img src={event.heroImage} alt="Hero" style={{ width: '100%' }} />
      <h1>{event.title}</h1>
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
