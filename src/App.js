import './App.css'
import { Component } from 'react'

const EXTERNAL_USERS_API = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch(EXTERNAL_USERS_API)
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
        <div className="App">
          {
            this.state.monsters.map(monster => {
              return <h1 key={ monster.id }>{ monster.name }</h1>
            })
          }
        </div>
    )
  }
}

export default App
