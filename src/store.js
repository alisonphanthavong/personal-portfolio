import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const reducer = combineReducers({
 //put reducers here
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), createLogger())
);

export default store;