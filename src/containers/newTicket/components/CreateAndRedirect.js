import React from 'react';
import { navigate } from '@reach/router';
//Helpers
import {
  dateGrabber,
  pad,
  referenceDateGrabber
} from '../../../helpers/ticketHelper';
import { getTodaysTickets, postTicket } from '../../../helpers/apiCalls';


const CreateAndRedirect = ({ token, transferToNewPage }) => {
  const newTicket = {
    reference: undefined,
    opened: undefined,
    lastUpdate: dateGrabber(),
    status: 'Open',
    solicitor: '',
    assigned: undefined,
    subject: '',
    category: undefined,
    updates: [
      {
        date: dateGrabber(),
        text: 'Ticket opened'
      }
    ]
  };

  getTodaysTickets(token).then(res => {
    const referenceNumber = res.data.length + 1;
    const referenceString = pad(referenceNumber, 6);
    newTicket.reference = `${referenceDateGrabber()}-${referenceString}`;
    newTicket.opened = res.date;
    postTicket(token, newTicket).then(() => {
      // transferToNewPage(newTicket);
      navigate(`/ticket/${newTicket.reference}`);
    });
  });

  return <h1>Loading</h1>;
};

export default CreateAndRedirect;
