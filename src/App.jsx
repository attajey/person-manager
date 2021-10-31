import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Persons from "./components/Person/Persons";
import NewPerson from "./components/Person/NewPerson";
import Header from "./components/common/Header";
import SimpleContext from "./context/SimpleContext";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      // { id: 1, fullname: "Jimbo Jambo" },
      // { id: 2, fullname: "Kimbo Kambo" },
      // { id: 3, fullname: "Foko Loco" },
    ],
    person: "",
    showPersons: true,
    appTitle: "Person Manager",
  };

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  handleDeletePerson = (id) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: filteredPersons });

    const personIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personIndex];
    toast.error(`${person.fullname} was deleted ! `, {
      position: "bottom-center",
      closeButton: true,
      closeOnClick: true,
    });
  };

  handleNameChange = (event, id) => {
    // const { persons: allPersons } = this.state;
    // const personIndex = allPersons.findIndex((p) => p.id === id);
    // const person = allPersons[personIndex];
    // person.fullname = event.target.value;
    // const persons = [...allPersons];
    // persons[personIndex] = person;
    // this.setState({ persons });
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => p.id === id);
    const targetedPerson = persons[personIndex];
    targetedPerson.fullname = event.target.value;
    persons[personIndex] = targetedPerson;
    this.setState({ persons: persons }); //this.setState({persons});
  };

  handleNewPerson = (event, fullname) => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: this.state.person,
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      this.setState({ persons: persons, person: "" });
      // Toastifying
      toast.success("New person added successfully !", {
        position: "bottom-center",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };

  render() {
    const { persons, showPersons } = this.state;

    return (
      <SimpleContext.Provider
        value={{
          state: this.state,
          handleDeletePerson: this.handleDeletePerson,
          handleNameChange: this.handleNameChange,
          handleNewPerson: this.handleNewPerson,
          setPerson: this.setPerson,
        }}
      >
        <div className="text-center">
          {/* WE USED CONTEXT API FOR THIS. NO MORE PROPS DRILLING ! */}
          <Header />

          <NewPerson />

          <button
            className={showPersons ? "btn btn-info" : "btn btn-danger"}
            onClick={this.handleShowPerson}
          >
            {showPersons ? "Hide Persons" : "Show Persons"}
          </button>

          {showPersons ? (
            <Persons
            // persons={persons}
            // personDelete={this.handleDeletePerson}
            // personChange={this.handleNameChange}
            />
          ) : null}

          <ToastContainer />
        </div>
      </SimpleContext.Provider>
    );
  }
}

export default App;
