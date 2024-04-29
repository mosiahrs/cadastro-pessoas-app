package com.mosiah.cadastropessoas.dto;

import com.mosiah.cadastropessoas.domain.pessoa.Pessoa;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ContatoCadastroRequest(
        @NotBlank
        String nome,
        @NotBlank
        String email,
        @NotBlank
        String telefone,
        @NotNull
        Long pessoaId
) {
}
