import React from 'react'
import './Nav.css'
import Logo from '../../Assets/logo.png'
import { Link, withRouter } from 'react-router-dom'
const Nav = (props) => {

    return (
        <div className="NavStyle">
            <div className="navHolder">
                <Link to="/"><img style={{ width: 60, height: 60 }} src={Logo}></img></Link>
                <div>
                    <Link className="navLink" to="/signup">Sign Up</Link>
                    {localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" && localStorage.getItem("token") ? <Link onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }} className="navLink" to="">Sign Out</Link> :
                        <Link className="navLink" to="/signin">Sign In</Link>}
                    <span onClick={() => {
                        if (localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" && localStorage.getItem("token")) {
                            console.log(props)
                            props.history.push('/new')
                        } else {
                            props.history.push('/signin')
                        }
                    }} className="navLink" style={{cursor:"pointer"}} >New Blog</span>
                    {localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" && localStorage.getItem("token")?<i onClick={()=>{props.history.push("/user")}} class="fa fa-user" style={{ color: "#30475e", textDecoration: "none", fontSize: 20, fontWeight: 700, marginLeft: 20,cursor:"pointer" }} aria-hidden="true"></i>:null}

                </div>
            </div>
        </div>
    )
}

export default withRouter(Nav)