import { useLocale } from "next-intl";
import Link from "next/link";

const HeaderMobileMenu = () => {
  const locale = useLocale();

  return (
    <div className="menu_wrapper">
      <Link href={`/${locale}/about`}>About</Link>
      <Link href={`/${locale}/courses`} style={{ marginTop: "10px" }}>
        Courses
      </Link>
      <Link href={`/${locale}/contacts`} style={{ marginTop: "10px" }}>
        Contacts
      </Link>
    </div>
  );
};

export default HeaderMobileMenu;
