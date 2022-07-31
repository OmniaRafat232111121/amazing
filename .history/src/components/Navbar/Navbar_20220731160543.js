import React,{useState} from 'react'
import { IconContext } from 'react-icons';
 import { CgMenuRight } from 'react-icons/cg';
import {navbarData} from '../../data/NavbarData'
 import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
} from './NavbarStyles';
import {FaTimes} from 'react-icons/fa'
const Navbar = () => {
const[show,setShow]=useState(0);
const scrollTo=(id)=>{
  const element=document.getElementById(id);
  element.scrollIntoView({
    behavior:'smooth'
  })
}

  return (
    <IconContext.Provider>
    <Nav>
    <NavbarContainer>
    <NavLogo to="/">
						<NavIcon src="./images/logo.svg" alt="" />
						esignify
					</NavLogo>

      <MobileIcon onClick={()=>setShow(!show)}>
               {show ? <FaTimes/> :<CgMenuRight/>}
      </MobileIcon>

      <NavMenu show={show}>
      {navbarData.map()}
      </NavMenu>
    </NavbarContainer>
    </Nav>
  
    </IconContext.Provider>
    
  )
}

export default Navbar