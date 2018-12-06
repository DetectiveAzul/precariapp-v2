import React from 'react';
//Component
import TicketListHeader from './TicketListHeader';
import TicketElement from './TicketElement';

const TicketList = ({ tickets }) => {
  const renderTicketElement = tickets => {
    return tickets.map((ticket, index) => {
      const odd = index % 2 === 0;
      return (
        <TicketElement
          key={index}
          odd={odd}
          reference={ticket.reference}
          opened={ticket.opened}
          solicitor={ticket.solicitor}
          subject={ticket.subject}
          category={ticket.category}
          assigned={ticket.assigned}
          lastUpdate={ticket.lastUpdate}
        />
      );
    });
  };
  return (
    <div>
      <TicketListHeader />
      {renderTicketElement(tickets)}
    </div>
  );
};

export default TicketList;
