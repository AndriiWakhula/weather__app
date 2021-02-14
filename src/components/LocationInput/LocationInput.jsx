import React from "react";
import styles from "./LocationInput.module.scss";

const LocationInput = (props) => {
  return (
    <div className={styles.container} onSubmit={props.sumbit}>
      <form className={styles.LocationForm}>
        <input
          placeholder={"your location..."}
          type="text"
          value={props.value}
          onChange={props.changeLocation}
        />
        <button />
      </form>
    </div>
  );
};

export default LocationInput;
