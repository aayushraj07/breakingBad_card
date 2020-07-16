import React from "react";
// import ResultItems from "./resultItems";
// import "./result.css";

const Result = ({ characters, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {characters.map(character => {
        <h1>{character.name}</h1>;
      })}
    </section>
  );
};

export default Result;
