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
          --main-medium-gray: #6B6A73;
          --main-light-gray: #D2D3DC;
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


      `}
    </style>
  );
};

export default GlobalStyle;
