import React from 'react';
import styled from 'styled-components';

const TextBox = styled.textarea`
    width: 100%;
    resize: none;
`;

const TextEditor = () => {
    return(
        <TextBox 
            name="tiket-new-update"
            placeholder="Enter information about new update"
            required
        />
    )
}
export default TextEditor;