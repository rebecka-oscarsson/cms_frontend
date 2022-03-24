import styles from "./Nav.module.css";
import { Link, LanguageDropdown } from "../index";

function Nav({ setLanguage, language }) {
  const links = ["start", "pricing", "about", "contact"];
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <Link text={link} key={index.toString()} id={index.toString()} />
        ))}
        <li>
          <LanguageDropdown setLanguage={setLanguage} language={language} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
