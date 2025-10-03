import React from "react";
import content from "../../Data/internships_data.json";

function InternshipCards() {
  return (
    <div className="container mt-5">
      <div className="row g-4 justify-content-center">
        {content.cards.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
            <div
              className="card shadow-sm flex-fill"
              style={{
                borderRadius: "24px",
                padding: "30px",
                border: "1px solid #ddd",
              }}
            >
              {/* Title */}
              <h2
                style={{
                  fontFamily: "Unbounded",
                  fontSize: "28px",
                  lineHeight: "36px",
                  color: "#2A2A2A",
                }}
              >
                {card.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#7D7D7D",
                }}
              >
                {card.description}
              </p>

              {/* Conditions */}
              <h3
                style={{
                  fontFamily: "Unbounded",
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#7D7D7D",
                }}
              >
                {card.conditionsTitle}
              </h3>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#7D7D7D",
                }}
              >
                {card.conditionsDescription}
              </p>

              {/* Checklist */}
              <div className="mb-3">
                {card.checklist.map((item, i) => (
                  <p
                    key={i}
                    style={{ fontSize: "16px", color: "#7D7D7D", margin: 0 }}
                  >
                    ✅ {item}
                  </p>
                ))}
              </div>

              {/* Note */}
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#7D7D7D",
                }}
              >
                {card.note}
              </p>

              {/* Button */}
              <button
                className="btn btn-primary mt-2"
                style={{
                  background: "#5A2D7C",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipCards;
