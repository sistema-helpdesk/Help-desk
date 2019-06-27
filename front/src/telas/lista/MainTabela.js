import React, { Component } from 'react';
import Tabela from './Tabela';

export default class MainTabela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: false,
    }
  }
  render() {
    return (
      <div className='container containerBorda' style={{ marginTop: 60, marginBottom: 60 }}>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-10 alinhandoEsquerda z-depth-3'>
            <Tabela propzin='usando props' collapseID={this.state.collapseID}></Tabela>
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div >
    );
  }
}