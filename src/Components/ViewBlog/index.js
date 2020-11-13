import { use } from 'marked'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Actions from '../../Global/Actions'
import ReactMarkdown from 'react-markdown'
import Nav from '../Nav'
import './ViewBlog.css'
const ViewBlog = (props) => {
    const [blog, setBlog] = useState({})
    useEffect(() => {
        props.blogs.forEach(element => {
            if (element.slug === props.match.params.id) {
                setBlog(element)
            }
        });
    }, [props.blogs])
    console.log(blog)
    return (
        <div>
            <Nav></Nav>
            <div style={{margin:"80px 100px 0px"}}>
            <h2>{blog.name}</h2>
            <div style={{width:"100%",marginBottom:20}}>
                            <img src={blog.img} style={{width:"100%"}}></img>
                    <p style={{fontStyle:"italic"}}>Uploaded On:{new Date(blog.date).toDateString()}</p>
                    
                    <ReactMarkdown className="markdown">{blog.desc}</ReactMarkdown>
                        </div>
            </div>
        </div>
    )

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
export default connect(mapStateToProps, mapActionsToProps)(ViewBlog)