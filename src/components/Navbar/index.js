import React, { useState } from 'react'
import {NavLink } from 'react-router-dom'
import {ContainerNavbar} from './styles';
import {IoIosArrowForward} from 'react-icons/io';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState('');
  const handleOpenNavBar = () => {
    if(isOpen === 'open'){
      setIsOpen('')
    }else{
      setIsOpen('open')
    }
  }
  return (
    <>
      <ContainerNavbar className={isOpen}>
      <span className='btn-hanburguer'onClick={handleOpenNavBar} >
        <IoIosArrowForward />
      </span>
       <ul className="nav-ul">
          <li>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorite-movies">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

      </ContainerNavbar>
    </>
  )
}
