import React, { Component } from "react";

import "./app.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundery from "../ErrorBoundry";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiServiceProvider } from "../SwapiServiceContext";

import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService()
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
            <RandomPlanet updateInterval={5000} />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundery>
    );
  }
}
