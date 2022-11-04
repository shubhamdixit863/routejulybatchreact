import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      
     

        <div style={{backgroundColor:"pink",height:"200px" ,textAlign:"center"}}>
          <h1>About Us Sections</h1>

        </div>

        <Outlet/>
    
     
    


    </div>
  )
}

export default About