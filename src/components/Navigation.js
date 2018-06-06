import React from 'react'
import { observer } from 'mobx-react'

import { STATUS } from '../constants'

export default class Navigation extends React.PureComponent {
  render() {
    const { onStart, onStop, onRestart, status } = this.props

    switch (status) {
      case STATUS.INITIAL:
        return <button onClick={onStart}>START</button>
      case STATUS.PLAYING:
        return <button onClick={onStop}>STOP</button>
      case STATUS.PAUSED:
        return <button onClick={onStart}>RESUME</button>
      case STATUS.OVER:
        return <button onClick={onRestart}>START AGAIN</button>
      default:
        return <span>Something went wrong. Please refresh page.</span>
    }
  }
}
