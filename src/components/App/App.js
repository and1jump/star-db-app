import React, { Component } from "react";

import "./app.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundery from "../ErrorBoundry";
import StarshipDetails from "../sw-components/StarshipDetails";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiServiceProvider } from "../SwapiServiceContext";

import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";

import "./app.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Router>
            <div className="container stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={5000} />

              <Route path="/" render={() => <h2>Welcom to StarDB</h2>} exact />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships/" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundery>
    );
  }
}
