import React from 'react';
import {Link} from '../routes'

export default({ event}) => {
  return (
    <li>
      <Link route='event' params={{slug: event.slug}}>
        <a>
          <img src="https://placehold.it/256x176"/>
          <div className="title">{event.title}</div>
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
