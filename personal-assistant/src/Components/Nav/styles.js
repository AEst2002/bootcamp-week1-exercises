import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.div`
    background-color: #333333;
    color: skyblue;
    display: flex;
    padding: 10px;
`
export const StyledLink = styled(Link)`
    margin: 10px;
    text-decoration: none;

    &:visited {
        color: skyblue;
    }

    &:hover {
        color: white;
    }
`

export const DisplayText = styled.div`
    margin: 10px;
`