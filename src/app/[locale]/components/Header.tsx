"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/header.scss";
import HeaderMobileMenu from "./HeaderMobileMenu";
import LangMenu from "./LangManu";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import language from "../../../../public/language.svg";
import languageScrolled from "../../../../public/language_scrolled.svg";

interface HeaderProps {
  scrolled: boolean;
}

const Header = (props: HeaderProps) => {
  const [menu, setMenu] = useState(false);
  const [langMenu, setLangMenu] = useState(false);

  const locale = useLocale(); 

  const t = useTranslations('Header');
  
  return (
    <header className={props.scrolled ? "header_scrolled" : "header"}>
      <div className="header_container">
        <Link href="/" className="menu_elem">
          <h1 className="logo">Studio Busy</h1>
        </Link>
        <div className="options">
          <Image
            width={30}
            height={30}
            src={props.scrolled ? languageScrolled : language}
            alt=""
            className="menu_elem"
            onClick={() => setLangMenu(!langMenu)}
          />
          <Link href={`/${locale}/about`} className="menu_elem">
            {t("About")}
          </Link>
          <Link href={`/${locale}/courses`} className="menu_elem">
            {t("Courses")}
          </Link>
          <Link href={`/${locale}/contacts`} className="menu_elem">
            {t("Contacts")}
          </Link>
        </div>
        <Image
          src={
            props.scrolled ? "/burger_menu_scrolled.svg" : "/burger_menu.svg"
          }
          width={50}
          height={30}
          alt=""
          className="mobile_icon"
          onClick={() => setMenu(!menu)}
        />
      </div>
      {menu && <HeaderMobileMenu />}
      <div
        style={{ position: "relative" }}
        onMouseLeave={() => setLangMenu(false)}
      >
        {langMenu && <LangMenu />}
      </div>
    </header>
  );
};

export default Header;
