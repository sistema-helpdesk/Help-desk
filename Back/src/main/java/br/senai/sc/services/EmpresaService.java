package br.senai.sc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senai.sc.domain.Empresa;
import br.senai.sc.repositories.EmpresaRepository;

@Service
public class EmpresaService {
	@Autowired
	private EmpresaRepository repo;

	public Empresa findById(Integer id) {
		Optional<Empresa> obj = repo.findById(id);
		return obj.orElse(null);
	}

	public List<Empresa> findAll() {
		return repo.findAll();
	}

	public Empresa insert(Empresa obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Empresa update(Empresa obj) {
		return repo.save(obj);
	}

	public void delete(Integer id) {
		findById(id);
		repo.deleteById(id);
	}
}

