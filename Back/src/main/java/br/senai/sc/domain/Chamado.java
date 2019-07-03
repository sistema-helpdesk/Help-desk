package br.senai.sc.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Chamado  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String erro;
	private String descricao;
	private String status;
	private String solucao;
	private String nEmpresa;
	private String nSetor;

//	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "empresa_id")
	private Empresa empresa;
	
	@ManyToOne
	@JoinColumn(name = "setor_id")
	private Setor setor;

	public Chamado() {
		
	}
	
	public Chamado(Integer id, String erro, String descricao, String status, String solucao, String nEmpresa,
			String nSetor, Empresa empresa, Setor setor) {
		super();
		this.id = id;
		this.erro = erro;
		this.descricao = descricao;
		this.status = status;
		this.solucao = solucao;
		this.nEmpresa = nEmpresa;
		this.nSetor = nSetor;
		this.empresa = empresa;
		this.setor = setor;
	}

	public String getnEmpresa() {
		return nEmpresa;
	}

	public void setnEmpresa(String nEmpresa) {
		this.nEmpresa = nEmpresa;
	}

	public String getnSetor() {
		return nSetor;
	}

	public void setnSetor(String nSetor) {
		this.nSetor = nSetor;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getErro() {
		return erro;
	}

	public void setErro(String erro) {
		this.erro = erro;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSolucao() {
		return solucao;
	}

	public void setSolucao(String solucao) {
		this.solucao = solucao;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Chamado other = (Chamado) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	
	
	
	
}
