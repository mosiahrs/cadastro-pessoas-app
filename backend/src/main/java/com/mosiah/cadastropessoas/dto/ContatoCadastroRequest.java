package com.mosiah.cadastropessoas.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ContatoCadastroRequest(
                @NotBlank String nome,
                @NotBlank String email,
                @NotBlank String telefone,
                @NotNull Long pessoaId) {
}
