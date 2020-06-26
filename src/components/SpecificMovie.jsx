import React from "react";

const SpecificMovie = props => {
  const goBack = () => {
    props.history.push("/movies");
  };

  return (
    <React.Fragment>
      <h1>Movie {props.match.params.id}</h1>
      <button onClick={goBack}>Save</button>
    </React.Fragment>
  );
};

export default SpecificMovie;
