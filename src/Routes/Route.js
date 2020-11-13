import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Components/Home'
import NewBlog from '../Components/NewBlog'
import ViewBlog from '../Components/ViewBlog'
const Routes=(props)=>{
    return(
        <Switch>
            <Route path="/new" component={NewBlog}></Route>
            <Route path="/blog/:id" component={ViewBlog}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>
    )
}

export default Routes
