import React, { useState } from 'react'
import './NewBlog.css'
import Axios from 'axios'
import Nav from '../Nav'
import { connect } from 'react-redux'
import * as Actions from '../../Global/Actions'
const NewBlog=(props)=>{
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [mark,setMark]=useState("")
    const clear=()=>{
        setTitle("")
            setImage("")
            setMark("")
    }
    const save=async()=>{
        if(title!=="" && image !== "" && mark !== ""){ 
        let data={
            name:title,
            desc:mark,
            img:image
        }
        let res=await Axios.post("http://localhost:3001/new",data)
        if(res.status===200){
            alert("saved")
            props.getBlogs()
            props.history.push('/')
            setTitle("")
            setImage("")
            setMark("")
        }
        else{
            alert("error")
        }
    }else{
        alert("Fill all the details.")
    }
    }
    return(<div>
        <Nav></Nav>
        <div style={{margin:"80px 100px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h1>New Blog</h1>
                <div style={{width:250,display:"flex",justifyContent:"space-between"}}>
                    <button onClick={save} className="buttonSave">SAVE</button>
                    <button onClick={clear} className="buttonClear">CLEAR</button>
                    </div>
                </div>
            <label className="labelWidth">Image URL</label>
            <input value={image} type="text" onChange={(eve)=>{setImage(eve.target.value)}}></input>
            <br></br>
            <br></br>
            <label className="labelWidth">Title</label>
            <input value={title} type="text" onChange={(eve)=>{setTitle(eve.target.value)}}></input>
            <br></br>
            <br></br>
            <label className="labelWidth">Content(Markdown)</label>
            <textarea value={mark} onChange={(eve)=>{setMark(eve.target.value)}} style={{width:"100%",height:500}}></textarea>
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
export default connect(mapStateToProps, mapActionsToProps)(NewBlog)