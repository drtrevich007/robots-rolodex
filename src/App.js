import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    //first time component gets placed on dom; only happens once
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { robots: users }
      }
      ))
  }

  //Initializes once 
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    //cast as variables using destructuring
    const { robots, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField) || robot.email.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Robots Rolodex</h1>
        < SearchBox onChangeHandler={onSearchChange} placeholder='Search Robots' className='robots-search-box' />
        < CardList robots={filteredRobots} />
      </div>

    )
  }
}

export default App;
