import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const UpdateButton = styled.input`
`
const TextBox = styled.textarea`
    flex: 1;
    margin: 5px;
    resize: none;
`;

const TextEditor = ({onSubmitUpdateForm}) => {
    return(
        <FormContainer
            className="update-form"
            onSubmit={onSubmitUpdateForm}
        >
            <TextBox 
                name="update"
                placeholder="Enter information about new update"
                required
            />
            <UpdateButton
                type="submit"
                value="Add Update"
            />
        </FormContainer>
    )
}
export default TextEditor;