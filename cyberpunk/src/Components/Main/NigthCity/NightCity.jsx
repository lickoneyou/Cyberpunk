import React from "react";
import styles from "./NightCity.module.css";

const NightCity = () => {
  return (
    <section>
      <h2>Найт-Сити изменит тебя навсегда!</h2>
      <p>
        <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие
        которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
        модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках
        устройства, позволяющего обрести бессмертие. Ты сможешь менять
        киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый
        мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
      </p>
      <div>
        <div className={styles.leftImagesWrapper}>
          <div
            styles={{
              backgroundImage:
                "url(./assets/img/nightCityRectangls/Rectangle1.png)",
            }}
          ></div>
          <div
            styles={{
              backgroundImage:
                "url(./assets/img/nightCityRectangls/Rectangle2.png)",
            }}
          ></div>
        </div>
        <div
          className={styles.rightImagWrapper}
          styles={{
            backgroundImage:
              "url(./assets/img/nightCityRectangls/Rectangle3.png)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default NightCity;
