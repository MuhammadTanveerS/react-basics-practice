import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      name:'Tanveer',
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name}
          </p>
          <button onClick={ () => {
            this.setState( ()=>{
              return {name:'Samejo'}
            },
             ()=>{
              console.log(this.state);
             })  
          }}
          >
          Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;