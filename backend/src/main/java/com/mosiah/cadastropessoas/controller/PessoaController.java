package com.mosiah.cadastropessoas.controller;

import com.mosiah.cadastropessoas.domain.contato.ContatoService;
import com.mosiah.cadastropessoas.domain.pessoa.PessoaService;
import com.mosiah.cadastropessoas.dto.PessoaCadastroRequest;
import com.mosiah.cadastropessoas.dto.PessoaPaginadoResponse;
import com.mosiah.cadastropessoas.dto.PessoaResponse;
import com.mosiah.cadastropessoas.dto.PessoaUpdateRequest;
import com.mosiah.cadastropessoas.utils.ContatoMapper;
import com.mosiah.cadastropessoas.utils.PessoaMapper;
import jakarta.validation.Valid;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/v1/api/pessoas")
public class PessoaController {

    private final PessoaService pessoaService;
    private final ContatoService contatoService;
    private final PessoaMapper mapperPessoa;
    private final ContatoMapper mapperContato;

    public PessoaController(PessoaService pessoaService, ContatoService contatoService, PessoaMapper mapper, ContatoMapper mapperContato) {
        this.pessoaService = pessoaService;
        this.contatoService = contatoService;
        this.mapperPessoa = mapper;
        this.mapperContato = mapperContato;
    }

    @GetMapping("/{pessoaId}")
    ResponseEntity<PessoaResponse> obterUmaPessoa(@PathVariable("pessoaId") Long pessoaId) {
        var pessoa =  pessoaService.obterUmaUnicaPessoa(pessoaId);
        if (pessoa == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(mapperPessoa.pessoaToResponse(pessoa), HttpStatus.OK);
    }

    @GetMapping
    ResponseEntity<PessoaPaginadoResponse> obterVariasPessoasPaginado(@RequestParam(defaultValue = "0") int page,
                                                                      @RequestParam(defaultValue = "5") int size) {
        return new ResponseEntity<>(
                mapperPessoa.pageToResponse(
                    pessoaService.obterVariasPessoasPaginado(PageRequest.of(page, size, Sort.by("id")))),
                    HttpStatus.OK);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    void cadastrarPessoa(@RequestBody @Validated @Valid PessoaCadastroRequest cadastroRequest) {
        var novaPessoa = pessoaService.cadastrar(mapperPessoa.cadastroRequestToEntity(cadastroRequest));
        var listaContato =
                cadastroRequest.listaContatos().stream()
                .map(contatoDTO -> {return mapperContato.contatoDTOToEntity(contatoDTO, novaPessoa);})
                .toList();

        contatoService.salvarLista(listaContato);
    }

    @PutMapping
    void atualizarPessoa(@RequestBody @Validated @Valid PessoaUpdateRequest updateRequest) {
        var pessoa = pessoaService.obterUmaUnicaPessoa(updateRequest.id());
        mapperPessoa.atualizaRequestToEntity(updateRequest, pessoa);
        pessoaService.atualizar(pessoa);
    }

    @DeleteMapping("/{pessoaId}")
    void deletarPessoa(@PathVariable("pessoaId") Long pessoaId) {   
        if(pessoaService.obterUmaUnicaPessoa(pessoaId) != null) {
            pessoaService.deletar(pessoaId);
        }
    }
}
