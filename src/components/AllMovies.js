import React from 'react'
import {movies} from '../fakeDB'
import Button from 'react-bootstrap/Button'
import {Movie} from './movie'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

// import {Card, Button} from 'react-'
// 
// <div class="card-group mb-3">
// <div class="card mb-3">
//     <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" alt="Card image cap"/>
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
// </div>
// </div>
// <div class="card-group mb-3">
// <div class="card mb-3">
//     <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" alt="Card image cap"/>
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//     </div>
// </div>
// </div>


// <div className="card bg-secondary w-100 ">
// <img className=".card-img-overlay img-fluid w-50 mh-25"  src="https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg" alt="Card image"/>
// </div> 
// <div d-inline>
// <div className="card-img">
// <h5 className="card-title w-75">Card title</h5>
// <p className="card-text w-75">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// <p className="card-text w-75">Last updated 3 mins ago</p>
// </div> 
//   </div>
//   </div>

export const AllMovies = (props) => {
    
    
    return (
        <div>
{movies.lenth!=0?(movies.map((movie)=>{
// console.log(movie.name)
    return <Movie movieName={movie.name}></Movie>
})  ):            
(<span>No movies</span>)
}    

</div>



       
    )
}


