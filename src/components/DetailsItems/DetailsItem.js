import React from "react";
import styles from "./DetailsItem.module.css";

const DetailsItem = ({ item }) => {
  const { name, age } = item;
  const capitalName = [name[0].charAt(0).toUpperCase(), name.slice(1)].join("");
  return (
    <div className={styles.item}>{`${capitalName} (${age} years old)`}</div>
  );
};

export default DetailsItem;
