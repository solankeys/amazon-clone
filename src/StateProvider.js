//setup data layer
// we need this is to track the basket

import React, { createContext, useContext, useReducer } from 'react'

//This is the data layer
export const StateContext = createContext()

//builde a  provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//THIS IS HOW WE USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext)
