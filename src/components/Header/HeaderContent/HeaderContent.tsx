import React from 'react';
import './HeaderContent.css';
import ContentDescription, { ContentDescriptionItem } from './ContentDescription/ContentDescription';
import ContentButton, { ContentButtonItem } from './ContentButton/ContentButton';

interface HeaderContentProps {
    description: ContentDescriptionItem;
    button?: ContentButtonItem;
}

function HeaderContent({ description, button }: HeaderContentProps) {
    return (
        <div className='flex flex-col gap-5 mb-40 text-center'>
            <ContentDescription
                firstParagraph={description.firstParagraph}
                secondParagraph={description.secondParagraph}
                thirdParagraph={description.thirdParagraph}
            />

            {button && (
                <ContentButton
                    buttonBgColor={button.buttonBgColor}
                    buttonContentColor={button.buttonContentColor}
                    buttonContent={button.buttonContent}
                />
            )}
        </div>
    );
}

export default HeaderContent;
