export default (state = [], action) => {
    switch (action.type) {
        case 'SELECT_COUNTRY':
            return [...state, action.playload];
        case 'DELETE_COUNTRY':
            return state.filter((e) => {
                return e !== action.playload;
            })
        case 'DELETE_COUNTRIES':
            return [];
        default:
            return state;
    }
}