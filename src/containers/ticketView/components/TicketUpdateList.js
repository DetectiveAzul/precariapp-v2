import React from 'react';
import styled from 'styled-components';
//Components
import TicketUpdate from './TicketUpdate';


const UpdatesContainer = styled.div`
    flex: 1;
    min-width: 275px;
    margin: 5px;
    background-color: rgb(255,250,250, 0.75);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    overflow: scroll;
`;


const TicketUpdateList = ({ticketUpdates}) => {
    const ticketUpdateList = ticketUpdates.map((ticketUpdate, index) => {
        const odd = index % 2 === 0;
        return(
            <TicketUpdate 
                key={index}
                odd={odd}
                update={ticketUpdate}
            />
        )
    });
    return(
        <UpdatesContainer className="ticket-update-list">
            { ticketUpdateList.reverse() }
        </UpdatesContainer>
    );
}

export default TicketUpdateList;