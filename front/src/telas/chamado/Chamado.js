import React from 'react';
import { MDBInput } from 'mdbreact';

export default function Chamado(props) {
  return (
    <div>
      <MDBInput type="textarea" label="Empresa" rows="1" value={props.empresa} disabled></MDBInput>
      <MDBInput type="textarea" label="Setor" rows="1" value={props.setor} disabled></MDBInput>
      <MDBInput type="textarea" label="Descrição" rows="5" value={props.descricao} disabled></MDBInput>
      <MDBInput type="textarea" label="Solução" rows="5" />
    </div>
  );
}
