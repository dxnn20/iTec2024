package com.example.entities;

import com.example.security.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private int seconds;
    private String status;

    //@JsonIgnore
    @OneToMany(fetch = FetchType.EAGER,mappedBy = "app", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Endpoint> endpoints;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User user;

    public App() {}

    public App(Long id, String name, int seconds, String status, List<Endpoint> endpoints, User user) {
        this.id = id;
        this.name = name;
        this.seconds = seconds;
        this.status = status;
        this.endpoints = endpoints;
        this.user = user;
    }

    @Override
    public String toString() {
        return "App{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", seconds=" + seconds +
                ", status='" + status + '\'' +
                ", endpoints=" + endpoints +
                ", user=" + user +
                '}';
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

    public int getSeconds() {
        return seconds;
    }

    public String getStatus() {
        return status;
    }

    public List<Endpoint> getEndpoints() {
        return endpoints;
    }

    public User getUser() {
        return user;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSeconds(int seconds) {
        this.seconds = seconds;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setEndpoints(List<Endpoint> endpoints) {
        this.endpoints = endpoints;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
