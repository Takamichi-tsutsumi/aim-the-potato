import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class TimeCounter extends React.Component {
  render() {
    return (
      <div className="timer">
        <span className="timer-count">{this.props.timer.timeRemains}</span>
      </div>
    )
  }
}
