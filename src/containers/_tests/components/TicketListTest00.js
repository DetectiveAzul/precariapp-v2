import React from 'react';

export const TicketListTest00 = ({tickets}) => {
    const ticketsToRender = tickets.map((ticket, index) => {
        return <p key={index}>{ticket.customer}: {ticket.subject}</p>
    });

    return(
        <div className="ticket-list">
            {ticketsToRender}
        </div>
    );
}