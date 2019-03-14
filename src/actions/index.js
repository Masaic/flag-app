import {findContinents, findCountries} from'../apis/data';
import {SEARCH_CONTINENTS, SELECT_CONTINENT, CLOSE_LIST, OPEN_LIST, SELECT_COUNTRY, DELETE_COUNTRIES, DELETE_COUNTRY, CLEAR_CONTINENTS} from'./types';

export const searchContinents = (word) => {
    let list = findContinents(word);
    return {
        type: SEARCH_CONTINENTS,
        playload: list
    }
}

export const clearSearch = () => {
    return {
        type: CLEAR_CONTINENTS,
    }
}

export const selectContinent = (continent) => {
    let list = findCountries(continent);
    return {
        type: SELECT_CONTINENT,
        playload: list
    }
}

export const selectCountry = (country) => {
    return {
        type: SELECT_COUNTRY,
        playload: country
    }
}

export const deleteCountry = (country) => {
    return {
        type: DELETE_COUNTRY,
        playload: country
    }
}

export const deleteCountries = () => {
    return {
        type: DELETE_COUNTRIES
    }
}

export const openList = () => {
    return {
        type: OPEN_LIST
    }
}

export const closeList = () => {
    return {
        type: CLOSE_LIST
    }
}

