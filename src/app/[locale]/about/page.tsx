"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
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
            About us
          </h1>
          <p style={{ textAlign: "justify", marginTop: "40px", fontSize: "24px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            semper lacus vel dolor pellentesque viverra. Donec non tortor
            cursus, lacinia elit ac, ullamcorper ante. Nunc at risus diam.
            Integer consectetur est ac sagittis mollis. Mauris blandit, nisl nec
            condimentum finibus, dolor metus tempus purus, ut aliquam turpis
            nulla in tortor. Vestibulum elementum ultrices diam, eget viverra
            dolor. Phasellus ut pretium lorem, at dapibus justo. Nunc luctus
            sapien in arcu placerat pretium. Quisque a viverra dolor. Duis
            mattis sit amet magna a ullamcorper. Sed mollis arcu felis, ac
            hendrerit sem rutrum quis. Nulla vel arcu justo. Praesent pretium
            orci mi, a gravida mauris ultricies et. Donec condimentum arcu nisi,
            ut aliquam lacus imperdiet vel. Sed laoreet massa ut sapien lacinia,
            in rhoncus leo mattis. Duis sollicitudin augue in nulla porta
            tristique non a enim. Donec rhoncus aliquet tincidunt. Cras at nunc
            mauris. Donec pulvinar sit amet enim vel laoreet. Sed nec libero sed
            odio iaculis euismod eu imperdiet risus. Sed et egestas risus. Sed
            lacinia mollis varius. Nam congue ac diam consequat mattis. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Cras ipsum
            risus, maximus quis leo vel, condimentum cursus ex. Cras luctus
            vitae mauris quis euismod. Curabitur posuere accumsan lectus, vitae
            efficitur nisl consequat vel. Etiam mollis vitae massa imperdiet
            tempus. Praesent augue nibh, mollis eu vehicula eu, consequat in
            est. Sed vehicula aliquet ultrices. Praesent volutpat nisl ligula,
            maximus tristique dolor tempor nec. Donec fermentum quis nunc quis
            fringilla. Nulla metus eros, tincidunt at porta quis, rutrum eget
            erat. Phasellus justo massa, imperdiet non condimentum id,
            vestibulum quis ipsum. Fusce placerat libero nisl, in lobortis eros
            ultrices ac. Fusce varius tincidunt tortor, a mollis tellus
            tristique id. Sed condimentum et purus sit amet rhoncus. Morbi
            ultrices turpis risus, ac lobortis dolor molestie at. Duis
            condimentum diam nec accumsan iaculis. Nullam convallis lorem
            mauris. Etiam tristique libero ac lorem tempor, eu vulputate elit
            pharetra. Pellentesque varius libero libero. Donec aliquet massa vel
            est suscipit tincidunt. Etiam varius, dui et dignissim dictum,
            mauris nulla dictum leo, dignissim placerat felis elit non magna.
            Cras commodo nulla lorem, ut lobortis massa tincidunt iaculis.
            Suspendisse sollicitudin orci orci. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Proin lacinia,
            felis quis aliquet convallis, tortor mauris congue dui, et pharetra
            nisi ante consequat sapien. Quisque a bibendum leo, in eleifend
            velit. Vestibulum viverra commodo leo. Vivamus euismod malesuada
            mauris id hendrerit. Donec auctor, nisl nec fringilla consequat, dui
            velit consequat sapien, sed tempus odio arcu eget erat. Vivamus
            suscipit elit non sapien pulvinar efficitur. Sed et erat sed justo
            blandit ultrices at sed nunc. Morbi ut justo a eros bibendum tempor
            et nec erat.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
