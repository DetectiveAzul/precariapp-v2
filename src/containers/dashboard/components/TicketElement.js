import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

let Row = styled.div`
    display: flex;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
    padding: 7px 5px;
    margin: 0px 5px;
    font-size: 12px;

    &:hover {
        background-color: rgba(255,255,255, 1);
      }
`

Row = styled(Row)`
  background-color: ${props => props.odd ? 'rgba(204, 204, 204, 0.9)': 'rgba(153, 153, 153, 0.9)' }
`

const SmallCell = styled.div`
    flex: 1;
    text-align: center;
`

const MediumCell = styled.div`
    flex: 1.5;
    text-align: center; 
`

const TicketElement = ({odd, reference, opened, solicitor, subject, category, assigned, lastUpdate}) => {
    return(
        <Row 
            onClick={() => { navigate(`/ticket/${reference}`)}} 
            odd={odd} className="ticket-row"
        >
            <SmallCell className="reference-cell">{reference}</SmallCell>
            <SmallCell className="date-opened-cell">{opened}</SmallCell>
            <MediumCell className="solicitor-cell">{solicitor}</MediumCell>
            <MediumCell className="subject-cell">{subject}</MediumCell>
            <MediumCell className="category-cell">{category}</MediumCell>
            <MediumCell className="category-cell">{assigned}</MediumCell>
            <SmallCell className="date-last-cell">{lastUpdate}</SmallCell>
        </Row>
    )
}

export default TicketElement;