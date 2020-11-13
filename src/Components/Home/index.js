import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import * as Actions from '../../Global/Actions'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import NewBlog from '../NewBlog'
const Home = (props) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        props.getBlogs()
    }, [])
    useEffect(() => {
        setBlogs([...props.blogs])
    }, [props.blogs])
    console.log(localStorage.getItem("token"),localStorage.getItem("uid"),localStorage.getItem("uemail"))
    return (
        <div>
            <Nav></Nav>
        <div style={{margin:"80px 100px 0px"}}>
            <h1 style={{textAlign:"center",color:"#f05454"}}>Welcome Home Reds!</h1>
            <div style={{display:"flex",flexDirection:"column"}}>
                {blogs.map((ele)=>{
                    return(
                        <div style={{width:"100%",marginBottom:20}}>
                            <img src={ele.img} style={{width:"100%",height:700}}></img>
                    <p style={{fontStyle:"italic"}}>Uploaded On:{new Date(ele.date).toDateString()}</p>
                    <h2>{ele.name}<Link style={{marginLeft:10,fontSize:25,color:"orange"}} to={`/blog/${ele.slug}`}>Read More</Link></h2>
                        </div>
                    )
                })}
            </div>
        </div>
        
        </div>)
}

const mapStateToProps = (state) => {
    return ({
        blogs: state.blogs
    })
}
const mapActionsToProps = (dispatch) => {
    return ({
        getBlogs: () => { dispatch(Actions.BlogsGet()) }
    })
}
export default connect(mapStateToProps, mapActionsToProps)(Home)