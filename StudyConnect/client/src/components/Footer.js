import React from "react";
import "../assets/styles/Landing.css";

/**
 * Amanda Au-Yeung
 * @returns footer that generates new date every year
 */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <span className="footer">
      <footer id="footer">© StudyConnect, Inc. {year} Все Права Защищены</footer>
    </span>
  );
}

Footer.propTypes = {};
export default Footer;
