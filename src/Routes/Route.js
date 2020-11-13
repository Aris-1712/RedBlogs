import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../Components/Home'
import NewBlog from '../Components/NewBlog'
import Signin from '../Components/Signin'
import Signup from '../Components/Signup'
import ViewBlog from '../Components/ViewBlog'
const Routes=(props)=>{
    return(
        <Switch>
            <Route path="/new" component={NewBlog}></Route>
            <Route path="/blog/:id" component={ViewBlog}></Route>
            <Route path='/Signup' component={Signup}></Route>
            <Route path='/Signin' component={Signin}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>
    )
}

export default Routes
