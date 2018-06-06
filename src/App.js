import React from 'react'
import ReactDOM from 'react-dom'
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
      </div>
    )
  }
}

const rootNode = document.getElementById('app-root')
ReactDOM.render(<App />, rootNode)
