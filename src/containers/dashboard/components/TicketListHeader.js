import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
    background-color: #f1f1f1;
    padding: 10px 5px;
    margin: 10px 5px;
    font-size: 15px;
`

const SmallCell = styled.div`
    flex: 1;
    text-align: center;
`

const MediumCell = styled.div`
    flex: 1.5;
    text-align: center; 
`

const TicketListHeader = () => {
    return (
        <Row className="header-row">
            <SmallCell className="reference-header">Reference</SmallCell>
            <SmallCell className="date-last-header">Last Update</SmallCell>
            <SmallCell className="ticket-status-header">Status</SmallCell>
            <MediumCell className="solicitor-header">Solicitor</MediumCell>
            <MediumCell className="subject-header">Subject</MediumCell>
            <MediumCell className="category-header">Category</MediumCell>
            <MediumCell className="assigned-header">Assigned</MediumCell>
            <SmallCell className="date-opened-header">Opened</SmallCell>
        </Row>
    )
}

export default TicketListHeader;