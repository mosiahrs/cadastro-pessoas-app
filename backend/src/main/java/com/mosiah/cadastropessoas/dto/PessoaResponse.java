package com.mosiah.cadastropessoas.dto;

import com.mosiah.cadastropessoas.domain.contato.Contato;

import java.time.LocalDate;
import java.util.List;

public record PessoaResponse(
        Long id,
        String nome,
        String cpf,
        LocalDate dataNascimento,
        List<Contato> listaContatos
) {}
