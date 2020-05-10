import {  movies} from "../fakeDB";
export const ratersAmountReducer = (state=movies.ratersAmount,action)=>{
    switch(action.type){
        case "add1":
            return ++state           
            case "reduce1":
            return --state
            default:
            return state;
    }
}