import React from "react";

import styles from "./Details.module.scss";

const Details = ({ data }) => {
  function convertPressure(value) {
    return (value / 1.33).toFixed();
  }

  return (
    <div className={styles.details}>
      <div className={styles.row}>
        <div className={styles.item}>
          <div className={styles.name}>чувствуется как</div>
          <div className={styles.value}>{data.main.feels_like.toFixed()}˚</div>
        </div>
        <div className={styles.item}>
          <div className={styles.name}>давления</div>
          <div className={styles.value}>
            {convertPressure(data.main.pressure)}мм. рт. ст.
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.item}>
          <div className={styles.name}>влажность</div>
          <div className={styles.value}>{data.main.humidity}%</div>
        </div>
        <div className={styles.item}>
          <div className={styles.name}>ветер</div>
          <div className={styles.value}>{data.wind.speed} м/с</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
