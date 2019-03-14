export default (state = false, action) => {
    switch (action.type) {
        case 'OPEN_LIST':
            return true;
        case 'CLOSE_LIST':
            return false;
        default:
            return state;
    }
}