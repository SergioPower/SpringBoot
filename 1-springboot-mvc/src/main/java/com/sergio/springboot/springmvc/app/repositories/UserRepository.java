package com.sergio.springboot.springmvc.app.repositories;

import org.springframework.data.repository.CrudRepository;

import com.sergio.springboot.springmvc.app.entities.User;

public interface UserRepository extends CrudRepository<User, Long>{
    
}
