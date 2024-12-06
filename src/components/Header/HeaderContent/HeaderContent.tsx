import React from 'react';
import './HeaderContent.css';
import ContentDescription, { ContentDescriptionItem } from './ContentDescription/ContentDescription';
import ContentButton, { ContentButtonItem } from './ContentButton/ContentButton';

const contentDescriptionElements: ContentDescriptionItem = {
    firstParagraph: ' Coming Home Never',
    secondParagraph: 'Felt So Good!',
    thirdParagraph: 'Quam a diamlorem explicabo quos fugit, ut aliquam modi.'
};

const contentButtonElements: ContentButtonItem = {
    buttonBgColor: '#E80037',
    buttonContentColor: '#F5F5F4',
    buttonContent: 'FIND YOUR STYLE'
};
  
function HeaderContent() {
    return (
      <div className='flex flex-col gap-5 mb-40 text-center'>
        <ContentDescription
            firstParagraph={contentDescriptionElements.firstParagraph}
            secondParagraph={contentDescriptionElements.secondParagraph}
            thirdParagraph={contentDescriptionElements.thirdParagraph}
        />

        <ContentButton
            buttonBgColor={contentButtonElements.buttonBgColor}
            buttonContentColor={contentButtonElements.buttonContentColor}
            buttonContent={contentButtonElements.buttonContent}
        />
      </div>
    );
}

export default HeaderContent;