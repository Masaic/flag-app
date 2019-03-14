import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import searchReducer from './searchReducer';
import selcetReducer from './selectReducer';
import flagReducer from './flagReducer';
import toggleListReducer from'./toggleListReducer';

export default combineReducers({
    // form: formReducer,
    contienetsSearchList: searchReducer,
    selectedContienetCountries: selcetReducer,
    selectedFlags: flagReducer,
    toggleList: toggleListReducer
})