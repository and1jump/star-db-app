import React, { Component } from "react";

import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";

import "./people-page.css";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, info) {
    // debugger;

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
