import { observable, action } from 'mobx'

export default class Score {
  @observable point = 0

  @action.bound
  getPoint = point => {
    this.point += point
  }
}
