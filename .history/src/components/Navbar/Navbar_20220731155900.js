import React from 'react'
import { IconContext } from 'react-icons';
 import { CgMenuRight } from 'react-icons/cg';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
} from './NavbarStyles';
const Navbar = () => {

  return (
    <IconContext.Provider>
    <Nav>
    <NavbarContainer>
     
  
    </NavbarContainer>
    </Nav>
  
    </IconContext.Provider>
    
  )
}

export default Navbar