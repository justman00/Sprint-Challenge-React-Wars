import React, { Component } from "react";
import "./App.css";

import StarPeople from "./components/StarPeople";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      current: {}
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results, current: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  fetchNextPage = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results, current: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  fetchPrevPage = URL => {
    if (URL !== null) {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          this.setState({ starwarsChars: data.results, current: data });
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarPeople
          data={this.state.starwarsChars}
          current={this.state.current}
          fetchPrevPage={this.fetchPrevPage}
          fetchNextPage={this.fetchNextPage}
        />
      </div>
    );
  }
}

export default App;
