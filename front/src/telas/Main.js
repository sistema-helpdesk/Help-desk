import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import axios from 'axios';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEmpresa: [],
      listaSetores: [],
      listaErrosExibida: [],
      empresaSlcNome: 'SENAI',
      setorSlc: 'Tecnologia',
      erro1: null,
      erro2:null
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/empresas')
      .then(resposta => {
        let data = null
        //se deu certo:
        //this.setState({ listaEmpresa: resposta.data })
        data = resposta.data
        // data.map(linha => {

        // });
        // console.log(data)
        this.setState({ listaEmpresa: data })
        console.log(this.state.listaEmpresa)
      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
    axios.get('http://localhost:8080/setores')
      .then(resposta => {
        let data = null
        //se deu certo:
        //this.setState({ listaEmpresa: resposta.data })
        data = resposta.data
        // this.state.listaErro.push(data.erro1[0]);
        // console.log(this.state.listaErro);
        // data.map(linha => {

        // });
        // console.log(data)
        this.setState({ listaSetores: data })
        console.log(this.state.listaSetores)
      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
  }

  criarListaErros(e){
    this.setState({ setorSlc: e.target.value, erro1:'blah', erro2:'show' })
  }

  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>
            <select className="browser-default custom-select" style={{ marginTop: 20 }} onChange={(event => this.setState({ empresaSlc: event.target.value }) + console.log(this.state.empresaSlc))}>{/* React select no futuro */}
              {this.state.listaEmpresa.map(empresa =>
                <option key={empresa.id} >{empresa.nome}</option>
              )}
            </select>
            <select className="browser-default custom-select" style={{ marginTop: 20 }} onChange={(event => this.criarListaErros(event) + console.log(this.state.setorSlc))}>
              {this.state.listaSetores.map(setores =>
                <option key={setores.id} value={setores.id}>{setores.nome}</option>
              )}
            </select>
            <select className="browser-default custom-select" style={{ marginTop: 20 }}>
              {/* {this.state.listaSetores.map(setores =>
                <option key={setores.id}>{setores.erro1}</option>
              )} */}
              <option>{this.state.erro1}</option>
              <option>{this.state.erro2}</option>
            </select>
            {/* {this.state.listaSetores.map(tarefa =>
              <li key={tarefa.id}>
                <span className={`m-l-xs ${tarefa.id ? 'todo-completed' : ''}`}> {tarefa.nome} <select>
                  <option>{tarefa.erro1}</option><option>{tarefa.erro2}</option>
                  </select>
                  <button>Salvar</button> </span>
              </li> */}
            {/* )} */}
            <MDBInput type="textarea" label="Descrição" rows="5" />
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div >
    );
  }
}