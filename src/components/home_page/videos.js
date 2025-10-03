import React from "react";
import "./videos.css";

// Thumbnails directly from YouTube
const videos = [
  {
    id: "5ud83AlrbKY",
    title: "S02 Episode 2 (Aug 28, 2022) - Prof. J. V. Naralikar",
    thumbnail: "https://img.youtube.com/vi/5ud83AlrbKY/hqdefault.jpg",
    description:
      "Prof. Narlikar is a renowned Astrophysicist, Academia, Author and much more. He held many high positions. He developed with Sir Fred Hoyle the conformal gravity theory, known as Hoyle–Narlikar theory.",
  },
  {
    id: "oQDV3DzjYuQ",
    title: "S02 Episode 1 (July 31, 2022) - Shri K. N. Vyas",
    thumbnail: "https://img.youtube.com/vi/oQDV3DzjYuQ/hqdefault.jpg",
    description:
      "Shri K N Vyas is the Secretary of Department of Atomic Energy (DAE), Government of India and the Chairman of Atomic Energy Commission (AEC) of India. Mumbai.",
  },
  {
    id: "USnTQDpnxr8",
    title: "S01 Episode 08 (March 28, 2021) - Dr. Archana Sharma",
    thumbnail: "https://img.youtube.com/vi/USnTQDpnxr8/hqdefault.jpg",
    description:
      "Dr. Archana Sharma is a Senior Adviser for Relations with International Organizations and Principal Scientist at Physics Department at CERN Laboratory, Switzerland.",
  },
];

export default function Videos() {
  return (
    <div className="container-fluid" id="videos-section">
      <div className="col" id="title">
        <p>Latest Videos & Media</p>
      </div>

      <div className="row" id="card-row">
        {videos.map((video, idx) => (
          <div className="col" id={`card-${idx + 1}`} key={video.id}>
            <div className="card" id={`card-content-${idx + 1}`}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  id={`card-${idx + 1}-thumbnail`}
                />
              </a>
              <p class = "card-title" id={`card-${idx + 1}-title`}>{video.title}</p>
              <p class = "card-content" id={`card-${idx + 1}-content`}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
