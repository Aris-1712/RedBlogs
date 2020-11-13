import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Nav from '../Nav'
import { connect } from 'react-redux'
import * as Actions from '../../Global/Actions'
import { withRouter } from 'react-router'
const Edit=(props)=>{
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [mark,setMark]=useState("")
    const [_id,setId]=useState("")
    const clear=()=>{
        setTitle("")
            setImage("")
            setMark("")
    }
    useEffect(()=>{
        setTitle(props.location.state.data.name)
        setImage(props.location.state.data.img)
        setMark(props.location.state.data.desc)
        setId(props.location.state.data._id)
    },[])
    const save=async()=>{
        try{
        if(title!=="" && image !== "" && mark !== ""){ 
        let data={
            name:title,
            desc:mark,
            img:image,
            userid:localStorage.getItem("uid"),
            useremail:localStorage.getItem("uemail"),
            _id:_id
        }
        let res=await Axios.post("https://nameless-dusk-13618.herokuapp.com/edit",data,{headers:{"x-auth-token":localStorage.getItem("token")}})
        if(res.status===200){
            alert("updated")
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
}catch(err){
    alert(err)
}
    }
    return(<div>
        <Nav></Nav>
        <div style={{margin:"80px 100px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h1>Edit Blog</h1>
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
export default connect(mapStateToProps, mapActionsToProps)(withRouter(Edit))