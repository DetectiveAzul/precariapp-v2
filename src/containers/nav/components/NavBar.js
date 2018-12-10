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

const LinkContainer = styled.div`
`



const NavBar = ({userLoggingOut}) => {
    return(
        <NavContainer>
            <LinkContainer>
                <NavLink 
                        path="/"
                        name="Dashboard"
                    />
                    <NavLink
                        path="/ticket/new"
                        name="Add Ticket"
                    />
            </LinkContainer>
            <LogOutButton onClick={userLoggingOut} />
        </NavContainer>
    );
}

export default NavBar;
        
