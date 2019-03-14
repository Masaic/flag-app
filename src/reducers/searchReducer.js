export default (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_CONTINENTS':
            return action.playload;
        case 'CLEAR_CONTINENTS':
            return [];
        default:
            return state;
    }
}