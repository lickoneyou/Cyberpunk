import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerHead}>
        <div className={styles.footerLogos}>
          <div
            className={styles.footerLogo}
            style={{ backgroundImage: "url(./assets/img/Logo.png)" }}
          ></div>
          <div
            className={styles.footerCPRLogo}
            style={{ backgroundImage: "url(./assets/img/CD_Projekt_logo.svg)" }}
          ></div>
        </div>
        <div className={styles.footerLinks}>
          <p>Лицензия</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
      </div>
    </footer>
  );
};

export default Footer;
