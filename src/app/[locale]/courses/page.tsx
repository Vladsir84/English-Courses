"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mainContent } from "../../data";
import styles from "../../styles/page.module.scss";

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
        className={styles.main}
        style={{ height: "100vh" }}
        onWheel={logScrollCoordinates}
      >
        <div className={styles.container}>
          <h1 className={styles.title} style={{ marginTop: "150px" }}>
            Courses
          </h1>
          {mainContent.map((item) => (
            <div className={styles.content_item} key={item.id}>
              <iframe
                className={styles.video}
                src={item.video}
                width="540"
                height="360"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
