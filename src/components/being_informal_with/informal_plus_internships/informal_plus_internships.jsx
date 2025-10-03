import React from "react";

export default function InternshipsSection() {
  return (
    <>
      <section className="container py-5" style={{ fontFamily: "Montserrat" }}>
        <h1
          className="fw-normal"
          style={{
            fontFamily: "Unbounded",
            fontSize: "3.75rem", // 60px
            lineHeight: "3.5625rem", // 57px
            background:
              "linear-gradient(180deg, #5A2D7C 0%, #008C95 100%), #2A2A2A",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Being Informal With...
        </h1>

        <p
          className="mt-3"
          style={{
            maxWidth: "51.25rem", // 820px
            fontWeight: 500,
            fontSize: "1.25rem", // 20px
            lineHeight: "1.5rem", // 24px
            color: "#2A2A2A",
          }}
        >
          We have started a new chat show with eminent and experienced scientists...
        </p>
      </section>

     
      {/* Internships Section */}
      <section className="container py-5" style={{ fontFamily: "Montserrat" }}>
        <h1
          className="fw-normal"
          style={{
            fontFamily: "Unbounded",
            fontSize: "3.75rem",
            lineHeight: "3.5625rem",
            background:
              "linear-gradient(180deg, #5A2D7C 0%, #008C95 100%), #2A2A2A",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          IYNS National & International Internships
        </h1>

        <p
          className="mt-3"
          style={{
            maxWidth: "51.25rem",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            color: "#2A2A2A",
          }}
        >
          Unlock opportunities to explore cutting-edge science...
        </p>

        {/* Two Columns Layout */}
        {[1, 2].map((row) => (
          <div key={row} className="row align-items-start mt-5 g-4">
            {/* Left Column */}
            <div className="col-12 col-md-6">
              <h2
                style={{
                  fontFamily: "Unbounded",
                  fontSize: "2.5rem",
                  lineHeight: "3.125rem",
                  color: "#2A2A2A",
                }}
              >
                International
              </h2>
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  lineHeight: "1.5rem",
                  color: "#7D7D7D",
                }}
              >
                IYNS, in collaboration with ITER, France, offers a unique
                three-week internship...
              </p>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6">
              <div
                className="shadow-sm h-100"
                style={{
                  borderRadius: "1.5rem",
                  padding: "2.5rem",
                  border: "1px solid #ddd",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Unbounded",
                    fontSize: "1.75rem",
                    lineHeight: "2.1875rem",
                    color: "#7D7D7D",
                  }}
                >
                  General conditions for the internship
                </h3>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    color: "#7D7D7D",
                  }}
                >
                  Curious about science, nuclear tech, and clean energy?...
                </p>
                <ul className="mt-3" style={{ paddingLeft: "1rem" }}>
                  <li style={{ fontSize: "1.25rem", color: "#7D7D7D" }}>
                    ✅ Indian Citizen (with a valid Indian passport)
                  </li>
                  <li style={{ fontSize: "1.25rem", color: "#7D7D7D" }}>
                    ✅ Students of Class 10–12
                  </li>
                  <li style={{ fontSize: "1.25rem", color: "#7D7D7D" }}>
                    ✅ Permission from Your School
                  </li>
                  <li style={{ fontSize: "1.25rem", color: "#7D7D7D" }}>
                    ✅ Consent from Your Parents
                  </li>
                </ul>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    color: "#7D7D7D",
                  }}
                >
                  🚀 Get ready to learn, explore, and connect...
                </p>
                <button
                  className="btn btn-primary"
                  style={{
                    background: "#5A2D7C",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  Register Now!
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
