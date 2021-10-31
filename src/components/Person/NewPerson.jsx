import React from "react";

import SimpleContext from "../../context/SimpleContext";

const NewPerson = () => {
  return (
    <SimpleContext.Consumer>
      {(context) => (
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
                onChange={context.setPerson}
                value={context.state.person}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-success fa fa-plus-circle"
                  type="submit"
                  onClick={context.handleNewPerson}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default NewPerson;
