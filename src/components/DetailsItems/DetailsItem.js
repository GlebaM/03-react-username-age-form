import React from "react";
import styles from "./DetailsItem.module.css";

const DetailsItem = (props) => {
  const name = props.item.name;
  const capitalName = [name[0].charAt(0).toUpperCase(), name.slice(1)].join("");
  return (
    <div
      className={styles.item}
    >{`${capitalName} (${props.item.age} years old)`}</div>
  );
};

export default DetailsItem;
