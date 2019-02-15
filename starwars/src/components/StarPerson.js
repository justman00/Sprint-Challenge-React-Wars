import React from "react";

import "./StarWars.css";

import DetailsList from "./DetailsList";
import GeneralList from "./GeneralList";

const StarPerson = ({ person }) => {
  // console.log(person);
  return (
    <div className="person-starwars">
      <div className="header-person">
        <h2 className="character-name">{person.name}</h2>
        <div className="additional-info">
          <div className="birth-year">Year: {person.birth_year}</div>
          <div className="gender">
            {person.gender === "n/a" ? "" : person.gender.toUpperCase()}
          </div>
        </div>
      </div>
      <DetailsList person={person} />
      <GeneralList person={person} />
    </div>
  );
};

export default StarPerson;
