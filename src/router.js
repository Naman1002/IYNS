// src/router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home
import Home from "./components/home_page/home";

// About Us
import AboutUs from "./components/about_us/about_us";

// Events
import PastEvents from "./components/events/past_events";
import UpcomingEvents from "./components/events/upcoming_events";

// Career / Internships
import Career from "./components/career/career";
import Internships from "./components/Internships/internships";

import InformalPlusInternships from "./components/being_informal_with/informal_plus_internships/informal_plus_internships";

// Contact
import ContactUs from "./components/contact_us/contact_us";

//Blogs
import BlogsPage from "./Blogs/blogs";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutUs />} />

        {/* Events */}
        <Route path="/events/past" element={<PastEvents />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />

        {/* Career */}
        <Route path="/career" element={<Career />} />
        <Route path="/internships" element={<Internships />} />
        <Route
          path="/informal-plus-internships"
          element={<InformalPlusInternships />}
        />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Blogs */}
        <Route path = "/blog" element = {<BlogsPage />} />

        {/* Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
