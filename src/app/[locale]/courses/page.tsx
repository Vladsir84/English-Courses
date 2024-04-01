"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mainContent } from "../../data";

export default function Courses() {
  const [scrolled, setScrolled] = useState(false);

  function logScrollCoordinates() {
    let scrollY = window.scrollY;
    if (scrollY !== 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  return (
    <>
      <Header scrolled={scrolled} />
      <main
        className="main"
        style={{ height: "100vh" }}
        onWheel={logScrollCoordinates}
      >
        <div className="container">
          <h1 className="title" style={{ marginTop: "150px" }}>
            Courses
          </h1>
          {mainContent.map((item) => (
            <div className="content_item" key={item.id}>
              <iframe
                className="video"
                src={item.video}
                width="540"
                height="360"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
