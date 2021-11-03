import React, { useState, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/Person/Persons";
import NewPerson from "./components/Person/NewPerson";
import Header from "./components/common/Header";
import SimpleContext from "./context/SimpleContext";
import TopLearn from "./components/HOC/Topleran";

import "./App.css";

const App = () => {
  const [getPersons, setPersons] = useState([]);
  const [getSinglePerson, setSinglePerson] = useState("");
  const [getShowPersons, setShowPersons] = useState(true);

  const handleShowPerson = () => {
    setShowPersons(!getShowPersons);
  };

  const handleDeletePerson = (id) => {
    const persons = [...getPersons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    setPersons(filteredPersons);

    const personIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personIndex];
    toast.error(`${person.fullname} was deleted ! `, {
      position: "bottom-center",
      closeButton: true,
      closeOnClick: true,
    });
  };

  const handleNameChange = (event, id) => {
    const persons = [...getPersons];
    const personIndex = persons.findIndex((p) => p.id === id);
    const targetedPerson = persons[personIndex];
    targetedPerson.fullname = event.target.value;
    persons[personIndex] = targetedPerson;
    setPersons(persons);
  };

  const handleNewPerson = (event, fullname) => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: getSinglePerson,
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      setPersons(persons);
      setSinglePerson("");

      // Toastifying
      toast.success("New person added successfully !", {
        position: "bottom-center",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  const setPerson = (event) => {
    setSinglePerson(event.target.value);
  };

  return (
    <SimpleContext.Provider
      value={{
        persons: getPersons,
        person: getSinglePerson,
        handleDeletePerson: handleDeletePerson,
        handleNameChange: handleNameChange,
        handleNewPerson: handleNewPerson,
        setPerson: setPerson,
      }}
    >
      {/* <Fragment> */}
      <TopLearn classes="text-center">
        {/* <div className=""> */}
        {/* WE USED CONTEXT API FOR THIS. NO MORE PROPS DRILLING ! */}
        <Header appTitle="Person Manager" />

        <NewPerson />

        <button
          className={getShowPersons ? "btn btn-info" : "btn btn-danger"}
          onClick={handleShowPerson}
        >
          {getShowPersons ? "Hide Persons" : "Show Persons"}
        </button>

        {getShowPersons ? <Persons /> : null}

        <ToastContainer />
        {/* </div> */}
        {/* </Fragment> */}
      </TopLearn>
    </SimpleContext.Provider>
  );
};

export default App;
