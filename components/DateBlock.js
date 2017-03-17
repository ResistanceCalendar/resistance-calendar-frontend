import React, { PropTypes } from 'react';

const DateBlock = ({ date }) => {
  const [dayName, month, dayNum] = (new Date(date)).toDateString().split(' ');

  // First pass at styling this component
  return (
    <div className='container'>
      <span className='left'>{dayName}</span>
      <span className='right'>{month} {dayNum}</span>
      <style jsx>{`
        .container {
          display: inline-block;
          text-transform: uppercase;
          padding: 10px;
          text-align: center;
          box-sizing: border-box;
        }

        .left {
          padding: 5px;
          background-color: black;
          color: white;
          border: 3px solid black;
          border-radius: 6px 0 0 6px;
        }

        .right {
          padding: 5px;
          background-color: white;
          color: black;
          border: 3px solid black;
          border-radius: 0 6px 6px 0;
        }
      `}</style>
    </div>
  );
};

DateBlock.propTypes = {
  date: PropTypes.string.isRequired
};

export default DateBlock;
