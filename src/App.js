import './App.css'
import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'

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
        <CardList>
          {
            this.state.monsters.map(monster => {
              return <h1 key={ monster.id }>{ monster.name }</h1>
            })
          }
        </CardList>
      </div>
    )
  }
}

export default App
