import React from "react";
import styles from "./DetailsItems.module.css";
import DetailsItem from "./DetailsItem";

const DetailsItems = ({ items }) => {
  let content = <h2>No items arrived</h2>;

  if (items.length > 0) {
    content = items.map((item) => (
      <DetailsItem item={item} key={`${item.age}${item.name}`} />
    ));
  }

  return <div className={styles["items-wrapper"]}>{content}</div>;
};

export default DetailsItems;
