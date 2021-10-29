import React, { Component } from "react";
import Persons from "./components/Person/Persons";
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
  };

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
    console.log(this.state.showPersons);
  };

  handleDeletePerson = (id) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: filteredPersons });
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
    persons.push(person);
    this.setState({ persons: persons, person: "" });
    // const lastID = persons.lastItem.id;
    // persons.push((id = lastID + 1), (fullname = event.target.value));
  };

  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };

  render() {
    const { persons, showPersons } = this.state;

    // let person = null;
    // if (showPersons) {
    //   person = <Persons persons={persons} />;
    // }

    return (
      <div className="text-center">
        <div className="alert alert-info">
          <h2>Person Manager</h2>
        </div>
        <h5 className="alert alert-light">
          Number of Persons :{" "}
          <span className="badge badge-pill badge-success">
            {persons.length}
          </span>
        </h5>

        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="input-group w-25">
              <input
                type="text"
                placeholder="Give me a name !"
                className="form-control"
                onChange={this.setPerson}
                value={this.state.person}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-sm btn-success fa fa-plus-circle"
                  type="submit"
                  onClick={this.handleNewPerson}
                />
              </div>
            </div>
          </form>
        </div>

        <button className="btn btn-info" onClick={this.handleShowPerson}>
          {""}
          {showPersons ? "Hide Persons" : "Show Persons"}
        </button>

        {showPersons ? (
          <Persons
            persons={persons}
            personDelete={this.handleDeletePerson}
            personChange={this.handleNameChange}
          />
        ) : null}
      </div>
    );
  }
}

export default App;