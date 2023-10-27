import React from 'react'
import data from './data';
import ProjectListing from './ProjectListing';

const Allproject = () => {
  return (
    <div className='allproject' >
      {
        data.map(project => (
          <ProjectListing key={project.id} project={project}/>
        ))
      }
    </div>
  )
}

export default Allproject