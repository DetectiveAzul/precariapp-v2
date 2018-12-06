import React from 'react';
import styled from 'styled-components';
//Components
import NavLink from './NavLink';
import LogOutButton from './LogOutButton';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: rgba(255,255,255,0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
    padding: 15px 15px;
    margin: 0px 5px;
    font-size: 15px;
`



const NavBar = ({userLoggingOut}) => {
    return(
        <NavContainer>
            <NavLink 
                path="/"
                name="Dashboard"
            />
            <LogOutButton onClick={userLoggingOut} />
        </NavContainer>
    );
}

export default NavBar;
        
