import React from 'react';
import ContactDescription, { ContactDescriptionItem } from '../ContactDescription/ContactDescription';

const contactDescriptionElements: ContactDescriptionItem = {
    ContactText: 'Get In Touch',

};


  
function ContactHeader() {
    return (
      <div className='flex flex-col gap-5 mb-40 text-center' style={{ marginTop: '180px' }}>
        <ContactDescription
            ContactText={contactDescriptionElements.ContactText}
        />
       </div>
    );
 } 

export default ContactHeader;