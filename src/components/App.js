import React from 'react';
import Table from './Table'

export default class App extends React.Component{
  constructor(props){
    super(props)
      this.state={
        profissionais:[

        ]
      }
  }

componentDidMount(){
    // Configurando o fetch (para criar um novo objeto no JS)
    let config = {
      headers:{
          // No header - Informo que o retorno que terei é um json
          "Content-Type":"application/json"
      },
}
    // No fetch, eu passo como parâmetro as configurações que fiz acima. O fetch é uma configuração ajax, e o retorno dele é uma promessa.
    // No primeiro then, recebo a resposta completa (os dados que o servidor processou), que é um callback
    // O segundo then é para poder trabalhar com essas informações de fato, pegar o conteúdo da resposta
    fetch('http://localhost:8000/api/profissionais',config)
    .then(function(resposta){
        console.log(resposta)
        return resposta.json();
    }).then((json)=>{ //para usar o this aqui, preciso deixar como escopo global, e para isso uso arrow function 
        this.setState({
          ...this.state,
          profissionais: [
            ...json,
          ] //poderia escreve profissionais: json que faria a mesma coisa.
        })
        console.log(json);
    }).catch(function(erro){
        console.log(erro);
    })
    // O catch é para exibir o erro da aplicação
}

  render(){

    return(
      <Table dados={this.state.profissionais}/>
    )
  }
}