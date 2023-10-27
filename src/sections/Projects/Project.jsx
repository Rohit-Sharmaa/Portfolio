import React from 'react'
import Allproject from './Allproject'
import "./project.css"

const Project = () => {
  return (
    <section id="project">
    <h2>Academic Projects</h2>
    <div className='container project__container'>
     <Allproject/>
    </div>
    </section>
  )
}

export default Project