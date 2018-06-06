import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'

import Title from './components/Title'
import RootContainer from './components/RootContainer'
import GameState from './stores/Game'

class App extends React.Component {
  render() {
    const { game } = this.props

    return (
      <div>
        <Title />
        <RootContainer game={game} />
      </div>
    )
  }
}

const rootNode = document.getElementById('app-root')
const game = new GameState()
ReactDOM.render(<App game={game} />, rootNode)
