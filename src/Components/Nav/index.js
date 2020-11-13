import React from 'react'
import './Nav.css'
import Logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
const Nav=(props)=>{

    return(
        <div className="NavStyle">
            <div style={{margin:"0 100px",height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Link to="/"><img style={{width:60,height:60}} src={Logo}></img></Link>
                <div>
                    <Link style={{color:"#30475e",textDecoration:"none",fontSize:20,fontWeight:700,marginLeft:20}} to="">Sign Up</Link>
                    <Link style={{color:"#30475e",textDecoration:"none",fontSize:20,fontWeight:700,marginLeft:20}} to="">Log In</Link>
                    <Link style={{color:"#30475e",textDecoration:"none",fontSize:20,fontWeight:700,marginLeft:20}} to="/new">New Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav