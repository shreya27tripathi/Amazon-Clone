import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
//This is data-layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
//build a provider
export const useStateValue = () => useContext(StateContext);