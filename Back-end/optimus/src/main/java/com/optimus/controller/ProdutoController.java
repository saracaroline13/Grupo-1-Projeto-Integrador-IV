package com.optimus.controller;

import com.optimus.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.optimus.repository.ProdutoRepository;

import java.util.List;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @GetMapping
    public ResponseEntity<List<Produto>> GetAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity <Produto> getById(@PathVariable Long id) {
        return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Produto> postProduto(@RequestBody Produto produto){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(produto));
    }

    @PutMapping
    public ResponseEntity<Produto> putProduto(@RequestBody Produto produto){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(produto));
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
