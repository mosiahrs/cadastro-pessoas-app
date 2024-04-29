package com.mosiah.cadastropessoas.controller;

import com.mosiah.cadastropessoas.domain.contato.Contato;
import com.mosiah.cadastropessoas.domain.contato.ContatoService;
import com.mosiah.cadastropessoas.domain.pessoa.PessoaService;
import com.mosiah.cadastropessoas.dto.ContatoCadastroRequest;
import com.mosiah.cadastropessoas.utils.ContatoMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api/contatos")
public class ContatoController {

    private final PessoaService pessoaService;
    private final ContatoMapper mapper;
    private final ContatoService contatoService;

    public ContatoController(PessoaService pessoaService, ContatoMapper mapper, ContatoService contatoService) {
        this.pessoaService = pessoaService;
        this.mapper = mapper;
        this.contatoService = contatoService;
    }

    @PostMapping
    void cadastrarContato(@RequestBody ContatoCadastroRequest request) {
        var pessoa = pessoaService.obterUmaUnicaPessoa(request.pessoaId());
        contatoService.cadastrar(
                mapper.cadastroContatoToEntity(request, pessoa)
        );
    }

    @GetMapping("/{contatoId}")
    Contato buscarUmContato(@PathVariable("contatoId") Long contatoId) {
       return contatoService.obter(contatoId);
    }

    @DeleteMapping("/{contatoId}")
    void deletarContato(@PathVariable("contatoId") Long contatoId) {
        if (contatoService.obter(contatoId) != null) {
            contatoService.deletar(contatoId);
        }
    }

}
