// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  onClickBtn = () => {
    this.setState(prevState => ({
      value: prevState.value + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {value} = this.state
    const calculate = value % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <h1 className="title">Count {value}</h1>
        <p className="count">{calculate}</p>
        <button className="btn" type="button" onClick={this.onClickBtn}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
