package com.optimus.controller;

import com.optimus.model.Imagem;
import com.optimus.model.Produto;
import com.optimus.repository.ImagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.zip.Deflater;
import java.io.ByteArrayOutputStream;
import java.util.zip.Inflater;
import java.util.zip.DataFormatException;
import java.util.Optional;

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

//    Parte do código para teste de subir imagem
    @PostMapping("/upload")
    public BodyBuilder uplaodImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Imagem img = new Imagem(file.getOriginalFilename(), file.getContentType(), compressBytes(file.getBytes()));
        repository.save(img);
        return ResponseEntity.status(HttpStatus.OK);
    }

    @GetMapping(path = { "/get/{imageName}" })
    public Imagem getImage(@PathVariable("imageName") String imageName) throws IOException {
        final Optional<Imagem> retrievedImage = repository.findByName(imageName);
        Imagem img = new Imagem(retrievedImage.get().getName(), retrievedImage.get().getType(),
                decompressBytes(retrievedImage.get().getPicByte()));

        return img;
    }

    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }

    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }

}
