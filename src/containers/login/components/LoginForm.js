import React from 'react';
import styled from 'styled-components';

const UserField = styled.input`
`;
const PasswordField = styled.input`
`;
const LogInButton = styled.button`
`

export const LoginForm = ({userLogIn}) => {
    return(
        <div className="login-form">
            <UserField 
                className="user-field" 
                placeholder="Email address"
            />
            <PasswordField 
                className="password-field"
                placeholder="Password"
            />
            <LogInButton 
                className="login-button"
                onClick={userLogIn}
            >
                Log In
            </LogInButton>
        </div>
    )
}

