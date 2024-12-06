import React from 'react';
import './ContentDescription.css';

export interface ContentDescriptionItem {
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
  }
  
  function ContentDescription({ firstParagraph, secondParagraph, thirdParagraph }: ContentDescriptionItem) {
    return (
      <div className='flex flex-col gap-5 text-stone-100'>
        <p className='text-9xl font-bold'>{firstParagraph}</p>
        <p className='text-9xl font-bold'>{secondParagraph}</p>
        <p className='text-3xl italic'>{thirdParagraph}</p>
      </div>
    );
  }

  export default ContentDescription;