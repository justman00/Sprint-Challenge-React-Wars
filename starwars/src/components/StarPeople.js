import React from "react";
import StarPerson from "./StarPerson";
import "./StarWars.css";

const StarPeople = props => {
  console.log(props.current);
  return (
    <div className="list-starwars">
      {props.data.map(person => (
        <StarPerson key={person.url} person={person} />
      ))}
      <div className="btns">
        <button
          onClick={() => props.fetchPrevPage(props.current.previous)}
          className={`custom-btn ${
            props.current.previous ? "" : "display-none"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => props.fetchNextPage(props.current.next)}
          className="custom-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StarPeople;
