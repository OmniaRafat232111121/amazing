import React from 'react'
import { IconContext } from 'react-icons';
 import { CgMenuRight } from 'react-icons/cg';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
} from './NavbarStyles';
import {FaTimes} from 'react-icons/fa'
const Navbar = () => {
const[show,setShow]=useStte(0)
  return (
    <IconContext.Provider>
    <Nav>
    <NavbarContainer>
    <NavLogo to="/">
						<NavIcon src="./images/logo.svg" alt="" />
						esignify
					</NavLogo>
    </NavbarContainer>
    </Nav>
  
    </IconContext.Provider>
    
  )
}

export default Navbar