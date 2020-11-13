import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Nav from '../Nav'
import * as Actions from '../../Global/Actions'
import { withRouter } from 'react-router'
import Axios from 'axios'

const UserPosts = (props) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        props.getBlogs()
    }, [])
    useEffect(() => {
        // props.blogs.sort(function(a, b){return a.date - b.date});
        setBlogs([...props.blogs.filter((ele) => {
            if (ele.useremail === localStorage.getItem("uemail")) {
                return ele
            }
        })])
    }, [props.blogs])
    return (
        <div>
            <Nav></Nav>
            <div style={{ margin: "80px 100px 0px" }}>
                <h1>Welcome {localStorage.getItem("uemail")}</h1>
                {blogs.length !== 0 ? <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <h3>Your blogs :</h3>
                    {blogs.map((ele) => {
                        return (
                            <div style={{ boxShadow: "0 0 10px orange", marginBottom: 30, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ width: "90%", wordBreak: "break-all", fontSize: 20 }}>{ele.name}</div>
                                <div style={{ flex: 1, display: "flex", justifyContent: "space-around" }}>
                                    <i onClick={() => {
                                        props.history.push("/edit", { data: ele })
                                    }} style={{ color: "green", fontSize: 20 ,cursor:"pointer"}} class="fa fa-pencil" aria-hidden="true"></i>
                                    <i onClick={async () => {
                                        try {
                                            let res = await Axios.post("http://localhost:3001/delete", { _id: ele._id }, { headers: { "x-auth-token": localStorage.getItem("token") } })
                                            if (res.status === 200) {
                                                alert("Deleted")
                                                props.getBlogs()
                                                props.history.push('/')
                                            } else {
                                                alert("Something went wrong")
                                            }
                                        }
                                        catch (err) {
                                            alert(err)
                                        }
                                    }} style={{ color: "red", fontSize: 20, cursor:"pointer"}} class="fa fa-trash" aria-hidden="true"></i>
                                </div>

                            </div>
                        )
                    })}

                </div> : <div>No blogs yet.</div>}
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
export default connect(mapStateToProps, mapActionsToProps)(withRouter(UserPosts))