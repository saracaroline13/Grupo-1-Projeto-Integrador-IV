package com.optimus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.optimus.model.Itens;
import com.optimus.repository.ItensRepository;



@RestController
@CrossOrigin(origins="*", allowedHeaders = "*")
@RequestMapping("/itens")
public class ItensController {
	
	@Autowired
	private ItensRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Itens>> getAll(){
		return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
	}
	
	@PostMapping
	public ResponseEntity<Itens> post(@RequestBody Itens item){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(item));
	}

	 @DeleteMapping("/{id}")
	    public void delete(@PathVariable Long id) {
	        repository.deleteById(id);
	    }
	
}
