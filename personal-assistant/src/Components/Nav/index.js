import React from 'react'
import { NavBar, DisplayText, StyledLink } from './styles'

export const Nav = () => (
    <NavBar>
        <DisplayText>Personal Assistant:</DisplayText>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/todo'>To-Do List</StyledLink>
    </NavBar>
)

export default Nav;
