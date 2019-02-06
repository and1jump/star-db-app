import React, { Component } from "react";

import "./app.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundery from "../ErrorBoundry";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

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
  state = {
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log("switched to", Service.name);
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundery>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container stardb-app">
            <Header onServiceChange={this.onServiceChange} />
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
