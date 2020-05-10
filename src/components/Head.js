import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
export const Head = (props) => {
    return (   
      <div>
      <Nav className="bg-dark" variant="pills"  defaultActiveKey={""+props.location.pathname}>
        <Nav.Item >
          <Nav.Link className="bg-dark" as={Link} to="/" 
          eventKey="/">          
          Homepage          
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="bg-dark" as={Link} to="/allMovies" 
          eventKey="/allMovies">
          ALL movies</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="bg-dark" as={Link} to="/filter" eventKey="/filter" >
         Search
       </Nav.Link>
        </Nav.Item>
      </Nav>




          </div>
    )
}

