import React from 'react'
import { ratersAmountReducer } from "../reducer/ratersAmountReducer";

var RatesAmountContext= React.createContext()
export {RatesAmountContext}
let initialState=0

export const RatersAmountContesxtProvider = (props) => {
    const[ratersAmountState,ratersAmountDispatch] =React.useReducer(ratersAmountReducer,initialState)
    const valueProp= {ratersAmountState,ratersAmountDispatch}
    return (
        <RatesAmountContext.Provider value={valueProp}>
        {props.children}
        </RatesAmountContext.Provider>
    )
}
