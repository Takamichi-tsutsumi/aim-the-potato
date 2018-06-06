import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class TimeCounter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.timer.timeRemains} seconds left</span>
      </div>
    )
  }
}
