import React, {createContext,useContext,useReducer} from 'react';

//PREPARES THE DATA LAYER
export const StateContext = createContext();

// WRAP OUR APP AND PROVIDE THE DATA LAYER TO EVERY ELEMENT
export const StateProvider =({reducer,initialState,children})=>(

<StateContext.Provider value={useReducer(reducer,initialState)}>

{children}

</StateContext.Provider>

);

export const useStateValue =()=> useContext(StateContext);