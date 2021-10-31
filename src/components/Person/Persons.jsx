import React, { useContext } from "react";
import SimpleContext from "../../context/SimpleContext";
import Person from "./Person";

const Persons = () => {
  const context = useContext(SimpleContext);
  const { handleDeletePerson, handleNameChange } = context;

  return (
    <div>
      {context.persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => handleDeletePerson(person.id)}
          changed={(event) => handleNameChange(event, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
