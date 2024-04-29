package com.mosiah.cadastropessoas.utils;

import com.mosiah.cadastropessoas.domain.pessoa.Pessoa;
import com.mosiah.cadastropessoas.dto.PessoaCadastroRequest;
import com.mosiah.cadastropessoas.dto.PessoaPaginadoResponse;
import com.mosiah.cadastropessoas.dto.PessoaResponse;
import com.mosiah.cadastropessoas.dto.PessoaUpdateRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class PessoaMapper {

    public PessoaResponse pessoaToResponse(Pessoa entidade) {
        return new PessoaResponse(entidade.getId(),
                entidade.getNome(),
                entidade.getCpf(),
                entidade.getDataNascimento(),
                entidade.getListaContatos());
    }

    public PessoaPaginadoResponse pageToResponse(Page<Pessoa> page) {
        return new PessoaPaginadoResponse(page.getTotalElements(),
                page.getTotalPages(),
                page.getNumber(),
                page.getContent().stream()
                        .map(this::pessoaToResponse)
                        .toList());
    }

    public Pessoa cadastroRequestToEntity(PessoaCadastroRequest request) {
        return new Pessoa(request.nome(), request.cpf(), request.dataNascimento());
    }

    public void atualizaRequestToEntity(PessoaUpdateRequest request, Pessoa pessoa) {
        if (!Objects.equals(request.nome(), ""))
            pessoa.setNome(request.nome());
        if (!Objects.equals(request.cpf(), ""))
            pessoa.setCpf(request.cpf());
        if (request.dataNascimento() != null)
            pessoa.setDataNascimento(request.dataNascimento());
    }

}
