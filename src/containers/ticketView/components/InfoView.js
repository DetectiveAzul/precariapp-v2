import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
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

let TextField = styled.input`
    margin: 5px;
    flex: 1;
`

TextField = styled(TextField)`
  background-color: ${props => props.readOnly ? 'lightgrey': 'white' }
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


const InfoView = ({ticket, onSubmitInfoForm}) => {
    return(
        <FormContainer onSubmit={onSubmitInfoForm} className="ticket-info-container">
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
                <Selection name="status">
                    <OptionField className="ticket-status-cell" value={ticket.status}>{ticket.status}</OptionField>
                </Selection>

                <Label>Solicitor:</Label>
                <TextField className="solicitor-cell" name="solicitor" defaultValue={ticket.solicitor} />

                <Label>Assigned to:</Label>
                <Selection name="assigned">
                    <OptionField className="assigned-cell" value={ticket.assigned}>{ticket.assigned}</OptionField>
                </Selection>
            </Row>

            <Row className="info-row">
                <Label>Subject:</Label>
                <TextField className="subject-cell" name="subject" defaultValue={ticket.subject} />

                <Label>Category:</Label>
                <Selection name="category">
                    <OptionField className="ticket-category-cell" value={ticket.category}>{ticket.category}</OptionField>
                </Selection>
            </Row>
            <LastRow className="info-row">
                <UpdateButton type="submit" value="Update information"/>
            </LastRow>
        </FormContainer>
    )
}

export default InfoView;
