package com.optimus.controller;

import com.optimus.model.Imagem;
import com.optimus.repository.ImagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/imagem")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ImagemController {

    @Autowired
    private ImagemRepository repository;

    @GetMapping
    public ResponseEntity<List<Imagem>> GetAll(){
        return ResponseEntity.ok(repository.findAll());
    }

}
