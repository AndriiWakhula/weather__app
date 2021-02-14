import React from "react";
import styles from "./Forecast.module.scss";

const Forecast = ({ data }) => {
  const modifiData = data.list.slice(1, 7);

  function getTime(dt) {
    const data = new Date(dt);
    let hours = String(data.getHours());

    if (hours.length === 1) {
      hours = `0${hours}`;
    }

    return `${hours}:00`;
  }

  return (
    <div className={styles.Forecast}>
      {modifiData.map((el, i) => {
        return (
          <div key={i} className={styles.item}>
            <div className={styles.time}>{getTime(el.dt_txt)}</div>
            <div
              className={`forecast__icon icon__${el.weather[0].icon} `}
            ></div>
            <div className={styles.temperatura}>{el.main.temp.toFixed()}˚</div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
