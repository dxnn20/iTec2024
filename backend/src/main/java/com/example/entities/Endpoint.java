package com.example.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Endpoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String path;
    private String method;
    private String status;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="app_id", referencedColumnName = "id")
    private App app;

    public Endpoint() {}

    public Endpoint(Long id, String path, String method, String status, App app) {
        this.id = id;
        this.path = path;
        this.method = method;
        this.status = status;
        this.app = app;
    }


    public Long getId() {
        return id;
    }

    public String getPath() {
        return path;
    }

    public String getMethod() {
        return method;
    }

    public String getStatus() {
        return status;
    }

    public App getApp() {
        return app;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setApp(App app) {
        this.app = app;
    }
}
