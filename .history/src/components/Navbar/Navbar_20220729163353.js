import React from 'react'
import { IconContext } from 'react-icons';
// import { CgMenuRight } from 'react-icons/cg';
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
     <NavLogo to="/">
     <NavIcon src="" alt="" />
						esignify
            <NavIcon/>
     </NavLogo>
    </NavbarContainer>
    </Nav>
  
    </IconContext.Provider>
    
  )
}

export default Navbar