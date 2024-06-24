import React from "react";
import styles from "./NightCity.module.css";

const NightCity = () => {
  return (
    <section className={styles.NightCity}>
      <h2>Найт-Сити изменит тебя навсегда!</h2>
      <p>
        <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие
        которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
        модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках
        устройства, позволяющего обрести бессмертие. Ты сможешь менять
        киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый
        мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
      </p>
      <div className={styles.imagesWrapper}>
        <div className={styles.leftImagesWrapper}>
          <div
            style={{
              backgroundImage:
                "url(./assets/img/nightCityRectangls/Rectangle1.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage:
                "url(./assets/img/nightCityRectangls/Rectangle2.png)",
            }}
          ></div>
        </div>
        <div
          className={styles.rightImgWrapper}
          style={{
            backgroundImage:
              "url(./assets/img/nightCityRectangls/Rectangle3.png)",
          }}
        ></div>
      </div>
      <div
        className={styles.layer}
        style={{
          backgroundImage: "url(./assets/img/layers/1.png)",
        }}
      ></div>
    </section>
  );
};

export default NightCity;
