import React, { Component } from "react";

import "./app.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundery from "../ErrorBoundry";

import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/swapi-service";

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {};

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    return (
      <ErrorBoundery>
        <div className="container stardb-app">
          <Header />
          <RandomPlanet />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
        </div>
      </ErrorBoundery>
    );
  }
}
