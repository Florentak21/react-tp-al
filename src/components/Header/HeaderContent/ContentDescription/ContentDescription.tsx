import React from 'react';
import './ContentDescription.css';

export interface ContentDescriptionItem {
    firstParagraph?: string;
    secondParagraph?: string;
    thirdParagraph?: React.ReactNode;
}

function ContentDescription({ firstParagraph, secondParagraph, thirdParagraph }: ContentDescriptionItem) {
    return (
        <div className="flex flex-col gap-5 m-3 text-[#FFF]">
            {firstParagraph && <p className="text-[80px] leading-[112px] font-montserrat font-bold">{firstParagraph}</p>}
            {secondParagraph && <p className="text-[80px] leading-[112px] font-montserrat font-bold">{secondParagraph}</p>}
            {thirdParagraph && <p className="text-[22px] leading-[24px] font-libre italic">{thirdParagraph}</p>}
        </div>
    );
}

export default ContentDescription;
