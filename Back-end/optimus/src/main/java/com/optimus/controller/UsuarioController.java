package com.optimus.controller;

import com.optimus.model.Produto;
import com.optimus.model.Usuario;
import com.optimus.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class UsuarioController {

    @Autowired
    private ClienteRepository repository;

    @GetMapping
    public ResponseEntity<List<Usuario>> GetAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity <Usuario> getById(@PathVariable Long id) {
        return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<Usuario>> GetByEmail(@PathVariable String email){
        return ResponseEntity.ok(repository.findAllByEmailContainingIgnoreCase(email));
    }

    @PostMapping
    public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(usuario));
    }

    @PutMapping
    public ResponseEntity<Usuario> putUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.status(HttpStatus.OK).body(repository.save(usuario));
    }

    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        repository.deleteById(id);
    }



}
