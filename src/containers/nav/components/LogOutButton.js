import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
`
const LogOutButton = ({onClick}) => {
    return(
        <ButtonElement
            onClick={onClick}
        >
            Log Out
        </ButtonElement>
    );
};

export default LogOutButton;