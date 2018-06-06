import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class ScoreCounter extends React.Component {
  render() {
    const { score } = this.props

    return (
      <div>
        <span>{score.point.toLocaleString()} scored!!</span>
      </div>
    )
  }
}
