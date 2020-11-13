import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import marked from 'marked'
import ReactMarkdown from 'react-markdown'
import NewBlog from './Components/NewBlog';
import Home from './Components/Home';
import Routes from './Routes/Route';

function App() {
  const [mark,setMark]=useState("")
  const [html,setHtml]=useState()
  const changeHandler=(eve)=>{
    setMark(eve.target.value)
    setHtml(marked(eve.target.value))
  }
  return (
//  <div>
//    <textarea onChange={changeHandler}></textarea>
//    <hr></hr><div style={{textAlign:"justify"}}>
//    <ReactMarkdown>{mark}</ReactMarkdown>
//    </div>
//  </div>
<Routes></Routes>
  );
}

export default App;
