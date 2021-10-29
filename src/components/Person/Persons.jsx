import React from "react";
import Person from "./Person";

const Persons = ({ persons, personDelete, personChange }) => {
  return (
    <div className="">
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => personDelete(person.id)}
          changed={(event) => personChange(event, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
