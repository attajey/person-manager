import React from "react";
import SimpleContext from "../../context/SimpleContext";

const Header = ({ personsLength }) => {
  let badgeStyle = [];

  if (personsLength >= 3) {
    badgeStyle.push("badge-success");
  }
  if (personsLength <= 2) {
    badgeStyle.push("badge-warning");
  }
  if (personsLength <= 1) {
    badgeStyle.push("badge-danger");
  }

  return (
    <SimpleContext.Consumer>
      {(context) => (
        <div>
          <div className="alert alert-info">
            <h2>{context.state.appTitle}</h2>
          </div>
          <h5 className="alert alert-light">
            Number of Persons :{" "}
            <span className={`badge badge-pill ${badgeStyle.join(" ")}`}>
              {context.state.persons.length}
            </span>
          </h5>
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default Header;
