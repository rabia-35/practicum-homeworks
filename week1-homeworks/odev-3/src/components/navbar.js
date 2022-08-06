import React from 'react'
import {Button} from "react-bootstrap"

function Navbar() {
  return (
    <div className='navbar d-block text-center'>
        <h1>Neşe'nin Mutfağına Hoşgeldiniz!</h1><br/>
        <Button  variant="warning" >Daha Fazla Bilgi İçin</Button>
    </div>
  )
}

export default Navbar