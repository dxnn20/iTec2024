package com.example.controllers;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/app")
public class AppController {

    @Autowired
    AppRepository appRepository;

    @Autowired
    EndpointRepository endpointRepository;

    @PostMapping(path="/create/app")
    public void create(@RequestBody App app)
    {
        appRepository.save(app);
    }

    @PostMapping(path="/create/endpoint/{id}")
    public void create(@RequestBody Endpoint endpoint, @PathVariable Long id)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app= optionalApp.get();

        app.addEndpoint(endpoint);
        appRepository.save(app);
    }
}
