import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCollapse } from 'mdbreact';
import Chamado from '../chamado/Chamado';


//Transformar em classe
export default function Tabela(props) {
  // let collapseID = false,
  // function toggleCollapse() {
  //   let colapsado = ''
  //   if (props.collapseID === false) {
  //     colapsado = true
  //   } else {
  //     colapsado = false
  //   }
  //   this.setState({ collapseID: colapsado })
  //   console.log(props.collapseID)
  // }

  // function toggleCollapse() {
  //   let colapsado = ''
  //   if (this.state.collapseID === false) {
  //     colapsado = true
  //   } else {
  //     colapsado = false
  //   }
  //   collapseID: colapsado
  // };

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
            <th><button >Ver</button></th>
            <th>Em andamento</th>
            <th>Bruno</th>
          </tr>
          <tr>
            <th>2</th>
            <th><button>Ver</button></th>
            <th>Em andamento</th>
            <th>Marcio</th>
          </tr>
          <tr>
            <th>3</th>
            <th><button>Ver</button></th>
            <th>Em andamento</th>
            <th>Rodr</th>
          </tr>
          <tr>
            <th>4</th>
            <th><button>{/*props.propzin*/} Ver</button></th>
            <th>Em andamento</th>
            <th>Marcel</th>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBCollapse isOpen={true}>

        {/* {this.state.erro && <div className="alert alert-danger">{this.state.erro}</div>} */}
        <Chamado empresa='E' setor='S' descricao='D'></Chamado>

      </MDBCollapse>
    </div>
  );
}
