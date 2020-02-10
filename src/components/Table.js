import React from 'react';

export default class Table extends React.Component{
    render(){
        return(
            <>
            <table className="table col-6">
                <thead className="thead-dark">
                <tr>
                    <th>Nome</th>
                    <th>Github</th>
                </tr>
                </thead>
                <tbody>
                {this.props.dados.map((profissional)=>{
                return(
                    // sempre que usamos o map no React, precisamos passar o campo key, para que o react identifique esse item pelo virtual dom - isso torna esse processamento mais rápido.
                        <tr key={profissional.id}>
                        <td>{profissional.name}</td>
                        <td>{profissional.github}</td>
                        </tr>
                    )  
                })}
                </tbody>
            </table>
            </>
        )
    }
}