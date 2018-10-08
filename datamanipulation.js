const d3 = require('d3-dsv'),
    fs = require('fs'),
    data = fs.readFileSync('./countries.csv', 'utf8'); //this is just a string
var rowData = d3.csvParse(data); //rowData is now an Array
function sortNames(a, b) {
    var aName = a.name.toLowerCase(),
        bName = b.name.toLowerCase();
    if (aName < bName) {
        return -1;
    }
    if (aName > bName) {
        return 1;
    }
    return 0;
}

var allCountries = rowData.reduce((countries, place) => {
        var countryIndex = countries.findIndex((countriesPlace) => {
            return countriesPlace.name === place.Country;
        });
        if (countryIndex === -1) { // if the country does not exist, make it
            countries.push({
                name: place.Country,
                states: []
            });
            countryIndex = countries.length - 1; // grab the most recent one
        }
        var currentCountry = countries[countryIndex],
            stateIndex = currentCountry.states.findIndex((countriesState) => {
                return countriesState.name === place.State;
            });
        if (stateIndex === -1) { // state does not exist, make it
            currentCountry.states.push({
                name: place.State,
                cities: []
            });
            stateIndex = currentCountry.states.length - 1;
        }
        var currentState = currentCountry.states[stateIndex]; // this will be an object
        var cityIndex = currentState.cities.findIndex((countriesCity) => {
            return countriesCity.name === (place.City);
        });
        if (cityIndex === -1) { // city does not exist, make it
            currentState.cities.push({
                name: place.City,
                population: place.Population
            });
            cityIndex = currentCountry.states.length - 1;
        }
        currentState.cities.sort((one, two) => {
            return one.population - two.population; // ascending order of population
        });
        currentCountry.states.sort(sortNames); // order states
        return countries;
    },
    []).sort(sortNames);
console.log('DATA', JSON.stringify(allCountries));