package com.optimus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.optimus.model.Itens;

@Repository
public interface ItensRepository extends JpaRepository<Itens, Long> {

}
