"use client";
import { useState } from "react";
import styles from "../styles/page.module.scss";
import "../styles/post_header.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyUsBlock from "./components/WhyUsBlock";
import OurMissionBlock from "./components/OurMissionBlock";
import WhoIsOur from "./components/WhoIsOur";
import PaymentBlock from "./components/PaymentBlock";
import Feedbacks from "./components/Feedbacks";
import { useTranslations } from "next-intl";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations("Post_header");

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
        <div className="post_header">
          <div className="title_wrapper">
            <h1 className="title">
              Learn a foreign language by studying 10 minutes a day
            </h1>
            <p className="subtitle">
              Set achievable goals. Get advice from native speakers. Achieve
              more. Learn a foreign language and discover a world of new
              opportunities!.
            </p>
            <button className="post_header_btn">
              <a href="https://t.me/Darina_busy" target="_blank">
                {t('Request a call')}
              </a>{" "}
            </button>
          </div>
          <img src={"/english_class.png"} className="post_header_img" alt="" />
        </div>
        <div className={styles.container}>
          <WhyUsBlock />
          <OurMissionBlock />
          <WhoIsOur />
          <Feedbacks />
          <PaymentBlock />
        </div>
      </main>
      <Footer />
    </>
  );
}
