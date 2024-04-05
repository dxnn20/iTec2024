package com.example.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class App {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String name;
    private String status;

    @OneToMany(mappedBy = "app", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Endpoint> endpoints;

    public App() {}

    public App(Long id, String name, List<Endpoint> endpoints) {
        this.id = id;
        this.name = name;
        this.endpoints = endpoints;
    }

    public void addEndpoint(Endpoint endpoint)
    {
        if (endpoints==null) {endpoints=new ArrayList<>();}
        endpoints.add(endpoint);
        endpoint.setApp(this);
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStatus() {
        return status;
    }

    public List<Endpoint> getEndpoints() {
        return endpoints;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setEndpoints(List<Endpoint> endpoints) {
        this.endpoints = endpoints;
    }
}
