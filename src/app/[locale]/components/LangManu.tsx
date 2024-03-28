"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import "../../styles/lang_menu.scss";

const LangMenu = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onLanguageChange = (lang: string) => {
    const nextLocale = lang;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="lang-menu-wrapper">
      <div className="lang-menu-item" onClick={() => onLanguageChange("en")}>
        EN
      </div>
      <div className="lang-menu-item" onClick={() => onLanguageChange("ru")}>
        RU
      </div>
      <div className="lang-menu-item" onClick={() => onLanguageChange("ua")}>
        UA
      </div>
    </div>
  );
};

export default LangMenu;
