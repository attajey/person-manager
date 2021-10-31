import React, { useContext } from "react";
import SimpleContext from "../../context/SimpleContext";

const Header = ({ appTitle }) => {
  const context = useContext(SimpleContext);

  const { persons } = context;

  let badgeStyle = "";

  if (persons.length >= 3) {
    badgeStyle = "badge-success";
  }
  if (persons.length <= 2) {
    badgeStyle = "badge-warning";
  }
  if (persons.length <= 1) {
    badgeStyle = "badge-danger";
  }

  return (
    <div>
      <div className="alert alert-info">
        <h2>{appTitle}</h2>
      </div>
      <h5 className="alert alert-light">
        Number of Persons :{" "}
        <span className={`badge badge-pill ${badgeStyle}`}>
          {persons.length}
        </span>
      </h5>
    </div>
  );
};

export default Header;
