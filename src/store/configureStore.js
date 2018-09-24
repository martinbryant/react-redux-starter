import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";

const devMiddleware = composeWithDevTools(
  applyMiddleware(reduxImmutableStateInvariant())
);

const prodMiddleware = compose();

const middleware =
  process.env.NODE_ENV === "production" ? prodMiddleware : devMiddleware;

const reducer = (state, action) => state;

export default function configureStore(initialState) {
  return createStore(reducer, initialState, middleware);
}
