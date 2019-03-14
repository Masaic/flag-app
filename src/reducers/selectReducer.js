export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_CONTINENT':
            return action.playload;
        default:
            return state;
    }
}