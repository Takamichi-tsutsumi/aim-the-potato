import { observable, computed, action } from 'mobx'
import { DEFAULT_TIME_LIMIT } from '../constants'

export default class Timer {
  @observable time = 0
  timeLimit = DEFAULT_TIME_LIMIT
  timer

  constructor(timeupCallback) {
    this.timeupCallback = timeupCallback
  }

  @computed
  get timeRemains() {
    return this.timeLimit - this.time
  }

  @action.bound
  countUp = () => {
    this.time += 1
  }

  start = () => {
    this.timer = setInterval(() => {
      this.countUp()
      if (this.timeRemains === 0) {
        this.timeup()
      }
    }, 1000)
  }

  stop = () => {
    clearInterval(this.timer)
  }

  resume = () => {
    this.timer = setInterval(this.countUp, 1000)
  }

  reset = () => {
    clearInterval(this.timer)
    this.time = 0
  }

  restart = () => {
    this.reset()
    this.start()
  }

  timeup = () => {
    clearInterval(this.timer)
    this.timeupCallback()
  }
}
