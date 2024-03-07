import Link from "next/link";
import styles from "../page.module.css";

interface HeaderProps {
  scrolled: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <header className={props.scrolled ? styles.header_scrolled : styles.header}>
      <div className={styles.header_container}>
        <Link href="/" className={styles.menu_elem}>
          <h1>Dasha's Courses</h1>
        </Link>
        <div className={styles.options}>
          <Link href="/about" className={styles.menu_elem}>
            About
          </Link>
          <Link href="/courses" className={styles.menu_elem}>
            Courses
          </Link>
          <Link href="/contacts" className={styles.menu_elem}>
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
