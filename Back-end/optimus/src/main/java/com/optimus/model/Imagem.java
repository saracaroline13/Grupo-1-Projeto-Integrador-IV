package com.optimus.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="tb_imagem")
public class Imagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idImagem;

    @Column
    private String link1;
    @Column
    private String link2;
    @Column
    private String link3;
    @Column
    private String link4;

    //    Parte do código para teste de subir imagem
    @Column(name = "name")
    private String name;

    @Column(name = "picByte", length = 1000)
    private byte[] picByte;

    @Column(name = "type")
    private String type;

//    @ManyToOne // Relação com a tabela Produto
//    @JsonIgnoreProperties("imagem")
//    private Produto produto;

    @Column
    private int idProjeto;

    public Imagem() {
    }

    public Imagem(String name, String type, byte[] picByte) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }

    // Get e Set
    public long getIdImagem() {
        return idImagem;
    }

    public void setIdImagem(long idImagem) {
        this.idImagem = idImagem;
    }

    public String getLink1() {
        return link1;
    }

    public void setLink1(String link1) {
        this.link1 = link1;
    }

    public String getLink2() {
        return link2;
    }

    public void setLink2(String link2) {
        this.link2 = link2;
    }

    public String getLink3() {
        return link3;
    }

    public void setLink3(String link3) {
        this.link3 = link3;
    }

    public String getLink4() {
        return link4;
    }

    public void setLink4(String link4) {
        this.link4 = link4;
    }

    public int getIdProjeto() {
        return idProjeto;
    }

    public void setIdProjeto(int idProjeto) {
        this.idProjeto = idProjeto;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
