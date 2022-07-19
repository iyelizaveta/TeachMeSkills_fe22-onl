// import rootReducer from '../my-rootreducer-dir';
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { allReducers, RootState } from "../store";
const rootReducer = combineReducers(allReducers);

export function renderWithRedux(
  ui: React.ReactNode,
  { initialState }: { initialState: Partial<RootState> },
  renderFn = render
) {
  const store = createStore(rootReducer, initialState);
  const obj = {
    ...renderFn(<Provider store={store}>{ui}</Provider>),
    store,
  };
  return obj;
}
