import React from "react";
import styles from "./Promotion.module.css";

const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.promotionTitleWrapper}>
        <div
          className={styles.vector}
          style={{ backgroundImage: "url(./assets/img/layers/Vector.svg)" }}
        >
          <h3>акция</h3>
        </div>
        <h2>Играй и выигрывай!</h2>
      </div>
      <p className={styles.promotionDescr}>
        Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть
        консоль <span>Xbox Series X</span> или <span>Sony PlayStation 5</span>!
        Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша
        будут подведены 1 февраля. Удачи! ;)
      </p>
      <div className={styles.promotionWrapper}>
        <div className={styles.promotionLeftWrapper}>
          <input type="text" placeholder="Как тебя зовут?" />
          <input type="text" placeholder="Твой е-mail" />
          <div className={styles.inputFileWrapper}>
            <label htmlFor="files">Прикрепить скриншот</label>
            <p>.png / .jpg / .pdf</p>
            <input
              type="file"
              name="userfile"
              id="files"
              style={{ display: "none" }}
            />
          </div>
          <button>Отправить</button>
          <div className={styles.check}>
            <input type="checkbox" id="check" name="check" />
            <label htmlFor="check">
              Согласен на обработку персональных данных
            </label>
          </div>
        </div>
        <div className={styles.promotionRightWrapper}>
          <div
            className={styles.blueLayer}
            style={{ backgroundImage: "url(./assets/img/layers/blue.png)" }}
          ></div>
          <div
            className={styles.yelloyLayer}
            style={{ backgroundImage: "url(./assets/img/layers/yelloy.png)" }}
          ></div>
          <div
            className={styles.PSLayer}
            style={{
              backgroundImage: "url(./assets/img/platforms/Playstation.png)",
            }}
          ></div>
          <div
            className={styles.xBoxLayer}
            style={{
              backgroundImage: "url(./assets/img/platforms/xbox.png)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
