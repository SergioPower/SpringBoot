package com.sergio.curso.java.springboot.backend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.sergio.curso.java.springboot.backend.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

}
