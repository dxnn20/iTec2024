package com.example.controllers;

import com.example.entities.Endpoint;
import com.example.repositories.EndpointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/endpoint")
public class EndpointController {

    @Autowired
    EndpointRepository endpointRepository;

    @GetMapping(path="/getById/{id}")
    public Optional<Endpoint> getById(@PathVariable Long id)
    {
        return endpointRepository.findById(id);
    }
}
