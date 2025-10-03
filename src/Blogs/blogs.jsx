import React from "react";
import factoryImage from "../Data/Assets/images/sample_img.png";
import newsletterImg from "../Data/Assets/images/newsletter.png";
import Navbar from "../components/home_page/navbar";
import Footer from "../components/home_page/footer";

export default function BlogsPage() {
  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <Navbar />

      {/* Hero */}
      <section className="container py-5">
        <h1 className="display-5 fw-normal text-center text-gradient" style={{
          background: "linear-gradient(to bottom, #5A2D7C, #008C95)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          maxWidth: "850px",
          margin: "0 auto",
          lineHeight: "1.3"
        }}>
          Engage with ideas that spark change and creativity. Stay informed on
          what’s shaping the world around you. Discover the stories that fuel
          inspiration and connection.
        </h1>
      </section>

      {/* Blog Grid */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Big Featured Blog */}
          <div className="col-12 col-lg-8">
            <div className="bg-light rounded overflow-hidden">
              <img
                src={factoryImage}
                alt="Blog"
                className="w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="mt-3">
              <h2 className="h3 fw-semibold text-dark">
                The Art of Black-and-White Photography
              </h2>
              <div className="d-flex justify-content-between text-primary mt-2 fs-5">
                <span>Nov 29, 2024</span>
                <span>Author</span>
              </div>
            </div>
          </div>

          {/* Side Blogs */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-secondary bg-opacity-25 rounded overflow-hidden">
                <img
                  src={factoryImage}
                  alt="Blog"
                  className="w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="p-3">
                  <h3 className="h5 fw-medium text-dark">
                    The Importance of Editing: Polishing Your Work as a Personal Author
                  </h3>
                  <div className="d-flex justify-content-between text-primary mt-2 small">
                    <span>Nov 29, 2024</span>
                    <span>Author</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="container py-5">
        <h2 className="h2 fw-normal text-dark mb-4">Media</h2>
        <div className="row g-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div
                className="d-flex flex-column p-4 rounded text-white h-100"
                style={{
                  background: "linear-gradient(135deg, #008C95, #5A2D7C)",
                  minHeight: "190px"
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="flex-grow-1 h4 lh-sm">
                    Join India’s next-gen Nuclear Movement!
                  </span>
                  <div className="d-flex align-items-center justify-content-center rounded-circle border border-white" style={{ width: "48px", height: "48px", transform: "rotate(180deg)" }}>
                    <span>➝</span>
                  </div>
                </div>
                <div className="border-top border-white my-2" style={{ width: "80px" }}></div>
                <p className="mb-0">
                  At the Indian Youth Nuclear Society (IYNS), we empower students
                  and professionals to explore.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-end align-items-center gap-3 mt-4">
          <button className="btn btn-outline-dark rounded-circle">←</button>
          <button className="btn btn-outline-dark rounded-circle">→</button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container py-5">
        <h2 className="h2 fw-semibold text-dark mb-4">Newsletter</h2>
        <div className="row g-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={newsletterImg}
                  alt={`Newsletter ${i}`}
                  className="card-img-top"
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 fw-semibold text-dark">
                    Nuclear News - Issue 6 (July 2020)
                  </h3>
                  <p className="text-muted">
                    Premier episode of IYNS&apos;s original Tête-À-Tête Series:
                    &quot;Being Informal With...&quot;
                  </p>
                  <button className="btn btn-primary mt-auto w-auto">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-end align-items-center gap-3 mt-4">
          <button className="btn btn-outline-dark rounded-circle">←</button>
          <button className="btn btn-outline-dark rounded-circle">→</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
