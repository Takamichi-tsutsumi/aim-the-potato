import React from 'react'
import { observer } from 'mobx-react'
import Target from './Target'
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
      <div style={containerStyle}>
        {game.status === STATUS.PLAYING && (
          <Target
            onClick={() => {
              this.getPoint(10)
            }}
          />
        )}
      </div>
    )
  }
}

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '50rem',
  backgroundColor: 'lightblue'
}
