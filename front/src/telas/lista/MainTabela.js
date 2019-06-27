import React, { Component } from 'react';
import Tabela from './Tabela';

export default class MainTabela extends Component {
  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>
            <Tabela ></Tabela>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div >
    );
  }
}