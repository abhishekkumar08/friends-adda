import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list';
import { SearchBox } from './component/search-box/search-box';
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ friends: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { friends, searchField } = this.state;
    // const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchField.toLowerCase));
    const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Friends Adda</h1>
        <SearchBox placeholder='Seach friend' handleChange={this.handleChange} />
        <CardList friends={filteredFriends} />
      </div>
    );
  }
}

export default App;
