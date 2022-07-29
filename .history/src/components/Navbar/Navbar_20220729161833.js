import React,{useState} from 'react'
import { IconContext } from 'react-icons';
import { CgMenuRight } from 'react-icons/cg';
const Navbar = () => {
  const [show,setShow]=useState(false);
  return (
    <IconContext.Provider>
    <Nav>
    <NavbarContain
    </Nav>
    </IconContext.Provider>
  )
}

export default Navbar