import React from "react";

import "./StarWars.css";

const DetailsList = ({ person }) => {
  return (
    <div className="details-person">
      <div className="specific-detail">
        <h3>Mass</h3>
        <p>{person.mass}</p>
      </div>
      <div className="specific-detail">
        <h3>Hair Color</h3>
        <p>{person.hair_color.toUpperCase()}</p>
      </div>
      <div className="specific-detail">
        <h3>Height</h3>
        <p>{person.height}</p>
      </div>
      <div className="specific-detail">
        <h3>Skin Color</h3>
        <p>{person.skin_color.toUpperCase()}</p>
      </div>
      <div className="specific-detail">
        <h3>Eye Color</h3>
        <p>{person.eye_color.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default DetailsList;
