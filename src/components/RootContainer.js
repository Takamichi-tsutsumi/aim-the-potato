import React from 'react'
import { observer } from 'mobx-react'

import GameScreen from './GameScreen'
import Navigation from './Navigation'
import TimeCounter from './TimeCounter'
import ScoreCounter from './ScoreCounter'

@observer
export default class MainScreen extends React.Component {
  render() {
    const { game } = this.props

    return (
      <div>
        <Navigation
          onStart={game.start}
          onStop={game.stop}
          onRestart={game.restart}
          status={game.status}
        />
        <TimeCounter timer={game.timer} />
        <ScoreCounter score={game.score} />
        <GameScreen game={game} />
      </div>
    )
  }
}
