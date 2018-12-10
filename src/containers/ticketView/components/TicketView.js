import React from 'react';
import styled from 'styled-components';
//Components
import TextEditor from './TextEditor';

//Styles
const ViewContainer = styled.div`
    ${'' /* height: 90vh; */}
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 0.5;
    margin: 5px;
    background-color: rgb(255,250,250, 0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
`;

const CurrentStatusContainer = styled.div`
    flex: 1.5;
    display: flex;
    flex-wrap: wrap-reverse;
    min-width: 550px;
`;

const TextEditorContainer = styled.div`
    flex: 1;
    min-width: 275px;
    margin: 5px;
    padding: 10px;
    display: flex;
    background-color: rgb(255,250,250, 0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
`;

const UpdatesContainer = styled.div`
    flex: 1;
    min-width: 275px;
    margin: 5px;
    background-color: rgb(255,250,250, 0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    overflow: scroll;
`;

const TicketView = ({ticket}) => {
    return(
        <ViewContainer className="ticket-view-container">
            <InfoContainer className="ticket-info-container">
                Info
            </InfoContainer>
            <CurrentStatusContainer className="ticket-current-status-container">
                <TextEditorContainer className="ticket-text-editor-container">
                    <TextEditor />
                </TextEditorContainer>
                <UpdatesContainer className="ticket-updates-container">

                </UpdatesContainer>
            </CurrentStatusContainer>
        </ViewContainer>
    )
}

export default TicketView;