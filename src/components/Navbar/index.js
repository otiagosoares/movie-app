import React from 'react'
import {NavLink } from 'react-router-dom'
import {ContainerNavbar} from './styles';

export default function index() {
  return (
    <>
      <ContainerNavbar>
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
