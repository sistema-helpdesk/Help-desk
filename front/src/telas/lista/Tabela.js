import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCollapse, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';


//Transformar em classe
export default class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: false,
      empresa: 'E',
      setor: 'S',
      descricaoAtual: '',
      solucaoAtual: null,
      solucao: '',
      listaChamada: [],
      idAtual: null,
      erroAtual: null,
      empresaAtual:null,
      setorAtual:null,
      statusAtual: 'Concluido'
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/chamados')
      .then(resposta => {
        let data = null
        //se deu certo:
        data = resposta.data
        // data.map(linha => {

        // });
        // console.log(data)
        this.setState({ listaChamada: data })
        console.log(this.state.listaChamada)
      })
      .catch(resposta => {
        //se deu errado:
        alert('Deu errado!')
        console.log(resposta)
      })
  }


  chamadoEditar() {
    if( !this.state.solucao ){
      alert('Preencha uma solução!')
    } else{
      axios.put('http://localhost:8080/chamados/' + this.state.idAtual, {
        id: this.state.idAtual,
        nEmpresa: this.state.empresaAtual,
        nSetor: this.state.setorAtual,
        solucao: this.state.solucao,
        erro: this.state.erroAtual,
        descricao: this.state.descricaoAtual,
        status: this.state.statusAtual
        // aluno:[{id:1}]
      }).then(res => {
        window.location.reload();
      })
      console.log(this.state.solucao)

    }
  }

  toggleCollapse(idzin, descr, solu, err, stat, empr, set) {
    let colapsado = ''
    if (this.state.collapseID === false) {
      colapsado = true
    } else {
      colapsado = false
    }
    // console.log(this.state.listaChamada[1])
    this.setState({ collapseID: colapsado, idAtual: idzin, descricaoAtual: descr, solucaoAtual: solu, erroAtual: err, status: stat, empresaAtual: empr, setorAtual: set })
  };

  render() {
    return (
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Setor</th>
              <th className='alinhandoCentro'>Descrição / Solução</th>
              <th>Situação</th>
              {/* <th>Responsável</th> */}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.state.listaChamada.map(chamados =>
              <tr key={chamados.id}>
                <th>{chamados.id}</th>
                <th>{chamados.nEmpresa}</th>
                <th>{chamados.nSetor}</th>
                <th className='alinhandoCentro'><button onClick={() => this.toggleCollapse(chamados.id, chamados.descricao, chamados.solucao, chamados.erro, chamados.status, chamados.nEmpresa, chamados.nSetor)} >Ver</button></th>
                <th>{chamados.status}</th>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
        <MDBCollapse isOpen={this.state.collapseID}>

          {/* {this.state.erro && <div className="alert alert-danger">{this.state.erro}</div>} */}
          {/* <MDBInput type="textarea" label="Empresa" rows="1" value={this.state.empresa} disabled></MDBInput>
          <MDBInput type="textarea" label="Setor" rows="1" value={this.state.setor} disabled></MDBInput> */}
          <MDBInput type="textarea" label="Descrição" rows="5" value={this.state.descricaoAtual} disabled></MDBInput>
          <MDBInput type="textarea" label="Solução" rows="5" onChange={(event => this.setState({ solucao: event.target.value }))} ></MDBInput>
          <p>Solução atual: {this.state.solucaoAtual}</p>
          <MDBBtn color="primary" onClick={() => this.chamadoEditar()}>Salvar</MDBBtn>

        </MDBCollapse>
      </div>
    );

  }
}
