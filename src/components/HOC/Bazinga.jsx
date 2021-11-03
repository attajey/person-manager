import React from "react";

const Bazinga = (RootComponent) => {
  return (props) => (
    <div className="text-center">
      <RootComponent {...props} />
    </div>
  );
};

export default Bazinga;

//This component gets a component and add some stuff to it. that the reason these higher order components exists
