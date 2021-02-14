import React from "react";

import styles from "./Curentweather.module.scss";

const CurentWeather = ({ data }) => {
  return (
    <div className={styles.current}>
      <div className={styles.city}>{data.name}</div>
      <div className={`main__icon icon__${data.weather[0].icon}`}></div>
      <div className={styles.temperatyre}>{data.main.temp.toFixed()}˚</div>
    </div>
  );
};

export default CurentWeather;
