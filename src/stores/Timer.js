import { observable, computed } from 'mobx'
import { DEFAULT_TIME_LIMIT } from '../constants'

export default class Timer {
  @observable time = 0
  @observable timeLimit = DEFAULT_TIME_LIMIT
  @observable started = false
  timer

  @computed
  get timeRemains() {
    return this.timeLimit - this.time
  }

  countUp = () => {
    this.time += 1
  }

  start = () => {
    if (this.started) return

    this.timer = setInterval(this.countUp, 1000)

    this.started = true
  }

  stop = () => {
    clearInterval(this.timer)
    this.started = false
  }

  resume = () => {
    this.timer = setInterval(this.countUp, 1000)
  }

  reset = () => {
    clearInterval(this.timer)
    this.time = 0
    this.started = false
  }

  restart = () => {
    this.reset()
    this.start()
    this.started = true
  }
}
