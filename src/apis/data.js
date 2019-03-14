
export function findContinents(words) {
    const json = require('./continents.json');
    const list = json.map((ele) => {
        return ele.continent;
    });
    if (!words) {
        return list;
    }
    return list.filter(word => word.includes(words)===true);
}

export function findCountries(continent) {
    const json = require('./continents.json');
    let detail = json.find((ele) => {
        return ele.continent === continent
    })
    return detail;
}