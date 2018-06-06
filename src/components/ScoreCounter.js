import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class ScoreCounter extends React.Component {
  render() {
    const { score } = this.props

    return (
      <div>
        <span className="score-counter">
          {score.point.toLocaleString()} points
        </span>
      </div>
    )
  }
}
