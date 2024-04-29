package com.mosiah.cadastropessoas.domain.pessoa;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PessoaService {

    private final PessoaRepository repository;

    public PessoaService(PessoaRepository repository) {
        this.repository = repository;
    }

    public Pessoa obterUmaUnicaPessoa(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Page<Pessoa> obterVariasPessoasPaginado(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Pessoa cadastrar(Pessoa pessoa) {
        return repository.save(pessoa);
    }

    public void atualizar(Pessoa pessoa) {
        repository.save(pessoa);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
