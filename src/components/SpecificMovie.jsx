import React from "react";

const SpecificMovie = props => {
  const goBack = () => {
    props.history.push("/movies");
  };

  return (
    <React.Fragment>
      <h1>Movie {props.match.params.id}</h1>
      <button className="btn btn-primary m-2" onClick={goBack}>
        Save
      </button>
    </React.Fragment>
  );
};

export default SpecificMovie;
