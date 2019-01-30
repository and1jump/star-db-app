import React from "react";
import ItemList from "../ItemList";
import { withData } from "../HocHelpers";
import SwapiSevice from "../../services/swapi-service";

const swapiSevice = new SwapiSevice();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiSevice;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
