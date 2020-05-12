import React, { Component } from 'react';
import Film from './Film';

class App extends Component{
  state={  
      data: [],
      name: "KrzysiekState",
      languages: ["php", "java", "C#"]
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/cassettes/all")
      .then(res => res.json())
      .then
        (data => {
          console.log(data)
          this.setState({data})
          }
      );      
      
    }
      


  render() {
    return (
      <div>
        Hello {this.state.name}
        <p>{this.state.languages[0]}</p>
        <p>{this.state.data.map(film => <Film info={film}/>)}</p>
      </div>
    );
  }
}



export default App;