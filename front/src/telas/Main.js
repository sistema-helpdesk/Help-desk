import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';

export default class Main extends Component {
  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>
            <select className="browser-default custom-select" style={{ marginTop: 20 }}>{/* React select no futuro */}
              <option>Empresa</option>
              <option value="1">Empresa 1</option>
              <option value="2">Empresa 2</option>
              <option value="3">Empresa 3</option>
            </select>
            <select className="browser-default custom-select" style={{ marginTop: 20 }}>
              <option>Setor</option>
              <option value="1">Setor 1</option>
              <option value="2">Setor 2</option>
              <option value="3">Setor 3</option>
            </select>
            <select className="browser-default custom-select" style={{ marginTop: 20 }}>
              <option>Lista Erro</option>
              <option value="1">Erro 1</option>
              <option value="2">Erro 2</option>
              <option value="3">Erro 3</option>
            </select>
            <MDBInput type="textarea" label="Descrição" rows="5" />
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div >
    );
  }
}