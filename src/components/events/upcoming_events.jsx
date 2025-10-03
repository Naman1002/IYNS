import React from "react";
import content from "../../Data/upcoming_events.json"; // adjust path if needed

function EventsPage() {
  return (
    <div style={{ background: "#F2F2F2", width: "100%", minHeight: "100vh" }}>
      {/* Page Title */}
      <h1
        style={{
          fontFamily: "Unbounded",
          fontSize: "36px",
          fontWeight: 400,
          margin: "156px 0 40px 100px",
          background: "linear-gradient(180deg, #5A2D7C 0%, #008C95 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {content.pageTitle}
      </h1>

      {/* Main Image */}
      <div
        style={{
          width: "1240px",
          height: "450px",
          margin: "0 auto",
          borderRadius: "16px",
          background: `url(${content.mainImage}) center/cover no-repeat`
        }}
      ></div>

      {/* Sub Images (max 4) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          margin: "40px auto",
          width: "1240px"
        }}
      >
        {content.subImages.slice(0, 4).map((img, index) => (
          <div
            key={index}
            style={{
              width: "400px",
              height: "320px",
              borderRadius: "8px",
              background: `url(${img}) center/cover no-repeat`
            }}
          ></div>
        ))}
      </div>

      {/* Text Sections */}
      <div
        style={{
          width: "1032px",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px"
        }}
      >
        {content.sections.map((section, i) => (
          <p
            key={i}
            style={{
              fontFamily: "Montserrat",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "#2A2A2A"
            }}
          >
            {section.text}
          </p>
        ))}

        {/* Button */}
        <button
          style={{
            background: "#5A2D7C",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          {content.buttonText}
        </button>
      </div>
    </div>
  );
}

export default EventsPage;
