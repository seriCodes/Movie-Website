import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Homepage} from '../components/homepage'
import {Movie} from '../components/movie'
import {FilterForm} from '../components/FilterForm'
import {AllMovies} from '../components/AllMovies'

import {Head} from '../components/Head'

//  
export const AppRouters = (props) => {
    return (
        
    <React.Fragment>



        <BrowserRouter>
        <Route path='/' component={Head} ></Route>      
        <Switch>
        <Route path='/' component={Homepage} exact={true}></Route>
        <Route path='/movie/:name' component={Movie}></Route>
        <Route path='/filter' component={FilterForm}></Route>
        <AllMovies path='/allMovies' component={AllMovies}></AllMovies>
        </Switch>
        </BrowserRouter>
        </React.Fragment>
    )
}
