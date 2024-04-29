package com.mosiah.cadastropessoas.dto;

import jakarta.validation.constraints.NotBlank;

public record ContatoDTO(
        @NotBlank
        String nome,
        @NotBlank
        String telefone,
        @NotBlank
        String email
) {
}
