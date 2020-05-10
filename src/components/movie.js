import React, { useContext,useReducer} from 'react'
import {movies} from '../fakeDB'
import { RateContext } from "../context/rateContext";
import { RatesAmountContext } from "../context/RatersAmountContesxtProvider";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

export const Movie = (props) => {
    console.log(props)

    //path params will be checked
// console.log(props.match.params.name)

let movieNameToFetch;
if(props.match){
    movieNameToFetch=props.match.params.name.toLowerCase()
}else{
    movieNameToFetch=props.movieName.toLowerCase()
}

var movieRenderes;
console.log(movieNameToFetch)


for(var i=0; i< movies.length;i++){

    if(movies[i].name.toLowerCase()==movieNameToFetch){
        movieRenderes=movies[i]
        console.log(movieRenderes)
    }
}

// let movieDetails= Object.keys(movieRenderes)
const {rateState,rateDispatch}= useContext(RateContext)
const {ratersAmountState,ratersAmountDispatch}= useContext(RatesAmountContext)

let url=movieRenderes.imageLink



const rateUp=()=>{
    ratersAmountDispatch({type:"add1"})
    rateDispatch({type:"rateUp",
    ratersAmountState:ratersAmountState+1 })


}
const rateDown=()=>{
    ratersAmountDispatch({type:"add1"})
    rateDispatch({type:"rateDown",
                    ratersAmountState:ratersAmountState+1 })


}   

// </div>
//            <h3> </h3> 
//            <h3> </h3> 
           
//            <img src= {url} width="200vw" height='300vh' alt="fight Club"/>

//            <div className="row mx-0 mb-2 aw-grid">        
//             <div className="col-4">
//                 .cossl-4
//             </div>
//             <div className="col-8">
//                 .col-8
//             </div>


//         </div>
            

//         </div>





// <Row className="justify-content-md-center">
// <Card  style={{ width: '18rem' }}>
// <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" />
// <Card.Body>
//   <Card.Title>Card Title</Card.Title>
//   <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//   </Card.Text>
//   <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>
// </Row>
// <Row className="justify-content-md-center">

// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" />
// <Card.Body>
//   <Card.Title>Card Title</Card.Title>
//   <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//   </Card.Text>
//   <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>
// </Row>

// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" />
// <Card.Body>
//   <Card.Title>Card Title</Card.Title>
//   <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//   </Card.Text>
//   <Button variant="primary">Go somewhere</Button>
// </Card.Body>
// </Card>
    return (
        
        <div>

        <div className="container ">
        <Row className="justify-content-md-center">
        <Card  style={{ width: '35rem' ,
                        //  height: '20em'
                        backgroundColor: 'rgb(100, 50, 50)'
                        }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{movieRenderes.name}</Card.Title>
          <Card.Text>
          {movieRenderes.year}
          </Card.Text>
          <Card.Text>
          {movieRenderes.gener}
                    </Card.Text>
                    <button type="button" className="btn btn-success mb-2" onClick={rateUp}>rate up</button>
                    <button type="button" className="btn btn-danger mb-2" onClick={rateDown}>rate down</button>
                    <div className="text-center font-weight-bold" style={{ fontFamily: 'sans-serif' }}>
                    <div >{"rate is: "+rateState}</div>    
                <div>   {"ratersAmountState  is: "+ratersAmountState}</div>
                </div>
                </Card.Body>
      </Card>
      </Row>
      </div>
      </div>      
    )
}
