import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCollapse, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';


//Transformar em classe
export default class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricaoVista: '',
      solucaoVista: '',
      collapseID: false,
      empresa: 'E',
      setor: 'S',
      descricaoAtual: '',
      solucaoAtual: '',
      solucao: '',
      listaChamada: [],
      listaRespo: [],
      idAtual: null,
      erroAtual: null,
      tipoAtual: null,
      tipoAntigo:null,
      empresaAtual: null,
      setorAtual: null,
      statusAtual: 'Concluido',
      listaSetores: [],
      num1: 1
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
        console.log(resposta)
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
        data = resposta.data
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


  chamadoEditar() {
    if (!this.state.solucao) {
      alert('Preencha uma solução!')
    } else {
      axios.put('http://localhost:8080/chamados/' + this.state.idAtual, {
        id: this.state.idAtual,
        empresa: {
          "id": this.state.empresaAtual,
        },
        setor: {
          "id": this.state.setorAtual,
        },
        tipo: this.state.tipoAtual,
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

  toggleCollapse(idzin, descr, solu, err, stat, empr, set, tipo) {
    let colapsado = ''
    // let solucaoTemp = ''
    if (this.state.collapseID === false) {
      colapsado = true
    } else {
      colapsado = false
    }
    //Feito para fazer o campo 'solução Atual:'
    // if (!solu) {
    //   solucaoTemp = ''
    // } else {
    //   solucaoTemp = 'Solução atual: ' + solu
    // }
    // console.log(this.state.listaChamada[1])
    this.setState({ collapseID: colapsado, idAtual: idzin, descricaoAtual: descr, solucaoAtual: solu, erroAtual: err, status: stat, empresaAtual: empr, setorAtual: set, tipoAtual: tipo, tipoAntigo: tipo })
  };

  render() {
    return (
      <div style={{ paddingBottom: 30 }}>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Setor</th>
              <th className='alinhandoCentro'>Descrição / Solução</th>
              <th className='alinhandoCentro'>Editar</th>
              <th>Situação</th>
              <th>Responsável</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.state.listaChamada.map(chamados =>
              <tr key={chamados.id}>
                <th>{chamados.id}</th>
                <th>{chamados.empresa.nome}</th>
                <th>{chamados.setor.nome}</th>
                <th className='alinhandoCentro'><button onClick={() => this.setState({ descricaoVista: chamados.descricao, solucaoVista: chamados.solucao === null ? "" : chamados.solucao })} >Ver</button></th>
                <th className='alinhandoCentro'><button onClick={() => this.toggleCollapse(chamados.id, chamados.descricao, chamados.solucao, chamados.erro, chamados.status, chamados.empresa.id, chamados.setor.id, chamados.tipo)} >Editar</button></th>
                <th>{chamados.status}</th>
                <th>{chamados.setor.responsavel}</th>
                {/* {chamados.setor} */}
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
        <MDBCollapse isOpen={this.state.collapseID} style={{ paddingBottom: 30 }}>

          {/* {this.state.erro && <div className="alert alert-danger">{this.state.erro}</div>} */}
          {/* <MDBInput type="textarea" label="Empresa" rows="1" value={this.state.empresa} disabled></MDBInput>
          <MDBInput type="textarea" label="Setor" rows="1" value={this.state.setor} disabled></MDBInput> */}
          <MDBInput type="textarea" label="Descrição" rows="5" value={this.state.descricaoAtual} disabled></MDBInput>
          <MDBInput type="textarea" label="Solução" rows="5" onChange={(event => this.setState({ solucao: event.target.value }))} ></MDBInput>
          <label>Tipo do Chamado: {this.state.tipoAntigo}</label>
          <select className="browser-default custom-select" defaultValue='n/declarado' style={{ marginBottom: 20 }} onChange={(event => this.setState({ tipoAtual: event.target.value }) + console.log(event.target.value))}>
            {/* {this.state.listaSetores.map(setores =>
                <option key={setores.id}>{setores.erro1}</option>
              )} */}
            <option value='n/declarado' disabled>Selecione o tipo de manutenção</option>
            <option value='Adaptativo'>Adaptativo</option>
            <option value='Corretivo'>Corretivo</option>
            <option value='Evolutivo'>Evolutivo</option>
          </select>
          {/* <p className='blue-text'>{this.state.solucaoAtual}</p> */}
          <MDBBtn color="primary" onClick={() => this.chamadoEditar()}>Salvar</MDBBtn>
        </MDBCollapse>
        <hr></hr>
        <p>Descrição: </p>
        <textarea value={this.state.descricaoVista} style={{ width: 920, height: 100 }} disabled></textarea>
        <br></br>
        <p>Solução: </p>
        <textarea label="Solução" value={this.state.solucaoVista} style={{ width: 920, height: 100 }} disabled></textarea>
      </div>
    );

  }
}
