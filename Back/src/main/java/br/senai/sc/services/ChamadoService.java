package br.senai.sc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.senai.sc.domain.Chamado;
import br.senai.sc.repositories.ChamadoRepository;

@Service
public class ChamadoService {
	@Autowired
	private ChamadoRepository repo;

	public Chamado findById(Integer id) {
		Optional<Chamado> obj = repo.findById(id);
		return obj.orElse(null);
	}

	public List<Chamado> findAll() {
		return repo.findAll();
	}

	public Chamado insert(Chamado obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Chamado update(Chamado obj) {
		return repo.save(obj);
	}

	public void delete(Integer id) {
		findById(id);
		repo.deleteById(id);
	}
}
