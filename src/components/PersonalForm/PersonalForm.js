import React from "react";
import styles from "./PersonalForm.module.css";
import Button from "../UI/Button/Button";
// import PersonalForm from "./components/PersonalForm/PersonalForm";

const PersonForm = (props) => {
  const formHandler = () => {};
  return (
    <div className={styles["form-wrap"]}>
      <form className={styles.form} onSubmit={formHandler}>
        <label for="username">Username</label>
        <input id="username" name="username" />

        <label for="age">Age (Years)</label>
        <input id="age" name="age" />

        <Button type="submit">Any</Button>
      </form>
    </div>
  );
};

export default PersonForm;
