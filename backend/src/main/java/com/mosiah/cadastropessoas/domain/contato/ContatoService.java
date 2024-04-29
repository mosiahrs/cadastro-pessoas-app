package com.mosiah.cadastropessoas.domain.contato;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContatoService {

    private final ContatoRepository repository;

    public ContatoService(ContatoRepository repository) {
        this.repository = repository;
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public void cadastrar(Contato contato) {
        repository.save(contato);
    }

    public Contato obter(Long id) {
        return  repository.findById(id).orElse(null);
    }

    public void salvarLista(List<Contato> listaContato) {
        repository.saveAll(listaContato);
    }
}
