package com.optimus.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tb_produto")
public class Produto {

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment
    private Long id;

    @Column
    private String nome;

    @Column
    private String autor;

    @Column
    private String editora;

    @Column
    private double valor;

    @Column
    private String descricao;

    @Column
    private String imgPrincipal;

    @OneToMany(mappedBy = "produto", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("produto")
    private List<Imagem> imagens;

    // Get e Set
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImgPrincipal() {
        return imgPrincipal;
    }

    public void setImgPrincipal(String imgPrincipal) {
        this.imgPrincipal = imgPrincipal;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public List<Imagem> getImagens() {
        return imagens;
    }

    public void setImagens(List<Imagem> imagens) {
        this.imagens = imagens;
    }
}
