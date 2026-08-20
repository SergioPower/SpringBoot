package com.sergio.springboot.springmvc.app.controllers;

import java.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sergio.springboot.springmvc.app.entities.User;
import com.sergio.springboot.springmvc.app.services.UserService;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping({ "/view", "/another" })
    public String View(Model model) {
        model.addAttribute("title", "Hola Mundo Spring Boot");
        model.addAttribute("message", "Esta es una aplicación de ejemplo usando Spring boot");
        model.addAttribute("user", new User("Sergio", "Guzman"));
        return "view";
    }

    @GetMapping
    public String list(Model model) {
        model.addAttribute("title", "Listado de usuarios");
        model.addAttribute("users", service.findAll());
        return "list";
    }

    @GetMapping("/form")
    public String form(Model model) {
        model.addAttribute("user", new User());
        model.addAttribute("title", "Crear Usuario");
        return "form";
    }

    @GetMapping("/form/{id}")
    public String form(@PathVariable Long id, Model model, RedirectAttributes redirect) {
        Optional<User> optionalUser = service.findById(id);
        if (optionalUser.isPresent()) {
            model.addAttribute("users", optionalUser.get());
            model.addAttribute("title", "Crear Usuario");
            return "form";
        } else {
            redirect.addFlashAttribute("error", "El usuario con id " + id + " no existe en la base de datos!");
            return "redirect:/";
        }
    }

    @PostMapping
    public String form(User user, Model model, RedirectAttributes redirect) {

        String message = (user.getId() != null && user.getId() > 0) ? 
        "El usuario " + user.getName() + " se ha actualizado con exito!" : 
        "El usuario " + user.getName() + " se ha creado con exito!"; ;
       
        service.save(user);
        redirect.addFlashAttribute("success", message);
        return "redirect:/users";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id, RedirectAttributes redirect) {
        Optional<User> optionalUser = service.findById(id);
        if (optionalUser.isPresent()) {
            redirect.addFlashAttribute("success", "El usuario " +
                    optionalUser.get().getName() + " se ha eliminado con exito!");
            service.remove(id);
            return "redirect:/users";
        } else {
            redirect.addFlashAttribute("error", "Error el usuario con el id" + id + " no existe en el sistema");
            return "redirect:/users";

        }
    }

}
