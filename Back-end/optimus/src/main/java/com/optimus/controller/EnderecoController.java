package com.optimus.controller;

import com.optimus.model.Endereco;
import com.optimus.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/endereco")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class EnderecoController {

    @Autowired
    private EnderecoRepository repository;

    @GetMapping
    public ResponseEntity<List<Endereco>> GetAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity <Endereco> getById(@PathVariable Long id) {
        return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Endereco> postEndereco(@RequestBody Endereco endereco){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(endereco));
    }

    @PutMapping
    public ResponseEntity<Endereco> putEndereco(@RequestBody Endereco endereco){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(endereco));
    }

    @DeleteMapping("/{id}")
    public void deleteEndereco(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
