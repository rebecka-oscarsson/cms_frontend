import styles from "./Nav.module.css";
import { NavLink, LanguageDropdown } from "../index";

function Nav({
  setLanguage,
  language,
  content,
  startContent,
  pricingContent,
  contactContent,
}) {
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
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <NavLink
            pageId={startContent.attributes.Page_id}
            text={startContent.attributes.Page_name}
            key={startContent.attributes.Page_id}
          />
          <NavLink
            pageId={pricingContent.attributes.Page_id}
            text={pricingContent.attributes.Page_name}
            key={pricingContent.attributes.Page_id}
          />
          <NavLink
            pageId={contactContent.attributes.Page_id}
            text={contactContent.attributes.Page_name}
            key={contactContent.attributes.Page_id}
          />

          {content.map((page, index) => (
            <NavLink
              pageId={page.attributes.Page_id}
              text={page.attributes.Page_name}
              key={index.toString()}
            />
          ))}
          <li>
            <LanguageDropdown setLanguage={setLanguage} language={language} />
          </li>
        </ul>
      </nav>
    );
  } else return null;
}

export default Nav;
