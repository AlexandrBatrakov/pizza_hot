import {combineReducers} from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';

// combineReducers - возьмет filtersReducer и pizzasReducer и превратит в rootReducer
const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;