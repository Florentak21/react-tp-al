import React from 'react';
import './ContentDescription.css';

export interface ContentDescriptionItem {
    firstParagraph?: string;
    secondParagraph?: string;
    thirdParagraph?: string;
}

function ContentDescription({ firstParagraph, secondParagraph, thirdParagraph }: ContentDescriptionItem) {
    return (
        <div className="flex flex-col gap-5 text-stone-100">
            {firstParagraph && <p className="text-9xl font-bold">{firstParagraph}</p>}
            {secondParagraph && <p className="text-9xl font-bold">{secondParagraph}</p>}
            {thirdParagraph && <p className="text-3xl italic">{thirdParagraph}</p>}
        </div>
    );
}

export default ContentDescription;
