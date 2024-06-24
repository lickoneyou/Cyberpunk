import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [headerBg, setHeaderbg] = useState(`./assets/img/headerBg/1.jpg`);

  const headerSwitchBG = () => {
    let count = 1;
    function switcher() {
      if (count < 3) {
        count++;
        setHeaderbg(`./assets/img/headerBg/${count}.jpg`);
      } else {
        count = 1;
        setHeaderbg(`./assets/img/headerBg/${count}.jpg`);
      }
    }
    setInterval(switcher, 5000);
  };

  useEffect(() => {
    headerSwitchBG();
  }, []);

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className={styles.headerWrapper}>
        <div
          className={styles.logo}
          style={{ backgroundImage: "url(./assets/img/Logo.png)" }}
        ></div>
        <div className={styles.social}>
          <a href="#">
            <img src="./assets/img/social/youtube.svg" alt="youtube" />
          </a>
          <a href="#">
            <img src="./assets/img/social/vk.svg" alt="vk" />
          </a>
          <a href="#">
            <img src="./assets/img/social/facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="./assets/img/social/twitter.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="./assets/img/social/twitch.svg" alt="twitch" />
          </a>
          <a href="#">
            <img src="./assets/img/social/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
      <div
        className={styles.headerWrapperBottom}
        style={{ backgroundImage: "url(./assets/img/layers/Rectangle.png)" }}
      >
        <h1>Доступно на всех платформах</h1>
        <button>Узнать больше</button>
      </div>
    </header>
  );
};

export default Header;
