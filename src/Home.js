/* eslint-disable linebreak-style */
import React from 'react'
import './Home.css'

class Home extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  handleDecrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    const { count } = this.state
    return (
      <div className="Home">
        <h2>
          Count test example value is
          {count}
        </h2>
        <button onClick={this.handleIncrement} type="button">
          Increment
        </button>
        <button onClick={this.handleDecrement} type="button">
          Decrement
        </button>
      </div>
    )
  }
}

export default Home
