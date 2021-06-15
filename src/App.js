import './App.css'
import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'

const EXTERNAL_USERS_API = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(EXTERNAL_USERS_API)
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <input
          type='search'
          placeholder='search monsters'
          onChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App
