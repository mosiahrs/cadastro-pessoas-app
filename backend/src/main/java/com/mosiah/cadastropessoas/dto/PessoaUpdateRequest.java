package com.mosiah.cadastropessoas.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;

public record PessoaUpdateRequest(
        @NotNull
        Long id,
        String nome,
        @CPF(message = "CPF inválido")
        String cpf,
        @PastOrPresent(message = "Data de nascimento, não pode ser uma data futura")
        LocalDate dataNascimento
) {
}
