package com.mosiah.cadastropessoas.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.mosiah.cadastropessoas.domain.contato.ContatoService;
import com.mosiah.cadastropessoas.domain.pessoa.Pessoa;
import com.mosiah.cadastropessoas.domain.pessoa.PessoaService;
import com.mosiah.cadastropessoas.dto.ContatoDTO;
import com.mosiah.cadastropessoas.dto.PessoaCadastroRequest;
import com.mosiah.cadastropessoas.dto.PessoaResponse;
import com.mosiah.cadastropessoas.utils.ContatoMapper;
import com.mosiah.cadastropessoas.utils.PessoaMapper;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;

import java.time.LocalDate;
import java.util.List;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static io.restassured.module.mockmvc.RestAssuredMockMvc.standaloneSetup;

@WebMvcTest
class PessoaControllerTest {

    @Autowired
    private PessoaController pessoaController;

    @MockBean
    private PessoaService mockPessoaService;
    @MockBean
    private ContatoService mockContatoService;
    @MockBean
    private PessoaMapper mockPessoaMapper;
    @MockBean
    private ContatoMapper mockContatoMapper;

    @BeforeEach
    public void setup(){
        standaloneSetup(this.pessoaController);
    }

    @Test
    public void deveRetornarSucessoQuandoBuscarPessoa(){

        Mockito.when(this.mockPessoaService.obterUmaUnicaPessoa(1L))
                .thenReturn(new Pessoa());

        Mockito.when(this.mockPessoaMapper.pessoaToResponse(new Pessoa()))
                .thenReturn(new PessoaResponse(1L, "Joaquim Silva", "78329248020", LocalDate.now(), List.of()));

        given()
                .accept(ContentType.JSON)
                .pathParam("pessoaId", "1")
        .when()
                .get("/v1/api/pessoas/{pessoaId}")
        .then()
                .statusCode(HttpStatus.OK.value());
    }

    @Test
    public void deveRetornarErroQuandoNaoEncontrarPessoa(){

        Mockito.when(mockPessoaService.obterUmaUnicaPessoa(5L)).thenReturn(null);

          given()
                .accept(ContentType.JSON)
                .pathParam("pessoaId", "5L")
        .when()
                .get("/v1/api/pessoas/{pessoaId}")
        .then()
                .status(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void deveCadastrarPessoaComSucesso() throws Exception {

        given()
                .accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .body(criarCadastroRequestValidoJSON())
        .when()
                .post("/v1/api/pessoas")
        .then()
                .status(HttpStatus.CREATED);
    }

    private String criarCadastroRequestValidoJSON() throws JsonProcessingException {
        ObjectMapper jsonMapper = new ObjectMapper();
        jsonMapper.registerModule(new JavaTimeModule());
        return jsonMapper.writeValueAsString(cadastroValido());
    }

    private PessoaCadastroRequest cadastroValido() {
        return new PessoaCadastroRequest(
                "Joaquim Silva",
                "24160261000",
                LocalDate.now(),
                List.of(new ContatoDTO("Maria", "5544999992222", "maria@gmail.com")));
    }

}