import React from 'react'
import { Redirect } from 'react-router'

const PrivateRoute=({component:Component,...rest})=>
{
    if(localStorage.getItem("token")!==undefined && localStorage.getItem("token")!=="" && localStorage.getItem("token")){
        return(<Component></Component>)
    }
    else{
        return(<Redirect to="/"></Redirect>)
    }
    
}


export default PrivateRoute