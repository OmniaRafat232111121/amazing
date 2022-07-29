import React,{useState} from 'react'
import { IconContext } from 'react-icons';
import { CgMenuRight } from 'react-icons/cg';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles';
const Navbar = () => {
  const [show,setShow]=useState(false);
  return (
    <IconContext.Provider>
    <Nav>
    <NavbarContainer>
     <NavLogo >

     </NavLogo>
    </NavbarContainer>
    </Nav>
    </IconContext.Provider>
  )
}

export default Navbar