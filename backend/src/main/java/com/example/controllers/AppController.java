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

    @PostMapping(path="/create/{id}")
    public void create(@RequestBody App app, @PathVariable Long id)
    {
        Optional<User> optionalUser=userRepository.findById(id);
        User user=optionalUser.get();

        user.addApp(app);
        userRepository.save(user);
    }

    @PostMapping(path="/create/endpoint/{id}")
    public void create(@RequestBody Endpoint endpoint, @PathVariable Long id)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app= optionalApp.get();

        app.addEndpoint(endpoint);
        appRepository.save(app);
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
}
