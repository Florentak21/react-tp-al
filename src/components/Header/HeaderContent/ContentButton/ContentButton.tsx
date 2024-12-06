import React from 'react';
import './ContentButton.css';

export interface ContentButtonItem {
    buttonBgColor: string;
    buttonContentColor: string;
    buttonContent: string;
}

  function ContentButton({ buttonBgColor, buttonContentColor, buttonContent }: ContentButtonItem) {
    return (
      <div>
        <button
          style={{
            backgroundColor: buttonBgColor,
            color: buttonContentColor,
          }}
          className='p-5 w-1/5 rounded-sm font-libre text-[#F5F5F5] text-[15px] leading-[15px]'
        >
          {buttonContent}
        </button>
      </div>
    );
  }

  export default ContentButton;