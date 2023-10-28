import React from 'react'
import Allproject from './Allproject'
import "./project.css"

const Project = ({theme}) => {
  return (
    <section id="project" className={`${theme}`}>
    <h2>Academic Projects</h2>
    <div className='container project__container'>
     <Allproject/>
    </div>
    </section>
  )
}

export default Project