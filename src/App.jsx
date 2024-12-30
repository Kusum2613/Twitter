import React from 'react'
import Sidebar from './Sidebar'
import "./App.css"
import TweetBox from './TweetBox'
import Feed from "./Feed.jsx";


function App() {
  return (
   <div className="app">
    <Sidebar/>
    
    <Feed/>
   </div>
  )
}

export default App