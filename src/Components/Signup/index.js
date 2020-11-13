import React, { useState } from 'react'
import Logo from '../../Assets/logo.png'
import {validate} from 'email-validator'
import Axios from 'axios'
const Signup=(props)=>{
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [cpass,setCpass]=useState("")
    const signup=async()=>{
        if(validate(email) && pass===cpass && pass.length>=5){
            let data={
                email:email,
                password:pass
            }
            let res=await Axios.post("http://localhost:3001/signup",data)
            if(res.status===200){
                alert("Sign up successfull.")
                props.history.push("/")
            }else{
                alert("Something went wrong")
            }
        }   
        else{
            alert("Please provide the correct Email address, PAssword should have atleast 5 characters, Password and confirm password should match.")
        }
    }
    return(
        <div style={{width:"100%",height:window.innerHeight,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:500,height:550,background:"orange",display:"flex",flexDirection:"column",alignItems:"center "}}>
            <img src={Logo}></img>
            <h1 style={{color:"#222831"}}>Signup</h1>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{margin:"5px 15px",width:300,background:"#222831"}} placeholder={"Email Address"} type="text"></input>
            <input value={pass} onChange={(e)=>{setPass(e.target.value)}} style={{margin:"5px 15px",width:300,background:"#222831"}} placeholder={"Password"} type="password"></input>
            <input value={cpass} onChange={(e)=>{setCpass(e.target.value)}} style={{margin:"5px 15px",width:300,background:"#222831"}} placeholder={"Confirm Password"} type="password"></input>
            <button onClick={signup} style={{background:"#e61010",marginTop:10}} className="buttonSave">SIGNUP</button>
            </div>
        </div>
        
    )
}


export default Signup