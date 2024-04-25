import { Link } from "react-router-dom";
import {
  mainPage,
  useDictionaryContext,
  createEvent,
} from "../contexts/TranslateContext";

import styles from "./Headers.module.css";

const Header = () => {
  const { lang, toggleLanguage } = useDictionaryContext();
  const handleLanguageChange = (event) => {
    toggleLanguage(event.target.value);
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <form className={styles.languageForm}>
          <label htmlFor="lang-switch"></label>
          <select id="lang-switch" value={lang} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ka">ქართული</option>
          </select>
        </form>
        <div className={styles.pages}>
          <Link to={"/"}>{mainPage[lang]}</Link> |
          <Link to={"/create"}>{createEvent[lang]}</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
