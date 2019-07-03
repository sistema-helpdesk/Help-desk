package br.senai.sc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.senai.sc.domain.Chamado;
import br.senai.sc.domain.Empresa;
import br.senai.sc.domain.Setor;
import br.senai.sc.repositories.ChamadoRepository;
import br.senai.sc.repositories.EmpresaRepository;
import br.senai.sc.repositories.SetorRepository;

@SpringBootApplication
public class BackApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

	@Autowired
	private EmpresaRepository empresaR;
	
	@Autowired
	private SetorRepository setorR;
	
	@Autowired
	private ChamadoRepository chamadoR;
	
	@Override
	public void run(String... args) throws Exception {

		Empresa empresa1 = new Empresa(null, "SENAI");
		Empresa empresa2 = new Empresa(null, "Intelbras");
		Empresa empresa3 = new Empresa(null, "IFSC");
		Empresa empresa4 = new Empresa(null, "Continente Shopping");
		Empresa empresa5 = new Empresa(null, "Padaria do Xande");

		Setor setor1 = new Setor(null, "Relações Humanas", "Erro no cadastro de novos funcionários", "Erro na expedição de folha de pagamento", "João");
		Setor setor2 = new Setor(null, "Tecnologia","Sistema não abre", "Sistema não se conecta à base de dados", "Irineu");
		Setor setor3 = new Setor(null, "Serviços Gerais", "A página de pedidos está incompleta", "Os pedidos realizados não estão chegando ao setor de compras", "Severino");
		Setor setor4 = new Setor(null, "Vendas", "Não está sendo possível atualizar a página de um produto", "A opção de pagamento com cartão não está funcionando", "Cláudio");
		Setor setor5 = new Setor(null, "Almoxarifado", "Não está sendo possível remover um produto da base de dados", "Há produtos duplicados na listagem", "Marcelo");
		
		Chamado chamado1 = new Chamado(null, setor1.getErro1(), "O sistema é horrível. Eu exijo uma atualização geral e total. dá um jeito! Não aguento mais! Não consigo cadastrar novos funcionários.", "Em andamento", null, empresa1.getNome(), setor1.getNome(), empresa1, setor1);
		Chamado chamado2 = new Chamado(null, setor2.getErro1(), "O sistema é bom demais. Eu amo trabalhar com ele. Me sinto realizado. Porém, há uma pequena falha: Ele não está abrindo.", "Em andamento", null, empresa2.getNome(), setor2.getNome(), empresa2, setor2);

		empresaR.save(empresa1);
		empresaR.save(empresa2);
		empresaR.save(empresa3);
		empresaR.save(empresa4);
		empresaR.save(empresa5);

		setorR.save(setor1);
		setorR.save(setor2);
		setorR.save(setor3);
		setorR.save(setor4);
		setorR.save(setor5);

		chamadoR.save(chamado1);
		chamadoR.save(chamado2);
		
	}

}
