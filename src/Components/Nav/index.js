import React from 'react'
import './Nav.css'
import Logo from '../../Assets/logo.png'
import { Link, withRouter } from 'react-router-dom'
const Nav = (props) => {

    return (
        <div className="NavStyle">
            <div style={{ margin: "0 100px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Link to="/"><img style={{ width: 60, height: 60 }} src={Logo}></img></Link>
                <div>
                    <Link style={{ color: "#30475e", textDecoration: "none", fontSize: 20, fontWeight: 700, marginLeft: 20 }} to="/signup">Sign Up</Link>
                    {localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" && localStorage.getItem("token") ? <Link onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }} style={{ color: "#30475e", textDecoration: "none", fontSize: 20, fontWeight: 700, marginLeft: 20 }} to="">Sign Out</Link> :
                        <Link style={{ color: "#30475e", textDecoration: "none", fontSize: 20, fontWeight: 700, marginLeft: 20 }} to="/signin">Sign In</Link>}
                    <span onClick={() => {
                        if (localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" && localStorage.getItem("token")) {
                            console.log(props)
                            props.history.push('/new')
                        } else {
                            props.history.push('/signin')
                        }
                    }} style={{ color: "#30475e", textDecoration: "none", fontSize: 20, fontWeight: 700, marginLeft: 20, cursor: "pointer" }} >New Blog</span>
                    {localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "" && localStorage.getItem("token")?<i onClick={()=>{props.history.push("/user")}} class="fa fa-user" style={{ color: "#30475e", textDecoration: "none", fontSize: 20, fontWeight: 700, marginLeft: 20,cursor:"pointer" }} aria-hidden="true"></i>:null}

                </div>
            </div>
        </div>
    )
}

export default withRouter(Nav)