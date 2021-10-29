import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = composeWithDevTools(applyMiddleware(promise, thunk))
export const store = createStore(rootReducer, middleware)