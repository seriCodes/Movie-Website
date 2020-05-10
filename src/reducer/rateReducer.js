import {  movies} from "../fakeDB";

export const rateReducer = (state=movies.rate,action)=>{
let rating
    switch(action.type){
        case "rateUp":
            console.log(action.ratersAmountState)
            rating=state+5/action.ratersAmountState
             if(rating>5){
                return 5
             }
             return (Math.round(rating*100)/100) 
            case "rateDown":
                rating=state-5/action.ratersAmountState
                if(rating<=0){
                   return 0
                }
                return (Math.round(rating*100)/100) 
                default:
            return state;
    }
}