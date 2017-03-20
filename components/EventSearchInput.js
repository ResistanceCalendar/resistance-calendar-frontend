import React from 'react';

const InputWrapper = (props) => {
  return (
    <div className='input-search-wrapper'>
      { props.children }
      <style jsx>
        {`
          .input-search-wrapper {
            display: inline-block;
            width: 60%;
          }
        `}
      </style>
    </div>
  );
};

const EventSearchInput = (props) => {
  return (
    <InputWrapper>
      <input
        value={props.filterInput}
        onInput={e => props.updateFilters({ searchText: e.target.value })}
        placeholder='Search' />
      <style jsx>{``}</style>
    </InputWrapper>
  );
};

export default EventSearchInput;
