import logo from './logo.svg'
import './App.css'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      location: 'KC'
    }
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello from { this.state.location }!
            </p>
            <button onClick={() => this.setState({ location: 'Amsterdam' })}>Change text</button>
          </header>
        </div>
    )
  }
}

export default App
