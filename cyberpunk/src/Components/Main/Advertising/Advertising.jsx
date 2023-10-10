import React from "react";
import styles from "./Advertising.module.css";

const Advertising = () => {
  return (
    <section className={styles.advertising}>
      <div
        className={styles.advertisingHeadLayer}
        style={{ backgroundImage: "url(./assets/img/layers/adv.png)" }}
      ></div>
      <div className={styles.advertisingWrapper}>
        <div className={styles.imagesWrapper}>
          <div
            className={styles.monitor}
            style={{
              backgroundImage: "url(./assets/img/platforms/monitor.png)",
            }}
          ></div>
          <div className={styles.advertisingLogoWrapper}>
            <div
              className={styles.hpWrapper}
              style={{ backgroundImage: "url(./assets/img/hplogo.svg)" }}
            ></div>
            <div
              className={styles.groupWrapper}
              style={{ backgroundImage: "url(./assets/img/Group.svg)" }}
            ></div>
            <div
              className={styles.CPLogoWrapper}
              style={{ backgroundImage: "url(./assets/img/logo.png)" }}
            ></div>
          </div>
        </div>
        <div className={styles.advertisingDescrWrapper}>
          <h2>Полное погружение вместе с HP</h2>
          <p>
            Погрузись в современные экшен-игры с реалистичным изображением с
            помощью монитора с диагональю 23,8 дюйма, созданном для отображения
            максимально насыщенных цветов. Успевай реагировать на любые события
            с временем отклика 1 мс и частотой в 144 Гц!
          </p>
          <ul>
            <li className={styles.colors}>Яркие насыщенные цвета</li>
            <li className={styles.definition}>
              Кристальная четкость изображения
            </li>
            <li className={styles.fastMove}>
              Быстрые движения и плавный геймплей
            </li>
          </ul>
          <button>Подробнее</button>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
