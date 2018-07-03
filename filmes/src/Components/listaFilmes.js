import React, { Component } from 'react';

class listaFilmes extends Component {
  constructor(props){
    super(props);

    this.state = {
      filmes: ""
    };

  }

  componentDidMount = () => {
    fetch("http://filmes-animacoes.herokuapp.com/").then(promessa => promessa.json()).then(filmes => {
      this.setState({filmes : filmes});
      console.log(filmes);
    })
  }

  mostrarLista = () => {
    for(let filme of this.state.filmes) {
      return(
        <ul>
          <li>{filme._id}</li>
          <li>{filme.nome}</li>
          <li>{filme.duracao}</li>
          <li>{filme.genero}</li>
          <li>{filme.pontuacao}</li>
          <li>{filme.lancamento}</li>
        </ul>
      );
    }
  };

  render() {
    console.log(this.mostrarLista());
    return (
      <div>{this.mostrarLista()}</div>
    );
  }
}

export default listaFilmes;
