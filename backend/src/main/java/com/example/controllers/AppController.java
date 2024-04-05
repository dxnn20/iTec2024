package com.example.controllers;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
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

    @PostMapping(path="/create")
    public void create(@RequestBody App app)
    {
        appRepository.save(app);
    }

    @PostMapping(path="/create/endpoint/{id}")
    public void create(@RequestBody Endpoint endpoint, @PathVariable Long id)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app= optionalApp.get();

        String s=new String();
        for (int i=0;i<144;i++) s.concat("g");
        endpoint.setStatus(s);

        app.addEndpoint(endpoint);
        appRepository.save(app);
    }


    // READ
    @GetMapping(path="/getAll")
    public List<App> getAll()
    {
        return appRepository.findAll();
    }
}
