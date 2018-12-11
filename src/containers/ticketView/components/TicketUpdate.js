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

const Date = styled.div`
    font-style: italic;
    flex: 0.5;
    padding: 1px;
`

const Text = styled.div`
    flex: 1.5;
    padding: 1px;
`

const Separator = styled.hr`
`

const TicketUpdate = ({odd, update}) => {
    return(
        <UpdateContainer 
        className="ticket-update"
        odd={odd}
    >
        <Date className="date-div">{update.date}</Date>
        <Separator className="date-text-break" />
        <Text className="text-div">{update.text} </Text>
    </UpdateContainer>
    )
}

export default TicketUpdate;