import { MDBBtn, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit'
import React from 'react'


const NavSearch:React.FC=()=>{
    return(
        <MDBInputGroup>
        <MDBInput label='Search' />
        <MDBBtn onClick={() => console.log("sdsd")} rippleColor='dark' style={{background:'var(--our-blue)'}}>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>
    )
}

export default NavSearch