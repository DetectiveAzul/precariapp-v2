import React from 'react';
//Component
import TicketElement from './TicketElement';

const TicketList = ({tickets}) => {
    const renderTicketElement = (tickets) => { 
        return tickets.map((ticket, index) => {
            return(
                <TicketElement 
                    key={index}
                    subject={ticket.subject}
                    assigned={ticket.assigned}
                    customer={ticket.customer}
                    reference={ticket.reference}
                 />
            )
        })
    }
    return(
        <div>
            <h2>Ticket List</h2>
            { renderTicketElement(tickets) }
        </div>
        

    )
};

export default TicketList;