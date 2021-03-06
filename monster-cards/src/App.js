import {Component} from 'react'
import CardList from './Components/card-list/CardList';
import './App.css';
import SearchBox from './Components/search-box/SearchBox';

class App extends Component {

  constructor(){
    super()

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(()=>{
        return {monsters:users}
      }))
  }

  onSeachChange = (e)=> {
    const searchField = e.target.value.toLowerCase()
    this.setState(()=>{
      return {searchField}
  })
  
}

  render(){

    const {monsters, searchField} = this.state;
    const {onSeachChange} = this;

    const filtered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
      })

    return (
      <div className="App">
      
        <SearchBox 
          changeHandler={onSeachChange}
          className="search-box"
          placeholder= "Search Monsters"
         />

        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
