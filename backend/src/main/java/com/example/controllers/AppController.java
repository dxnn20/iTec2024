package com.example.controllers;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import com.example.security.entities.User;
import com.example.security.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/app")
public class AppController {

    @Autowired
    AppRepository appRepository;

    @Autowired
    EndpointRepository endpointRepository;

    @Autowired
    UserRepository userRepository;

    // CREATE
    @PostMapping(path="/create/{id}")
    public void create(@RequestBody App app, @PathVariable Long id)
    {
        Optional<User> optionalUser=userRepository.findById(id);
        User user=optionalUser.get();

        user.addApp(app);
        userRepository.save(user);
    }


    // READ
    @GetMapping(path="/getAll")
    public List<App> getAll()
    {
        return appRepository.findAll();
    }

    @GetMapping(path="/getAllByUserId/{id}")
    public List<App> getAll(@PathVariable Long id)
    {
        Optional<User> optionalUser=userRepository.findById(id);
        User user=optionalUser.get();
        return user.getApps();
    }


    // UPDATE
    @PutMapping("/update")
    public void update(@RequestBody App app)
    {
        Optional<App> optionalApp=appRepository.findById(app.getId());
        App savedApp=optionalApp.get();

        savedApp.setName(app.getName());
        savedApp.setSeconds(app.getSeconds());

        appRepository.save(savedApp);
    }
}
