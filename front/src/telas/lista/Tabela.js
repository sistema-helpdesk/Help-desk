import React,{Component} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCollapse, MDBBtn } from 'mdbreact';
import Chamado from '../chamado/Chamado';
import axios from 'axios';


//Transformar em classe
export default class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: false,
    }
  }

  toggleCollapse() {
    let colapsado = ''
    if (this.state.collapseID === false) {
      colapsado = true
    } else {
      colapsado = false
    }
    this.setState({collapseID: colapsado})
  };
  render(){

    return (
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>Descrição / Solução</th>
              <th>Situação</th>
              <th>Responsável</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th>1</th>
              <th><button onClick={() => this.toggleCollapse()} >Ver</button></th>
              <th>Em andamento</th>
              <th>Bruno</th>
            </tr>
            <tr>
              <th>2</th>
              <th><button onClick={() => this.toggleCollapse()} >Ver</button></th>
              <th>Em andamento</th>
              <th>Marcio</th>
            </tr>
            <tr>
              <th>3</th>
              <th><button onClick={() => this.toggleCollapse()} >Ver</button></th>
              <th>Em andamento</th>
              <th>Rodr</th>
            </tr>
            <tr>
              <th>4</th>
              <th><button onClick={() => this.toggleCollapse()} >{/*props.propzin*/} Ver</button></th>
              <th>Em andamento</th>
              <th>Marcel</th>
            </tr>
          </MDBTableBody>
        </MDBTable>
        <MDBCollapse isOpen={this.state.collapseID}>
  
          {/* {this.state.erro && <div className="alert alert-danger">{this.state.erro}</div>} */}
          <Chamado empresa='E' setor='S' descricao='D'></Chamado>
            <MDBBtn color="primary">Salvar</MDBBtn>
  
        </MDBCollapse>
      </div>
    );
  
  }
}
