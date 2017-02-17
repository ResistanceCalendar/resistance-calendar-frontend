import React, {Component} from 'react'

export default class Counter extends Component {
  render() {
    //TODO remove iframe and implement this counts prop
    return (
      <div>
        <iframe src="https://dev.resistancecalendar.org/cal2.php" frameBorder="0"style={{marginTop: '10px'}} width="100%" height="80" scrolling="no"></iframe>
      </div>
    )
  }
}

