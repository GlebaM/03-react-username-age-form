import React, { useState } from "react";
import styles from "./PersonalForm.module.css";
import Button from "../UI/Button/Button";

const PersonForm = (props) => {
  const [age, setAge] = useState("");
  const [userName, setuserName] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!age || !userName) {
      return props.onDetailsAbsence();
    }

    if (age <= 0 || age.includes("e") || !Number.isInteger(Number(age))) {
      return props.onWrongInpNum();
    }

    props.onAddPerson({ age: age, name: userName });
    setAge("");
    setuserName("");
  };

  const ageOnChange = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const userNameOnChange = (e) => {
    e.preventDefault();
    setuserName(e.target.value);
  };

  return (
    <div className={styles["form-wrap"]}>
      <form className={styles.form} onSubmit={formHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={userName}
          onChange={userNameOnChange}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={ageOnChange}
        />

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default PersonForm;
