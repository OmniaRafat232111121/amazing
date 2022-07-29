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
     <NavIcon src="/src/images/logo.svg" alt="" />
						esignify
            <NavIcon/>
     </NavLogo>
    </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    <h1>Hello</h1>
  )
}

export default Navbar