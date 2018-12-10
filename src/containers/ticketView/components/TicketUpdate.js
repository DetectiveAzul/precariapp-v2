import React from 'react';
import styled from 'styled-components';

let UpdateContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
    margin: 5px;
`

UpdateContainer = styled(UpdateContainer)`
  background-color: ${props => props.odd ? 'rgba(204, 204, 204, 0.9)': 'rgba(153, 153, 153, 0.9)' }
`

const Date = styled.p`
    font-style: italic;
    flex: 0.5;
    padding: 1px;
`

const Text = styled.p`
    flex: 1.5;
    padding: 1px;
`

const TicketUpdate = ({odd, update}) => {
    return(
        <UpdateContainer 
        className="ticket-update"
        odd={odd}
    >
        <Date>{update.date}</Date>
        <Text>{update.text} </Text>
    </UpdateContainer>
    )
}

export default TicketUpdate;