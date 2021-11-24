import React from "react";
import styles from "./ModalPopup.module.css";
import Button from "../UI/Button/Button";

const ModalPopup = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();

    if (
      e.target.closest("button") ||
      (e.target.id === "modal" && e.currentTarget.id === "modal")
    ) {
      props.addOnClose();
    }
  };
  return (
    <div id="modal" className={styles.modal} onClick={clickHandler}>
      <div className={styles.modal__box}>
        <div className={styles.modal__top}>
          <p>{props.wrongInputStrings[0]}</p>
        </div>
        <div className={styles.modal__bottom}>
          <p>{props.wrongInputStrings[1]}</p>
          <Button type="submit">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
