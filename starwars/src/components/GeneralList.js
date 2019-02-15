import React from "react";

import "./StarWars.css";

const GeneralList = ({ person }) => {
  return (
    <div className="details-person padding-10">
      <div className="specific-detail">
        <h3>Starships</h3>
        <p>{person.starships.length}</p>
      </div>
      <div className="specific-detail">
        <h3>Vehicles</h3>
        <p>{person.vehicles.length}</p>
      </div>
      <div className="specific-detail">
        <h3>Films</h3>
        <p>{person.films.length}</p>
      </div>
    </div>
  );
};

export default GeneralList;
