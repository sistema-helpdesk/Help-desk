package br.senai.sc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.senai.sc.domain.Chamado;

public interface ChamadoRepository  extends JpaRepository<Chamado, Integer>{

}