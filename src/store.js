import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feedback = (state = [], action) => {
    if (action.type === 'INPUT_FEEDBACK') {
        return [...state, action.payload];
    } else if (action.type === 'RESET') {
        return [];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
      feedback
    }),
    applyMiddleware(logger)
  );

  export default reduxStore;