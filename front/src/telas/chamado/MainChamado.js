import React from 'react';
import Chamado from './Chamado';
import { MDBBtn } from 'mdbreact';


export default function MainChamados (props) {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 z-depth-3'>
            <div className='alinhandoEsquerda'>
              <Chamado empresa={this.state.empresa} setor={this.state.setor} descricao={this.state.descricao}></Chamado>
            </div>
            <MDBBtn color="primary">Salvar</MDBBtn>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div >
    );
}