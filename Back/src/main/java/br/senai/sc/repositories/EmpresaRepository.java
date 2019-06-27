package br.senai.sc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.senai.sc.domain.Empresa;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Integer>{

}
