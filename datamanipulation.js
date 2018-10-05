const d3 = require('d3-dsv'),
    fs = require('fs'),
    data = fs.readFileSync('./countries.csv', 'utf8'); //this is just a string
var rowData = d3.csvParse(data); //rowData is now an Array

var allCountries = rowData.reduce((countries, place) => {
        var countryIndex = countries.findIndex((countriesPlace) => {
            return countriesPlace.name === place.Country;
        });
        //if the country does not exist, make it
        if (countryIndex === -1) {
            countries.push({
                name: place.Country,
                states: []
            });
            //grab the most recent one on the list
            countryIndex = countries.length - 1;
        }
        var currentCountry = countries[countryIndex],
            stateIndex = currentCountry.states.findIndex((countriesState) => {
                return countriesState.name === place.State;
            });
        // state does not exist, make it
        if (stateIndex === -1) {
            // match objects to their respective country
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
        // city does not exist, make it
        if (cityIndex === -1) {
            currentState.cities.push({
                name: place.City,
                population: place.Population
            });
            cityIndex = currentCountry.states.length - 1;
        }
        return countries;
    },
    []);
console.log('DATA', allCountries);