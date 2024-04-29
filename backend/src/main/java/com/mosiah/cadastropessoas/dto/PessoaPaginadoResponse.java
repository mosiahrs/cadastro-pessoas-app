package com.mosiah.cadastropessoas.dto;

import java.util.List;

public record PessoaPaginadoResponse(
        Long totalItems,
        Integer totalPaginas,
        Integer paginaAtual,
        List<PessoaResponse> pessoas
) {
}
