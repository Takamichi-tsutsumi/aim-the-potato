import React from 'react'
import { observer } from 'mobx-react'
import { STATUS } from '../constants'

@observer
export default class GameScreen extends React.Component {
  getPoint = points => {
    const { game } = this.props
    if (game.status === STATUS.PLAYING) {
      game.score.getPoint(points)
    }
  }

  render() {
    const { game } = this.props

    return (
      <div>
        <button onClick={() => this.getPoint(10)}>Get 10 points</button>
      </div>
    )
  }
}
