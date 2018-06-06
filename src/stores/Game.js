import { observable } from 'mobx'

import Timer from './Timer'
import Score from './Score'

export default class Game {
  @observable playing = false

  constructor() {
    this.timer = new Timer()
    this.score = new Score()
  }

  start = () => {
    this.timer.start()
    this.playing = true
  }

  stop = () => {
    this.timer.stop()
    this.playing = false
  }

  reset = () => {
    this.timer = new Timer()
    this.score = new Score()
    this.playing = false
  }
}
