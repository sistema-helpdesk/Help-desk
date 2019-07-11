import React, { Component } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEmpresa: [],
      listaSetores: [],
      listaErrosExibida: [],
      erro: '',
      erro1: '',
      erro2: '',
      descricao: '',
      empresaSlcId: '',
      setorSlcId: '',
      erroAtual: ''
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

  chamadoPost() {
    // let emprezin = [
    //   '{"id":1}'
    // ]
    if (!this.state.descricao | !this.state.setorSlcId | !this.state.empresaSlcId | !this.state.erroAtual) {
      alert('Preencha e selecione todos os campos!');
    } else {
      axios.post('http://localhost:8080/chamados', {
        id: null,
        erro: this.state.erroAtual,
        descricao: this.state.descricao,
        status: 'Em andamento',
        solucao: null,
        nEmpresa: this.state.empresaSlcId,
        nSetor: this.state.setorSlcId,
        empresa: {
          "id": this.state.empresaSlcId
        },
        setor: {
          "id": this.state.setorSlcId
        }//resolvido problema com ligações!
      }).then(resposta => {
        //se deu certo:
        alert('Cadastrado com sucesso!');
        window.location.reload();
      }).catch(resposta => {
        //se der errado
        alert('Dados incorretos!');
      })
    }
  }

  criarListaErros(e) {
    let setorId = e.target.value;
    let errin1 = null;
    let errin2 = null;
    // if (setorId == 1) {
    //   errin1 = 'Erro no cadastro de novos funcionários'
    //   errin2 = 'Erro na expedição de folha de pagamento'
    // } else if (setorId == 2) {
    //   errin1 = 'Sistema não abre'
    //   errin2 = 'Sistema não se conecta à base de dados'
    // } else if (setorId == 3) {
    //   errin1 = 'A página de pedidos está incompleta'
    //   errin2 = 'Os pedidos realizados não estão chegando ao setor de compras'
    // } else if (setorId == 4) {
    //   errin1 = 'Não está sendo possível atualizar a página de um produto'
    //   errin2 = 'A opção de pagamento com cartão não está funcionando'
    // } else if (setorId == 5) {
    //   errin1 = 'Não está sendo possível remover um produto da base de dados'
    //   errin2 = 'Há produtos duplicados na listagem'
    // }
    errin1 = this.state.listaSetores[setorId - 1].erro1;
    errin2 = this.state.listaSetores[setorId - 1].erro2;

    this.setState({ erro1: errin1, erro2: errin2, setorSlcId: setorId })
  }

  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>
            <select className="browser-default custom-select" defaultValue='n/declarado' style={{ marginTop: 20 }} onChange={(event => this.setState({ empresaSlcId: event.target.value }) + console.log(event.target.value))}>{/* React select no futuro */}
              <option value='n/declarado' disabled>Empresas</option>
              {this.state.listaEmpresa.map(empresa =>
                <option key={empresa.id} label={empresa.nome} value={empresa.id}></option>
              )}
            </select>
            <select className="browser-default custom-select" defaultValue='n/declarado' style={{ marginTop: 20 }} onChange={(event => this.criarListaErros(event))}>{/* + console.log(this.state.setorSlc) */}
              <option value='n/declarado' disabled>Setores</option>
              {this.state.listaSetores.map(setores =>
                <option key={setores.id} value={setores.id}>{setores.nome}</option>
              )}
            </select>
            <select className="browser-default custom-select" defaultValue='n/declarado' style={{ marginTop: 20 }} onChange={(event => this.setState({ erroAtual: event.target.value }) + console.log(this.state.erroAtual))}>
              {/* {this.state.listaSetores.map(setores =>
                <option key={setores.id}>{setores.erro1}</option>
              )} */}
              <option value='n/declarado' disabled>Erros</option>
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
            <MDBInput type="textarea" label="Descrição" rows="5" onChange={(event => this.setState({ descricao: event.target.value }))} />

            <MDBBtn color="primary" onClick={() => this.chamadoPost()}>Salvar</MDBBtn>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div >
    );
  }
}