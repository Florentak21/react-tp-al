import React from 'react';
import './ContactDescription.css';

export interface ContactDescriptionItem {
  ContactText: string;

  }
  
  function ContactDescription({ ContactText }: ContactDescriptionItem) {
    return (
      <div className='flex flex-col gap-5 text-stone-100'>
        <p className='text-9xl font-bold'>{ContactText}</p>
      </div>
    );
  }

  export default ContactDescription;