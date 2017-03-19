import React from 'react';

const EventSearchInput = (props) => {
  return (
    <div>
      <input
        value={props.filterInput}
        onInput={e => props.updateFilters({ searchText: e.target.value })}
        placeholder='Search'
      />
      <style jsx>{``}</style>
    </div>
  );
};

export default EventSearchInput;
