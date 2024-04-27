import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feedbackInput = (state = [], action) => {
    if (action.type === 'INPUT_FEEDBACK') {
        return [...state, action.payload];
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
      feedbackInput
    }),
    applyMiddleware(logger)
  );

  export default reduxStore;