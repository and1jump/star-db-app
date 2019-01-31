import React, { Component } from "react";

import "./app.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundery from "../ErrorBoundry";

import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/swapi-service";

import { SwapiServiceProvider } from "../SwapiServiceContext";

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
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container stardb-app">
            <Header />
            <RandomPlanet />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <PlanetList />
            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundery>
    );
  }
}
