"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contacts() {
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
            Contacts
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
