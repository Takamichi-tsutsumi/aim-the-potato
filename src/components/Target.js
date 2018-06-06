import React from 'react'
import potatoSrc from '../../assets/images/shogo.jpg'

const randomPosition = (maxWidth, maxHeight) => ({
  x: Math.random() * maxWidth - 15,
  y: Math.random() * maxHeight
})

export default class Target extends React.Component {
  state = {
    position: { x: 0, y: 0 },
    clicked: false
  }

  constructor() {
    super()
  }

  componentDidMount() {
    this.setState({
      position: randomPosition(window.innerWidth, window.innerHeight * 0.5)
    })
  }

  handleClick = () => {
    this.props.onClick()
    this.setState({ clicked: true })
    this.updatePosition()
  }

  updatePosition = () => {
    this.setState({
      position: randomPosition(window.innerWidth, window.innerHeight * 0.8),
      clicked: false
    })
  }

  render() {
    const { position, clicked } = this.state

    const style = {
      position: 'absolute',
      top: Math.floor(position.y),
      left: Math.floor(position.x),
      borderRadius: '15rem',
      display: 'block',
      width: '3.4rem',
      backgroundColor: clicked ? 'lime' : 'gray'
    }

    return <img src={potatoSrc} style={style} onClick={this.handleClick} />
  }
}
