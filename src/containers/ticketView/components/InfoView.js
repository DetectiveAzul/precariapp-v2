import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.form`
    margin: 5px;
    background-color: rgb(255,250,250, 0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    padding: 10px;
    min-width: 600px;
    flex-wrap: wrap;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row; 
    justify-items: flex-start;
    flex: 1;
    min-width: 600px;
`

const LastRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
    min-width: 600px;
`

const Label = styled.label`
    margin: 5px;
`

const TextField = styled.input`
    margin: 5px;
    flex: 1;
`

const Selection = styled.select`
    margin: 5px;
    flex: 1;
`

const OptionField = styled.option`
`

const UpdateButton = styled.input`
    margin: 5px;
`


const InfoView = ({ticket}) => {
    return(
        <InfoContainer className="ticket-info-container">
            <Row className="info-row">
                <Label>Reference</Label>
                <TextField className="reference-cell" readOnly value={ticket.reference} />
                <Label>Opened on:</Label>
                <TextField className="date-opened-cell" readOnly value={ticket.opened} />
                <Label>Last update on:</Label>
                <TextField className="date-last-cell" readOnly value={ticket.lastUpdate} />
            </Row>

            <Row className="info-row">
                <Label>Status:</Label>
                <Selection>
                    <OptionField className="ticket-status-cell">{ticket.status}</OptionField>
                </Selection>

                <Label>Solicitor:</Label>
                <TextField className="solicitor-cell" defaultValue={ticket.solicitor} />

                <Label>Assigned to:</Label>
                <Selection>
                    <OptionField className="assigned-cell">{ticket.assigned}</OptionField>
                </Selection>
            </Row>

            <Row className="info-row">
                <Label>Subject:</Label>
                <TextField className="subject-cell" defaultValue={ticket.subject} />

                <Label>Category:</Label>
                <Selection>
                    <OptionField className="ticket-category-cell">{ticket.category}</OptionField>
                </Selection>
            </Row>
            <LastRow className="info-row">
                <UpdateButton type="submit" value="Update information"/>
            </LastRow>
        </InfoContainer>
    )
}

export default InfoView;
