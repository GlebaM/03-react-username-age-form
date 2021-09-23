import React from "react";
import styles from "./App.module.css";
import PersonalForm from "./components/PersonalForm/PersonalForm";
// import DetailsItems from "./components/DetailsItems/DetailsItems";
import Card from "./components/UI/Card";

function App() {
  return (
    <header className={styles.header}>
      <Card>
        <PersonalForm />
      </Card>
      <Card>
        {/* <DetailsItems /> */}
        <p>reshy</p>
      </Card>
    </header>
  );
}

export default App;
