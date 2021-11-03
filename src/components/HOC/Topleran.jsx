import React from "react";

// const TopLearn = ({ children }) => {
//   return children;
// };

const TopLearn = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};

export default TopLearn;
