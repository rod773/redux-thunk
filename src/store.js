import { legacy_createStore, applyMiddleware } from "redux";
import { notesReducer } from "./notesReducer";
import { thunk } from "redux-thunk";

export const store = legacy_createStore(notesReducer, applyMiddleware(thunk));
