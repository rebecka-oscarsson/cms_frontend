import styles from "./Nav.module.css";
import { NavLink, LanguageDropdown } from "../index";

function Nav({ setLanguage, language, content }) {
  
  if (content && Object.keys(content).length > 0)
  {return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        
        {content.map((page, index) => (
          <NavLink pageId={page.attributes.PageId} text={page.attributes.Name} key={index.toString()} />
        ))}
        <li>
          <LanguageDropdown setLanguage={setLanguage} language={language} />
        </li>
      </ul>
    </nav>
  );}
  else return null
}

export default Nav;
