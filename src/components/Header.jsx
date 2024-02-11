import { useState } from "react";
import { Link } from "react-router-dom";
import { useDictionaryContext } from "../contexts/TranslateContext";

const Header = () => {
  const { lang, toggleLanguage } = useDictionaryContext();
  return (
    <header>
      <button onClick={toggleLanguage}>{lang}</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/create"}>Create Page</Link>
    </header>
  );
};

export default Header;
