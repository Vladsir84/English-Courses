"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { mainContent } from "./data";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyUsBlock from "./components/WhyUsBlock";
import OurMissionBlock from "./components/OurMissionBlock";
import WhoIsOur from "./components/WhoIsOur";

export default function Home() {
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
      <main className={styles.main} onWheel={logScrollCoordinates}>
        <div className={styles.post_header}>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>
              Learn a foreign language by studying 10 minutes a day
            </h1>
            <p className={styles.subtitle}>
              Set achievable goals. Get advice from native speakers. Achieve
              more. Learn a foreign language and discover a world of new
              opportunities!.
            </p>
            <button className={styles.post_header_btn}>
              <a href="https://t.me/Vladsir1284">Request a call</a>{" "}
            </button>
          </div>
          <Image src={"/english_class.png"} width={500} height={400} alt="" />
        </div>
        <div className={styles.container}>
          <WhyUsBlock />
          <OurMissionBlock />
          <WhoIsOur />
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
      </main>
      <Footer />
    </>
  );
}
