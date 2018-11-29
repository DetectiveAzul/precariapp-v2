import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';

const SuperCardDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: overflow;
`
const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const PrecariaLogo = styled.img`

`

const PrecariaHeader = styled.h1`
`

const FieldLabel = styled.label`
    font-size: 20px;
    width: 95%;
    margin-bottom: 5px;
`

const UserField = styled.input`
    width: 95%;
    margin-bottom: 10px;
    font-size: 20px;
`;
const PasswordField = styled.input`
    width: 95%;
    margin-bottom: 10px;
    font-size: 20px;
`;
const LogInButton = styled.input`
    width: 30%;
    font-size: 20px;
`

export const LoginForm = ({userLogIn}) => {
    return(
        <SuperCardDiv className="full-body-container">
            <PrecariaLogo 
                src={logo}
            />
            <FormDiv className="login-form" onSubmit={userLogIn}>
                <PrecariaHeader className="form-header">PrecariApp</PrecariaHeader>
                <FieldLabel className="user-label">Email</FieldLabel>
                <UserField 
                    type="email"
                    className="user-field" 
                    placeholder="e.g., youremail@domain.co.uk"
                />
                <FieldLabel className="password-label">Password</FieldLabel>
                <PasswordField 
                    type="password"
                    className="password-field"
                    placeholder="e.g., ************"
                />
                <LogInButton 
                    type="submit"
                    className="login-button"
                    value="Log In"
                />
            </FormDiv>
        </SuperCardDiv>
    )
}

