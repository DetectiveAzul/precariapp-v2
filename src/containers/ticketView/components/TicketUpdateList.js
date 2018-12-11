import React from 'react';
//Components
import TicketUpdate from './TicketUpdate';

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
    return(ticketUpdateList.reverse());
}

export default TicketUpdateList;