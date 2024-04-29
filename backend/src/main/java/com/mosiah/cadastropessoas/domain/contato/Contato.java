package com.mosiah.cadastropessoas.domain.contato;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mosiah.cadastropessoas.domain.pessoa.Pessoa;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Table(name = "contatos")
@Entity(name = "contatos")
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100)

    @NotBlank
    private String nome;

    @NotBlank
    private String telefone;

    @Email
    @NotBlank
    private String email;

    @ManyToOne
    @JsonIgnore
    private Pessoa pessoa;

    public Contato() {
    }

    public Contato(Long id, String nome, String telefone, String email, Pessoa pessoa) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.pessoa = pessoa;
    }

    public Contato(String nome, String email, String telefone, Pessoa pessoa) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.pessoa = pessoa;
}

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }
}
