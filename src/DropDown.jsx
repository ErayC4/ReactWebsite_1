import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

//the button that gets changed into when clicked (needs id dropdown)
const ChangedButton = () => (
  <button id="dropdown">
    <svg
      className="w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
  </button>
);

const DropDown = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [originalButtonContent, setOriginalButtonContent] = useState('');

  useEffect(() => {
    const handleButtonClick = () => {
      setIsOpen(!isOpen);

      const buttonElement = document.getElementById('dropdown');
      if (buttonElement) {
        if (isOpen) {
          // Wenn der Button bereits geöffnet war, stelle den ursprünglichen Inhalt wieder her
          buttonElement.innerHTML = originalButtonContent;
        } else {
          // Speichere den aktuellen Inhalt des Buttons und setze den geänderten Inhalt
          setOriginalButtonContent(buttonElement.innerHTML);
          ReactDOM.render(<ChangedButton />, buttonElement);
        }
      }
    };

    const buttonElement = document.getElementById('dropdown');
    if (buttonElement) {
      buttonElement.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('click', handleButtonClick);
      }
    };
  }, [isOpen, originalButtonContent]);

  return (
    <div className={`transition-max-height ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      {content}
    </div>
  );
};

export default DropDown;
