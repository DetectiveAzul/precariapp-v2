import React from 'react';

const TicketElement = ({reference, assigned, customer, subject}) => {
    return(
        <p>Reference: {reference}, Customer: {customer}, Subject: {subject}, Assigned: {assigned}</p>
    )
}

export default TicketElement;