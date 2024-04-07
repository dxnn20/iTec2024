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
    @Column(name="status", length = 4000)
    private String status;
    private int duration;
    private boolean bugged;
    private int counter;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER,cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name="app_id", referencedColumnName = "id")
    private App app;

    public Endpoint() {}

    public Endpoint(Long id, String path, String method, String status, int duration, boolean bugged, int counter, App app) {
        this.id = id;
        this.path = path;
        this.method = method;
        this.status = status;
        this.duration = duration;
        this.bugged = bugged;
        this.counter = counter;
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

    public int getDuration() {
        return duration;
    }

    public boolean getBugged() {
        return bugged;
    }

    public int getCounter() {
        return counter;
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

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void setBugged(boolean bugged) {
        this.bugged = bugged;
    }

    public void setCounter(int counter) {
        this.counter = counter;
    }

    public void setApp(App app) {
        this.app = app;
    }
}
