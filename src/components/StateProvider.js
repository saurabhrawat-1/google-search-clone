import React, { createContext, useReducer } from "react";

//preparing the data layer
const StateContext = createContext();

const { Provider } = StateContext;

const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateContext, StateProvider };
