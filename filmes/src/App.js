import React, { Component } from 'react';
import './App.css';
import ListaFilmes from './Components/listaFilmes';


class App extends Component {

  render() {
    return (
      <div className="App">
       <ListaFilmes />
      </div>
    );
  }
}

export default App;
