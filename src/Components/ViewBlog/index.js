import { use } from 'marked'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Actions from '../../Global/Actions'
import ReactMarkdown from 'react-markdown'
import Nav from '../Nav'
import { FacebookIcon, FacebookShareButton, RedditIcon, RedditShareButton, RedditShareCount, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import './ViewBlog.css'
const ViewBlog = (props) => {
    const [blog, setBlog] = useState({})
    useEffect(() => {
        props.getBlogs()
    }, [])
    useEffect(() => {

        props.blogs.forEach(element => {
            if (element.slug === props.match.params.id) {
                setBlog(element)
            }
        });
    }, [props.blogs])
    console.log(props)
    return (
        <div>
            <Nav></Nav>
            <div style={{ margin: "80px 100px 0px" }}>
                <h2>{blog.name}</h2>
                <div style={{ width: "100%", marginBottom: 20 }}>
                    <img src={blog.img} style={{ width: "100%" }}></img>
                    <p style={{ fontStyle: "italic" }}>Uploaded On:{new Date(blog.date).toDateString()}</p>
                    <p style={{ fontStyle: "italic" }}>{blog.useremail}</p>
                    <div style={{ display: "flex", width: 200, justifyContent: "space-between" }}>
                        <RedditShareButton url={window.location.href} quote={blog.name}><RedditIcon size={32} round /></RedditShareButton>
                        <FacebookShareButton url={window.location.href} quote={blog.name}><FacebookIcon size={32} round /></FacebookShareButton>
                        <WhatsappShareButton url={window.location.href} quote={blog.name}><WhatsappIcon size={32} round /></WhatsappShareButton>
                        <TelegramShareButton url={window.location.href} quote={blog.name}><TelegramIcon size={32} round /></TelegramShareButton>
                    </div>
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