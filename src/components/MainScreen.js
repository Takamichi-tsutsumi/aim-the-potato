import React from 'react'
import { observer } from 'mobx-react'

import TimeCounter from './TimeCounter'
import ScoreCounter from './ScoreCounter'

@observer
export default class MainScreen extends React.Component {
  render() {
    const { game } = this.props

    return (
      <div>
        <p>{game.playing ? 'Now Playing' : 'Click start to play!'}</p>
        <TimeCounter timer={game.timer} />
        <ScoreCounter score={game.score} />
      </div>
    )
  }
}
