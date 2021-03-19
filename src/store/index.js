import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./counterReducer";
import createSagaMiddleware from "redux-saga";
import {usersWatcher} from "../saga/usersSaga"
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
})

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(usersWatcher)