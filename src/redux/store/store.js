import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { push } from "react-router-redux";

export function getItemPath(items) {
  const params = new URLSearchParams();
  items.forEach((item) => params.append("item", item));
  return params.toString();
}
const middleware = (store) => (next) => (action) => {
  if (action.type === "ADD_ITEM") {
    const state = store.getState();
    store.dispatch(
      push(
        `${state.router.location.pathname}?${getItemPath([
          ...state.items,
          action.data,
        ])}`
      )
    );
  }
  next(action);
};

let middlewares = [thunk, middleware];
const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configureStore;
