package com.optimus.repository;

import com.optimus.model.Imagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ImagemRepository extends JpaRepository<Imagem, Long> {

    public Imagem findAllByIdProjeto(int id);
    // Parte do código para teste de subir imagem
    Optional<Imagem> findByName(String name);


}
