import { observable, action } from 'mobx'

import Timer from './Timer'
import Score from './Score'
import { STATUS } from '../constants'

export default class Game {
  @observable status = STATUS.INITIAL

  constructor() {
    this.timer = new Timer(this.timeup)
    this.score = new Score()
  }

  @action.bound
  start = () => {
    this.timer.start()
    this.status = STATUS.PLAYING
  }

  @action.bound
  stop = () => {
    this.timer.stop()
    this.status = STATUS.PAUSED
  }

  restart = () => {
    this.reset()
    this.start()
  }

  @action.bound
  reset = () => {
    this.timer = new Timer(this.timeup)
    this.score = new Score()
    this.status = STATUS.INITIAL
  }

  @action.bound
  timeup = () => {
    this.status = STATUS.OVER
  }
}
