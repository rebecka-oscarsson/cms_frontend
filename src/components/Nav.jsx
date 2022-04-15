import styles from "./Nav.module.scss";
import { NavLink, LanguageSelect } from "../index";
import logo from "../images/Spraakteknik.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({
  setLanguage,
  language,
  content,
  startContent,
  pricingContent,
  contactContent,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  if (
    content &&
    startContent &&
    pricingContent &&
    contactContent &&
    Object.keys(content).length > 0 &&
    Object.keys(startContent).length > 0 &&
    Object.keys(contactContent).length > 0 &&
    Object.keys(pricingContent).length > 0
  ) {
    return (
      <nav className={styles.navbar}>
        <Link to={`/?lang=${language}`}>
          <img
            src={logo}
            alt="Spraakteknik"
            className={styles.logo}
            onClick={closeMobileMenu}
          />
        </Link>

        <div className={styles.menuicon} onClick={handleClick}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={`${styles.navmenu} ${menuOpen ? styles.active : ""}`}>
          
            <LanguageSelect
              setLanguage={setLanguage}
              language={language}
              closeMobileMenu={closeMobileMenu}
            />

          <NavLink
            pageId={startContent.attributes.Page_id}
            text={startContent.attributes.Page_name}
            key={startContent.attributes.Page_id}
            language={language}
            closeMobileMenu={closeMobileMenu}
          />
          <NavLink
            pageId={pricingContent.attributes.Page_id}
            text={pricingContent.attributes.Page_name}
            key={pricingContent.attributes.Page_id}
            language={language}
            closeMobileMenu={closeMobileMenu}
          />
          <NavLink
            pageId={contactContent.attributes.Page_id}
            text={contactContent.attributes.Page_name}
            key={contactContent.attributes.Page_id}
            language={language}
            closeMobileMenu={closeMobileMenu}
          />

          {content.map((page, index) => (
            <NavLink
              pageId={page.attributes.Page_id}
              text={page.attributes.Page_name}
              key={index.toString()}
              language={language}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
      </nav>
    );
  } else return null;
}

export default Nav;
