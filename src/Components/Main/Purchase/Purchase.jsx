import React from "react";
import styles from "./Purchase.module.css";

const Purchase = () => {
  return (
    <div className={styles.purchase}>
      <div
        className={styles.purchaseLeftImg}
        style={{ backgroundImage: "url(./assets/img/u.jpg)" }}
      ></div>
      <div className={styles.purchaseDescr}>
        <div className={styles.purchaseDescrWrapper}>
          <h2>Купить игру Cyberpunk 2077</h2>
          <h4>В комплект входит:</h4>
          <ul>
            <li className={styles.disk}>Футляр с игровыми дисками</li>
            <li className={styles.code}>
              Футляр с кодом для загрузки игры и дисками (pc)
            </li>
            <li className={styles.directory}>
              Справочник с информацией об игровом мире
            </li>
          </ul>
          <h4>Выберите платформу:</h4>
          <div className={styles.platformsIcons}>
            <div
              className={styles.PCIcon}
              style={{
                backgroundImage:
                  "url(./assets/img/platformsIcons/Frame.png)",
              }}
            ></div>
            <div
              className={styles.xBoxIcon}
              style={{
                backgroundImage:
                  "url(./assets/img/platformsIcons/xbox-one.svg)",
              }}
            ></div>
            <div
              className={styles.stadiaIcon}
              style={{
                backgroundImage:
                  "url(./assets/img/platformsIcons/stadia.png)",
              }}
            ></div>
            <div
              className={styles.PSIcon}
              style={{
                backgroundImage: "url(./assets/img/platformsIcons/Group.png)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
