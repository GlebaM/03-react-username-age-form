import React, { useState } from "react";
import styles from "./App.module.css";
import PersonalForm from "./components/PersonalForm/PersonalForm";
import DetailsItems from "./components/DetailsItems/DetailsItems";
import Card from "./components/UI/Card";
import ModalPopup from "./components/UI/ModalPopup";

function App() {
  const [people, setPeople] = useState([]);
  const [ageFlag, setAgeFlag] = useState(true);
  const [noInputFlag, setNoInputFlag] = useState(true);

  const addPerson = (person) => {
    setPeople((people) => {
      return [person, ...people];
    });
  };

  const onAgeError = [
    "Invalid age input.",
    "Please enter valid number (age>0)",
  ];
  const onLackOfInput = [
    "Invalid input.",
    "Please enter valid name and age(non-empty values)",
  ];

  const resetInputs = () => {
    setNoInputFlag((noInputFlag) => (noInputFlag = true));
    setAgeFlag((ageFlag) => (ageFlag = true));
    // setNoInputFlag(() => !noInputFlag);
    // setAgeFlag(() => !ageFlag);
  };

  let content = "";

  if (!noInputFlag) {
    content = (
      <ModalPopup wrongInputStrings={onLackOfInput} addOnClose={resetInputs} />
    );
  }
  if (!ageFlag) {
    content = (
      <ModalPopup wrongInputStrings={onAgeError} addOnClose={resetInputs} />
    );
  }
  console.log(content);

  const noInputAdded = () => {
    setNoInputFlag(!noInputFlag);
    console.log("NoInput");
  };
  const wrongAgeNumber = () => {
    setAgeFlag(!ageFlag);
    console.log("Wrong age input");
  };

  console.log(people);
  return (
    <header className={styles.header}>
      <Card>
        <PersonalForm
          onAddPerson={addPerson}
          onDetailsAbsence={noInputAdded}
          onWrongInpNum={wrongAgeNumber}
        />
      </Card>
      <Card className={styles[`items-container`]}>
        <DetailsItems items={people} />
      </Card>
      {content}
    </header>
  );
}

export default App;
