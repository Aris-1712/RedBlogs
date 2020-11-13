import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Edit from '../Components/Edit'
import Home from '../Components/Home'
import NewBlog from '../Components/NewBlog'
import Signin from '../Components/Signin'
import Signup from '../Components/Signup'
import UserPosts from '../Components/UserPosts'
import ViewBlog from '../Components/ViewBlog'
import PrivateRoute from './PrivateRoute'
const Routes=(props)=>{
    return(
        <Switch>
            <PrivateRoute path="/new" component={NewBlog}></PrivateRoute>
            <PrivateRoute path="/user" component={UserPosts}></PrivateRoute>
            <PrivateRoute path="/edit" component={Edit}></PrivateRoute>
            <Route path="/blog/:id" component={ViewBlog}></Route>
            <Route path='/Signup' component={Signup}></Route>
            <Route path='/Signin' component={Signin}></Route>
            <Route path="/" component={Home}></Route>
        </Switch>
    )
}

export default Routes
