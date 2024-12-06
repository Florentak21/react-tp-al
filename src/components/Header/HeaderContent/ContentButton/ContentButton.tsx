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
          className='p-3 w-1/5 rounded-sm text-2xl'
        >
          {buttonContent}
        </button>
      </div>
    );
  }

  export default ContentButton;