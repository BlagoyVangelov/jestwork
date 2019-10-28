import { combineReducers } from 'redux';

import paintingsCategoriesList from './paintingsCategoriesList';
import furnituresList from './furnituresList';
import inputDefault from './inputDefault'

const rootReducer = combineReducers({
    paintingsCategoriesList,
    furnituresList,
    inputDefault
});

export default rootReducer;
