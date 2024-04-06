package com.example.controllers;

import com.example.entities.App;
import com.example.entities.Endpoint;
import com.example.repositories.AppRepository;
import com.example.repositories.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/endpoint")
public class EndpointController {

    @Autowired
    EndpointRepository endpointRepository;

    @Autowired
    AppRepository appRepository;

    // CREATE
    @PostMapping(path = "/createByAppId/{id}")
    public void createByAppId(@PathVariable Long id, @RequestBody Endpoint endpoint)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app=optionalApp.get();

        endpoint.setStatus("");
        app.addEndpoint(endpoint);
        appRepository.save(app);
    }

    @PostMapping(path="/reportBugById/{id}")
    public void reportBugById(@PathVariable Long id)
    {
        Optional<Endpoint> optionalEndpoint=endpointRepository.findById(id);
        Endpoint endpoint=optionalEndpoint.get();

        endpoint.setBugged(true);
        endpointRepository.save(endpoint);
    }

    @PostMapping(path="/reportFixById/{id}")
    public void reportFixById(@PathVariable Long id)
    {
        Optional<Endpoint> optionalEndpoint=endpointRepository.findById(id);
        Endpoint endpoint=optionalEndpoint.get();

        endpoint.setBugged(false);
        endpointRepository.save(endpoint);
    }


    // READ
    @GetMapping(path="/getById/{id}")
    public Optional<Endpoint> getById(@PathVariable Long id)
    {
        return endpointRepository.findById(id);
    }

    @GetMapping(path="/getAllByAppId/{id}")
    public List<Endpoint> getAllByUserId(@PathVariable Long id)
    {
        Optional<App> optionalApp=appRepository.findById(id);
        App app=optionalApp.get();

        return app.getEndpoints();
    }


    // DELETE
    @DeleteMapping(path="/deleteById/{id}")
    public void deleteById(@PathVariable Long id)
    {
        endpointRepository.deleteById(id);
    }

}
