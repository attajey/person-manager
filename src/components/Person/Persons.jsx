import React from "react";
import SimpleContext from "../../context/SimpleContext";
import Person from "./Person";

const Persons = () => {
  return (
    <SimpleContext.Consumer>
      {(context) => (
        <div>
          {context.state.persons.map((person) => (
            <Person
              key={person.id}
              fullname={person.fullname}
              deleted={() => context.handleDeletePerson(person.id)}
              changed={(event) => context.handleNameChange(event, person.id)}
            />
          ))}
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default Persons;
