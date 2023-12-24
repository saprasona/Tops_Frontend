const ALL_DATA = require("./data.json");

// ----------1. Import data from JSON-------------
function getData() {
  return ALL_DATA;
}
console.log(getData());

//-------------2. Get all city names of a given state----------------
function getCitiesByState(state) {
  const stateData = ALL_DATA.filter((item) => item.state_name === state);
  return stateData ? stateData.map((city) => city.city) : [];
}
console.log("Gujarāt cities :- " + getCitiesByState("Gujarāt"));

//-------------3. Get city names with more characters than the given input-------------
function getCitiesWithMoreCharacters(inputLength) {
  return ALL_DATA.flatMap((cityData) =>
    cityData.city.length > inputLength ? cityData.city : []
  );
}
console.log(getCitiesWithMoreCharacters(10));

//---------------4. Get city list with population more than the given value---------------
function getCitiesWithPopulationMoreThan(population) {
  return ALL_DATA.flatMap((cityData) =>
    cityData.population > population ? cityData.city : []
  );
}
console.log("city list with population more than the given value :- " + getCitiesWithPopulationMoreThan(1000000));

//--------------5. Sort cities by population in ascending or descending order---------------
function sortCitiesByPopulation(ascending = true) {
  const sortedCities = ALL_DATA.slice();
  return ascending
    ? sortedCities.sort((a, b) => a.population - b.population)
    : sortedCities.sort((a, b) => b.population - a.population);
}
console.log(sortCitiesByPopulation());

//---------------6. Get top 5 cities by population--------------------
function getTop5CitiesByPopulation() {
  const sortedCities = sortCitiesByPopulation(false);
  return sortedCities.slice(0, 5).map((city) => city.city);
}
console.log(getTop5CitiesByPopulation());

//---------------7. Get total population of a given state-----------------
function getTotalPopulationByState(state) {
  const stateData = ALL_DATA.filter((item) => item.state_name === state);
  return stateData.length > 0
    ? stateData.reduce((total, city) => total + parseInt(city.population), 0)
    : 0;
}
console.log(getTotalPopulationByState("Gujarāt"));

//------------8. Get top 5 states by population-----------------
function getTop5StatesByPopulation() {
  // Create an object to store total population for each state
  const statePopulation = {};

  // Calculate total population for each state
  ALL_DATA.forEach((city) => {
    const state = city.state_name;
    const population = parseInt(city.population);
    statePopulation[state] = (statePopulation[state] || 0) + population;
  });

  // Convert object to array of { state, population } objects
  const statePopulationArray = Object.entries(statePopulation).map(([state, population]) => ({ state, population }));

  // Sort array by population in descending order
  statePopulationArray.sort((a, b) => b.population - a.population);

  // Take the top 5 states
  const top5States = statePopulationArray.slice(0, 5);

  return top5States;
}
console.log(getTop5StatesByPopulation());