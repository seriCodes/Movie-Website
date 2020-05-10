import React from 'react'
import { rateReducer } from "../reducer/rateReducer";
export let RateContext= React.createContext()
let initialState= 0;



export const RateContextProvider = (props) => {
    const [rateState,rateDispatch]=React.useReducer(rateReducer,initialState)

    const valueProp = {rateState,rateDispatch}

    return (
        <RateContext.Provider value={valueProp}>
            {props.children}
        </RateContext.Provider>
    )
}
