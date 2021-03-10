package com.optimus.controller;

import com.optimus.model.Imagem;
import com.optimus.model.Produto;
import com.optimus.repository.ImagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/projeto/{id}")
    public ResponseEntity<Imagem> getByIdProjeto(@PathVariable int id) {
        return ResponseEntity.ok(repository.findAllByIdProjeto(id));
    }

    @PostMapping
    public ResponseEntity<Imagem> postImagem(@RequestBody Imagem imagem){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(imagem));
    }

    @PutMapping
    public ResponseEntity<Imagem> putImagem(@RequestBody Imagem imagem){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(imagem));
    }

    @DeleteMapping("/{id}")
    public void deleteImagem(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
