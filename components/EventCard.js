import React from 'react';
import {Link} from '../routes'

export default({ event}) => {
  return (
    <li>
      <Link route='event' params={{slug: event.id}}>
        <a>
          <img src={event.cover.source}/>
          <div className="title">{event.name}</div>
        </a>
      </Link>
      <style jsx>{`
        li {
          list-style-type: none;
          display: inline-block;
          margin: 10px;
        }
        .title {
          max-width: 200px;
        }
      `}</style>
    </li>
  );
}
