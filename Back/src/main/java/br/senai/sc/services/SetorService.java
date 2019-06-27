package br.senai.sc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senai.sc.domain.Setor;
import br.senai.sc.repositories.SetorRepository;

@Service
public class SetorService {
	@Autowired
	private SetorRepository repo;

	public Setor findById(Integer id) {
		Optional<Setor> obj = repo.findById(id);
		return obj.orElse(null);
	}

	public List<Setor> findAll() {
		return repo.findAll();
	}

	public Setor insert(Setor obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Setor update(Setor obj) {
		return repo.save(obj);
	}

	public void delete(Integer id) {
		findById(id);
		repo.deleteById(id);
	}
}
