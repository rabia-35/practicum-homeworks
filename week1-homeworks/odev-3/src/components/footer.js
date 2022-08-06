import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

   
function Footer() {
  return (
    <div className='text-center bg-dark'>
        <a href='https://github.com/rabia-35/html-odev-3' target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub} className="fa-2x " />
        </a>  
        <h6 className='text-light'> Created by Rabia ÖLKER</h6>
    </div>
  )
}

export default Footer