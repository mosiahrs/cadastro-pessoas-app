package com.mosiah.cadastropessoas.utils;

import com.mosiah.cadastropessoas.domain.contato.Contato;
import com.mosiah.cadastropessoas.domain.pessoa.Pessoa;
import com.mosiah.cadastropessoas.dto.ContatoCadastroRequest;
import com.mosiah.cadastropessoas.dto.ContatoDTO;
import org.springframework.stereotype.Component;

@Component
public class ContatoMapper {

    public Contato cadastroContatoToEntity(ContatoCadastroRequest request, Pessoa pessoa) {
        return new Contato(request.nome(), request.email(), request.telefone(), pessoa);
    }

    public Contato contatoDTOToEntity(ContatoDTO dto, Pessoa pessoa){
        return new Contato(dto.nome(), dto.email(), dto.telefone(), pessoa);
    }
}
