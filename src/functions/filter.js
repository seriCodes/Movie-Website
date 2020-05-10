import {  movies} from "../fakeDB.js";

export default  function(name, year, gener){
    let result=movies;
  
    if(gener!="Any"){
        result=  result.filter((movie)=>{
           return movie.gener==gener
        })
    }
        if(year!="Any"){
            result=  result.filter((movie)=>{
               return movie.year==year
            })            
    }

    if(name!=""){
       name  = name.toLowerCase()
        result=  result.filter((movie)=>{
           return movie.name.toLowerCase().search(name)!=-1
        })            
}
    return result
}