package com.mosiah.cadastropessoas.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;
import java.util.List;

public record PessoaCadastroRequest(
                @NotBlank(message = "Campo No   me é obrigatório!") String nome,

                @NotBlank(message = "Campo CPF é obrigatório!") @CPF(message = "CPF inválido") String cpf,

                @NotNull @PastOrPresent(message = "Data de nascimento, não pode ser uma data futura!") LocalDate dataNascimento,

                @NotEmpty(message = "Para cadastrar uma pessoa é necessário ao menos 1 contato!") List<ContatoDTO> listaContatos) {
}
