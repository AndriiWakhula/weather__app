import React from "react";
import CurentWeather from "./CurentWeather/CurentWeather";
import Details from "./Details/Details";
import Forecast from "./Forecast/Forecast";

import styles from "./InfoPage.module.scss";

const InfoPage = ({ data, backToChoiseLocation }) => {
  return (
    <div className={styles.weather__inner}>
      <button onClick={backToChoiseLocation} />
      <CurentWeather data={data.curentWeather} />
      <Forecast data={data.forecast} />
      <Details data={data.curentWeather} />
    </div>
  );
};

export default InfoPage;
