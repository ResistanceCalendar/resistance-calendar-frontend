import React from 'react';

const GlobalStyle = () => {
  return (
    <style jsx global>
      {`
        :root {
          --max-width: 650px;
          --main-black: #0D0B13;
          --main-white: #ffffff;
          --main-pink: #f42966;
          --main-green: #23B09A;
          --main-dark-gray: #6B6A73;
          --main-medium-gray: #D2D3DC;
          --main-light-gray: #f0f0f5;
        }
        body {
          color: var(--main-black);
          max-width: var(--max-width);
          font-family: 'Roboto', sans-serif;
          font-size: 18px;
          font-weight: 500;
          margin: 0 auto;
          padding: 0;
        }
        input {
          border-radius: 5px;
          padding: 4px 0;
          border: 1px solid var(--main-medium-gray);
          background-color: var(--main-light-gray);
          font-size: 15px;
          line-height: 1;
          color: var(--main-dark-gray);
        }
        ::-webkit-input-placeholder {
           color: var(--main-dark-gray);
        }
      `}
    </style>
  );
};

export default GlobalStyle;
