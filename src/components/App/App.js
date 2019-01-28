import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorIndicator from "../ErrorIndicator";
import ErrorButton from "../ErrorButton";
import PeoplePage from "../PeoplePage/PeoplePage";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

import "./app.css";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = { hasError: false };

  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container stardb-app">
        <Header />
        <RandomPlanet />
        <ErrorButton />

        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={item => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={item => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
