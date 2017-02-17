import React from 'react';
import {Link} from '../routes'

export default({ event}) => {
  return (
    <li>
      <Link route='event' params={{slug: event.id}}>
        <a>
          <img src="http://placehold.it/256x176"/>
          <div>{event.title}</div>
        </a>
      </Link>
      <style jsx>{`
        li {
          list-style-type: none;
          display: inline-block;
          margin: 10px;
        }
      `}</style>
    </li>
  );
}
