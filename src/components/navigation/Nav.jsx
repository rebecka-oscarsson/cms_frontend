import styles from "./Nav.module.scss";
import { NavLink, LanguageSelect } from "../../index";
import logo from "../../images/logoipsum.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({
  setLanguage,
  language,
  customPagesContent,
  startContent,
  pricingContent,
  contactContent,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const customPagesLoaded =
    customPagesContent && Object.keys(customPagesContent).length > 0;

  const startLoaded = startContent && Object.keys(startContent).length > 0;

  const pricingLoaded =
    pricingContent && Object.keys(pricingContent).length > 0;

  const contactLoaded =
    contactContent && Object.keys(contactContent).length > 0;

  return (
    <nav className={styles.navbar}>
      <Link to={`/?lang=${language}`}>
        <img
          src={logo}
          alt="start"
          className={styles.logo}
          onClick={closeMobileMenu}
          width="601px"
          height="72px"
        />
      </Link>

      <div
        className={styles.menuicon}
        onClick={handleClick}
        role="button"
        aria-expanded={menuOpen}
        aria-controls="menu"
        aria-label="open menu"
      >
        <i
          className={menuOpen ? "fas fa-times" : "fas fa-bars"}
          aria-hidden="true"
        />
      </div>

      <ul
        className={`${styles.navmenu} ${menuOpen ? styles.active : ""}`}
        role="menu"
        id="menu"
      >
        {startLoaded ? (
          <NavLink
            pageId={startContent.attributes.Page_id}
            text={startContent.attributes.Page_name}
            key={startContent.attributes.Page_id}
            language={language}
            closeMobileMenu={closeMobileMenu}
          />
        ) : null}
        {pricingLoaded ? (
          <NavLink
            pageId={pricingContent.attributes.Page_id}
            text={pricingContent.attributes.Page_name}
            key={pricingContent.attributes.Page_id}
            language={language}
            closeMobileMenu={closeMobileMenu}
          />
        ) : null}
        {contactLoaded ? (
          <NavLink
            pageId={contactContent.attributes.Page_id}
            text={contactContent.attributes.Page_name}
            key={contactContent.attributes.Page_id}
            language={language}
            closeMobileMenu={closeMobileMenu}
          />
        ) : null}
        {customPagesLoaded
          ? customPagesContent.map((page, index) => (
              <NavLink
                pageId={page.attributes.Page_id}
                text={page.attributes.Page_name}
                key={index.toString()}
                language={language}
                closeMobileMenu={closeMobileMenu}
              />
            ))
          : null}
        <LanguageSelect
          setLanguage={setLanguage}
          language={language}
          closeMobileMenu={closeMobileMenu}
        />
      </ul>
    </nav>
  );
}

export default Nav;
