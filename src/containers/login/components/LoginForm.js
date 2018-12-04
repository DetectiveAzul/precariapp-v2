import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';
import background from './img/login-background.jpg';

//SuperCardDiv contains PrecariaLogo and FormDiv
const SuperCardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    font-family: Roboto;
`

const SubCardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(255,250,250, 0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    padding: 5px 15px;
`

const PrecariaLogo = styled.img`
    width: 300px;
    height: 300px;
`

//FormDiv contains Header, Label, User and Password Field and LogInButton
const FormDiv = styled.form`
    display: flex;
    flex: 0.5;
    min-width: 300px;
    flex-direction: column;
    margin-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-items: center;
`;

//Childs of FormDiv
const PrecariaHeader = styled.h1`
`

const FieldLabel = styled.label`
    font-size: 20px;
    width: 95%;
    margin-bottom: 5px;
`

const ErrorLabel = styled.label`
    font-size: 15px;
    font-style: italic;
    text-align: right;
    width: 95%;
    margin-bottom: 5px;
    color: red;
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
    width: 100px;
    font-size: 20px;
`

export const LoginForm = ({userLogIn, failed}) => {
    const checkIfError = () => {
        if (failed) return <ErrorLabel>User or Email not recognised</ErrorLabel>;
    }

    return(
        <SuperCardDiv className="full-body-container">
            <SubCardDiv>
                <PrecariaLogo 
                    src={logo}
                />
                <FormDiv className="login-form" onSubmit={userLogIn}>
                    <PrecariaHeader className="form-header">PrecariApp</PrecariaHeader>
                    <FieldLabel className="user-label">Email</FieldLabel>
                    <UserField 
                        required
                        type="email"
                        name="email"
                        className="user-field" 
                        placeholder="e.g., youremail@domain.co.uk"
                    />
                    <FieldLabel className="password-label">Password</FieldLabel>
                    { checkIfError() }
                    <PasswordField 
                        required
                        type="password"
                        name="password"
                        className="password-field"
                        placeholder="e.g., ************"
                    />
                    <LogInButton 
                        type="submit"
                        className="login-button"
                        value="Log In"
                    />
                </FormDiv>
            </SubCardDiv>
        </SuperCardDiv>
    )
}

